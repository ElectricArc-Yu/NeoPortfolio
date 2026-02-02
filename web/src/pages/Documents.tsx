import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import type { GDDType, PublicDoc } from '../data/types';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';
import { siteConfig } from '../data/siteConfig';
import { getLocalizedValue } from '../utils/i18n';
import { FileText, BookOpen, ChevronDown, ChevronUp, FlaskConical, GraduationCap, ClipboardList, FileCode, Mic } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

// Icon mapping for GDD types
const gddTypeIcons: Record<GDDType, React.ReactNode> = {
    Test: <ClipboardList size={18} />,
    Analysis: <FlaskConical size={18} />,
    Methodology: <GraduationCap size={18} />,
    GDD: <FileCode size={18} />
};

// Map GDD types to translation keys for titles
const gddTypeTranslationKeys: Record<GDDType, string> = {
    Test: 'Design Tests',
    Analysis: 'Analysis & Research',
    Methodology: 'Methodology & Tutorials',
    GDD: 'Full Game Design Documents'
};

// Map GDD types to translation keys for descriptions
const gddTypeDescTranslationKeys: Record<GDDType, string> = {
    Test: 'Design Tests Description',
    Analysis: 'Analysis & Research Description',
    Methodology: 'Methodology & Tutorials Description',
    GDD: 'Full Game Design Documents Description'
};

const Documents: React.FC = () => {
    const { language, t } = useLanguage();
    const [selectedDoc, setSelectedDoc] = useState<{ url: string; title: string } | null>(null);
    const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(new Set());
    const [expandedCategories, setExpandedCategories] = useState<Set<GDDType>>(new Set());

    const toggleCategory = (type: GDDType) => {
        setExpandedCategories(prev => {
            const next = new Set(prev);
            if (next.has(type)) {
                next.delete(type);
            } else {
                next.add(type);
            }
            return next;
        });
    };

    const toggleAbstract = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedAbstracts(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const handleCardClick = (doc: PublicDoc) => {
        if (doc.externalUrl) {
            window.open(doc.externalUrl, '_blank', 'noopener,noreferrer');
        } else if (doc.url) {
            setSelectedDoc({ url: doc.url, title: getLocalizedValue(doc.titles, language) || '' });
        }
    };

    // Helper to parse date string (YYYY.MM.DD or YYYY.MM)
    const parseDate = (dateStr: string) => {
        const parts = dateStr.split('.');
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1] || '1') - 1;
        const day = parseInt(parts[2] || '1');
        return new Date(year, month, day);
    };

    // Group by category
    const papers = publicDocs
        .filter(d => d.category === 'Paper')
        .sort((a, b) => {
            const ifA = parseFloat(a.impactFactor || '0') || 0;
            const ifB = parseFloat(b.impactFactor || '0') || 0;
            if (ifB !== ifA) return ifB - ifA;
            const dateA = parseDate(a.date).getTime();
            const dateB = parseDate(b.date).getTime();
            if (dateB !== dateA) return dateB - dateA;
            const typePriority = (type?: string) => {
                if (type === 'Full Paper' || type === 'Paper') return 3;
                if (type === 'Letter') return 2;
                return 1;
            };
            return typePriority(b.paperType) - typePriority(a.paperType);
        });

    const lectures = publicDocs
        .filter(d => d.category === 'Lecture')
        .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    const gdds = publicDocs.filter(d => d.category === 'GDD');

    // Group GDDs by type and sort by date (newest first)
    const gddsByType = gdds.reduce((acc, doc) => {
        const type = doc.gddType || 'GDD';
        if (!acc[type]) acc[type] = [];
        acc[type].push(doc);
        return acc;
    }, {} as Record<GDDType, PublicDoc[]>);

    // Sort each group by date
    Object.keys(gddsByType).forEach(type => {
        gddsByType[type as GDDType].sort((a, b) => {
            return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        });
    });

    // Define display order for GDD types
    const gddTypeOrder: GDDType[] = ['Test', 'Analysis', 'Methodology', 'GDD'];

    // Render Paper Card - No animation
    const renderPaperCard = (doc: PublicDoc) => {
        const description = getLocalizedValue(doc.descriptions, language) || '';
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;

        return (
            <div key={doc.id} className={styles.paperCard}>
                <div className={styles.paperTopRow}>
                    <div className={styles.paperInfoBadges}>
                        {doc.paperType && (
                            <span className={styles.paperTypeBadge}>{t(doc.paperType)}</span>
                        )}
                        {doc.journal && (
                            <span className={styles.journalBadge}>{doc.journal}</span>
                        )}
                        {doc.impactFactor && doc.impactFactor !== 'N/A' && doc.impactFactor !== '0' && (
                            <span className={styles.impactFactorBadge}>IF: {doc.impactFactor}</span>
                        )}
                    </div>
                    <div className={styles.paperLinks}>
                        {doc.preprintUrl !== undefined && (
                            <button
                                className={`${styles.paperLinkBtn} ${!doc.preprintUrl ? styles.disabled : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (doc.preprintUrl) window.open(doc.preprintUrl, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {t('Preprint')}
                            </button>
                        )}
                        {doc.externalUrl !== undefined && (
                            <button
                                className={`${styles.paperLinkBtn} ${styles.primaryLink} ${!doc.externalUrl ? styles.disabled : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClick(doc);
                                }}
                            >
                                {t('Published')}
                            </button>
                        )}
                    </div>
                </div>

                <h3 className={styles.paperTitle}>
                    {getLocalizedValue(doc.titles, language)}
                </h3>

                <div className={styles.paperBasicInfo}>
                    <span>{doc.date}</span>
                    <span className={styles.separator}>|</span>
                    <span>{getLocalizedValue(doc.lengths, language)}</span>
                    <span className={styles.separator}>|</span>
                    <span>{getLocalizedValue(doc.originalLangs, language)}</span>
                </div>

                <div className={styles.description}>
                    <span className={styles.abstractText}>
                        <span className={styles.abstractLabel}>
                            {t('Abstract')}:{' '}
                        </span>
                        {displayDescription}
                    </span>
                    {isLongAbstract && (
                        <button
                            className={styles.expandBtn}
                            onClick={(e) => toggleAbstract(doc.id, e)}
                        >
                            {isExpanded ? (
                                <>{t('Collapse')} <ChevronUp size={14} /></>
                            ) : (
                                <>{t('Expand')} <ChevronDown size={14} /></>
                            )}
                        </button>
                    )}
                </div>
            </div>
        );
    };

    // Render GDD Card
    const renderGDDCard = (doc: PublicDoc) => {
        const targetPosition = getLocalizedValue(doc.targetPositions, language);

        return (
            <div
                key={doc.id}
                className={styles.card}
                onClick={() => handleCardClick(doc)}
            >
                <div className={styles.categoryBadge} data-category={doc.gddType || 'GDD'}>
                    {gddTypeIcons[doc.gddType || 'GDD']}
                </div>

                <div className={styles.cardHeader}>
                    <h3 className={styles.docTitle}>
                        {getLocalizedValue(doc.titles, language)}
                    </h3>
                </div>

                <div className={styles.metaRow}>
                    <span className={styles.metaItem}>{doc.date}</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {getLocalizedValue(doc.originalLangs, language)}
                    </span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {getLocalizedValue(doc.lengths, language)}
                    </span>
                    {targetPosition && (
                        <>
                            <span className={styles.separator}>|</span>
                            <span className={`${styles.metaItem} ${styles.targetPosition}`}>
                                {t('Target')}: {targetPosition}
                            </span>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <PageTransition className={styles.container}>
            <motion.header
                className={styles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.title}>
                    {getLocalizedValue(siteConfig.pages.documents.titles, language)}
                </h1>
                <p className={styles.subtitle}>
                    {getLocalizedValue(siteConfig.pages.documents.subtitles, language)}
                </p>
            </motion.header>

            {/* Papers Section */}
            {papers.length > 0 && (
                <motion.section
                    className={`${styles.section} ${styles.paperSection}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.sectionTitle}>
                        <BookOpen size={20} />
                        {t('Academic Papers')}
                    </h2>
                    <div className={styles.grid}>
                        {papers.map(renderPaperCard)}
                    </div>
                </motion.section>
            )}

            {/* Lectures Section */}
            {lectures.length > 0 && (
                <motion.section
                    className={`${styles.section} ${styles.paperSection} ${styles.lectureSection}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.sectionTitle}>
                        <Mic size={20} />
                        {t('Lectures & Writing')}
                    </h2>
                    <div className={styles.grid}>
                        {lectures.map(renderPaperCard)}
                    </div>
                </motion.section>
            )}

            {/* GDDs Section - Grouped by Type */}
            <motion.section
                className={`${styles.section} ${styles.gddSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.sectionTitle}>
                    <FileText size={20} />
                    {t('Past Paper Work Examples')}
                </h2>

                <div className={styles.gddGroups}>
                    {gddTypeOrder.map(type => {
                        const items = gddsByType[type];
                        if (!items) return null;

                        const isExpanded = expandedCategories.has(type);

                        return (
                            <div
                                key={type}
                                className={`${styles.gddTypeGroup} ${isExpanded ? styles.expanded : ''}`}
                            >
                                <div
                                    className={styles.gddTypeHeader}
                                    onClick={() => toggleCategory(type)}
                                >
                                    <div className={styles.gddTypeIcon}>
                                        {gddTypeIcons[type]}
                                    </div>
                                    <div className={styles.gddTypeInfo}>
                                        <h3 className={styles.gddTypeTitle}>
                                            {t(gddTypeTranslationKeys[type])}
                                        </h3>
                                        <p className={styles.gddTypeDesc}>
                                            {t(gddTypeDescTranslationKeys[type])}
                                        </p>
                                    </div>
                                    <div className={styles.gddTypeCount}>
                                        {items.length}
                                    </div>
                                    <div className={styles.expandIndicator}>
                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            className={styles.gddTypeCards}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={styles.gddGrid}>
                                                {items.map(renderGDDCard)}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {selectedDoc && (
                <PdfModal
                    onClose={() => setSelectedDoc(null)}
                    url={selectedDoc.url}
                    title={selectedDoc.title}
                />
            )}
        </PageTransition>
    );
};

export default Documents;
