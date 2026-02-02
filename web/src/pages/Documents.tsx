import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import type { GDDType, PublicDoc } from '../data/types';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';
import { siteConfig } from '../data/siteConfig';
import { getLocalizedValue } from '../utils/i18n';
import { FileText, BookOpen, ChevronDown, ChevronUp, FlaskConical, GraduationCap, ClipboardList, FileCode, Mic } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/variants';

// Icon mapping for GDD types
const gddTypeIcons: Record<GDDType, React.ReactNode> = {
    Test: <ClipboardList size={18} />,
    Analysis: <FlaskConical size={18} />,
    Methodology: <GraduationCap size={18} />,
    GDD: <FileCode size={18} />
};

// Map GDD types to translation keys
const gddTypeTranslationKeys: Record<GDDType, string> = {
    Test: 'Design Tests',
    Analysis: 'Analysis & Research',
    Methodology: 'Methodology & Tutorials',
    GDD: 'Full Game Design Documents'
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
        return new Date(parseInt(parts[0]), parseInt(parts[1] || '1') - 1, parseInt(parts[2] || '1'));
    };

    // Group by category
    const papers = publicDocs
        .filter(d => d.category === 'Paper')
        .sort((a, b) => {
            // 1. Sort by Impact Factor (IF) - Descending
            const ifA = parseFloat(a.impactFactor || '0') || 0;
            const ifB = parseFloat(b.impactFactor || '0') || 0;
            if (ifB !== ifA) return ifB - ifA;

            // 2. Sort by Date - Descending
            const dateA = parseDate(a.date).getTime();
            const dateB = parseDate(b.date).getTime();
            if (dateB !== dateA) return dateB - dateA;

            // 3. Sort by Paper Type (Paper/Full Paper > Letter > Others)
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

    // Render Paper Card
    const renderPaperCard = (doc: PublicDoc) => {
        const description = getLocalizedValue(doc.descriptions, language) || '';
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;

        return (
            <motion.div variants={fadeInUp} key={doc.id} className={styles.paperCard}>
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
                            <a
                                href={doc.preprintUrl || undefined}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.paperLinkBtn} ${!doc.preprintUrl ? styles.disabled : ''}`}
                                onClick={(e) => {
                                    if (!doc.preprintUrl) e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                {t('Preprint')}
                            </a>
                        )}
                        {doc.externalUrl !== undefined && (
                            <a
                                href={doc.externalUrl || undefined}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.paperLinkBtn} ${styles.primaryLink} ${!doc.externalUrl ? styles.disabled : ''}`}
                                onClick={(e) => {
                                    if (!doc.externalUrl) e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                {t('Published')}
                            </a>
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
            </motion.div>
        );
    };

    // Render GDD Card
    const renderGDDCard = (doc: PublicDoc) => {
        const description = getLocalizedValue(doc.descriptions, language) || '';
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;
        const targetPosition = getLocalizedValue(doc.targetPositions, language);

        return (
            <motion.div
                variants={fadeInUp}
                key={doc.id}
                className={styles.card}
                onClick={() => handleCardClick(doc)}
                layout="position"
                transition={{ duration: 0.3, ease: "easeOut" }} // Smoother card animation
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
            </motion.div>
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.sectionTitle}>
                        <BookOpen size={20} />
                        {t('Academic Papers')}
                    </h2>
                    <motion.div 
                        className={styles.grid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ staggerChildren: 0.08 }} // Faster stagger for better feel
                    >
                        {papers.map(renderPaperCard)}
                    </motion.div>
                </motion.section>
            )}

            {/* Lectures Section */}
            {lectures.length > 0 && (
                <motion.section 
                    className={`${styles.section} ${styles.paperSection} ${styles.lectureSection}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.sectionTitle}>
                        <Mic size={20} />
                        {t('Lectures & Writing')}
                    </h2>
                    <motion.div 
                        className={styles.grid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        transition={{ staggerChildren: 0.08 }} // Faster stagger for better feel
                    >
                        {lectures.map(renderPaperCard)}
                    </motion.div>
                </motion.section>
            )}

            {/* GDDs Section - Grouped by Type */}
            <motion.section 
                className={`${styles.section} ${styles.gddSection}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.sectionTitle}>
                    <FileText size={20} />
                    {t('Past Paper Work Examples')}
                </h2>

                {gddTypeOrder.map(type => {
                    const docs = gddsByType[type];
                    if (!docs || docs.length === 0) return null;

                    const isExpanded = expandedCategories.has(type);

                    return (
                        <motion.div 
                                key={type} 
                                className={`${styles.gddTypeGroup} ${isExpanded ? styles.expanded : ''}`}
                                layout="position"
                                layoutRoot // Enable layout animations for this container
                                transition={{ duration: 0.4, ease: "easeOut" }} // Smoother layout transitions
                            >
                            <motion.div
                                className={styles.gddTypeHeader}
                                onClick={() => toggleCategory(type)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && toggleCategory(type)}
                                layout="position"
                            >
                                <div className={styles.gddTypeIcon}>
                                    {gddTypeIcons[type]}
                                </div>
                                <div className={styles.gddTypeInfo}>
                                    <h3 className={styles.gddTypeTitle}>
                                        {t(gddTypeTranslationKeys[type])}
                                    </h3>
                                    <p className={styles.gddTypeDesc}>
                                        {language === 'EN' ? (
                                            type === 'Test' ? 'Design tests completed during job applications, demonstrating system design and problem-solving skills.' :
                                                type === 'Analysis' ? 'In-depth analysis of published game content, exploring design philosophy and system architecture.' :
                                                    type === 'Methodology' ? 'Design methodologies and professional development tutorials to enhance professional skills.' :
                                                        'Complete game design documents covering system design and level planning.'
                                        ) : (language === 'CN' ? (
                                            type === 'Test' ? '求职过程中完成的策划岗位测试题，展示系统设计与问题解决能力。' :
                                                type === 'Analysis' ? '对已发布游戏内容的深度分析，探索设计理念与系统架构。' :
                                                    type === 'Methodology' ? '设计方法论与职业发展教程，帮助提升专业能力。' :
                                                        '完整的游戏设计文档，涵盖系统设计与关卡规划。'
                                        ) : (
                                            type === 'Test' ? '採用選考中に作成された企画職用テスト。システム設計と問題解決能力を示しています。' :
                                                type === 'Analysis' ? 'リリース済みゲームタイトルの詳細な分析。デザイン哲学とシステム構成を掘り下げます。' :
                                                    type === 'Methodology' ? 'デザイン手法とキャリア開発のチュートリアル。専門能力の向上を目的としています。' :
                                                        'システム設計からレベルプランニングまで網羅した完全なゲーム企画書。'
                                        ))}
                                    </p>
                                </div>
                                <span className={styles.gddTypeCount}>{docs.length}</span>
                                <div className={styles.expandIndicator}>
                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </motion.div>
                            
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div 
                                        className={`${styles.gddTypeCards} ${isExpanded ? styles.cardsExpanded : styles.cardsCollapsed}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            variants={staggerContainer}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ staggerChildren: 0.06 }} // Faster stagger for smoother feel
                                        >
                                            {docs.map(renderGDDCard)}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.section>

            {selectedDoc && (
                <PdfModal
                    url={selectedDoc.url}
                    title={selectedDoc.title}
                    onClose={() => setSelectedDoc(null)}
                />
            )}
        </PageTransition>
    );
};

export default Documents;
