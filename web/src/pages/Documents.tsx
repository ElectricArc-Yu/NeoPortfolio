import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';
import { FileText, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

const Documents: React.FC = () => {
    const { language } = useLanguage();
    const [selectedDoc, setSelectedDoc] = useState<{ url: string; title: string } | null>(null);
    const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(new Set());

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

    const handleCardClick = (doc: typeof publicDocs[0]) => {
        if (doc.externalUrl) {
            window.open(doc.externalUrl, '_blank', 'noopener,noreferrer');
        } else if (doc.url) {
            setSelectedDoc({ url: getAssetPath(doc.url), title: language === 'CN' ? doc.titleCN : doc.titleEN });
        }
    };

    // Group by category and sort GDDs by date (newest first)
    const papers = publicDocs.filter(d => d.category === 'Paper');
    const gdds = publicDocs
        .filter(d => d.category === 'GDD')
        .sort((a, b) => {
            // Parse date strings like "2024.01" or "2024.03"
            const parseDate = (dateStr: string) => {
                const parts = dateStr.split('.');
                return new Date(parseInt(parts[0]), parseInt(parts[1] || '1') - 1);
            };
            return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        });

    // Render Paper Card (new layout)
    const renderPaperCard = (doc: typeof publicDocs[0]) => {
        const description = language === 'CN' ? doc.descriptionCN : doc.descriptionEN;
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;

        return (
            <div key={doc.id} className={styles.paperCard}>
                {/* Top Row: Info Cards + Links */}
                <div className={styles.paperTopRow}>
                    {/* Left: Info badges */}
                    <div className={styles.paperInfoBadges}>
                        {doc.paperType && (
                            <span className={styles.paperTypeBadge}>{doc.paperType}</span>
                        )}
                        {doc.journal && (
                            <span className={styles.journalBadge}>{doc.journal}</span>
                        )}
                        {doc.impactFactor && doc.impactFactor !== 'N/A' && (
                            <span className={styles.impactFactorBadge}>IF: {doc.impactFactor}</span>
                        )}
                    </div>
                    {/* Right: Links */}
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
                                {language === 'CN' ? '预印本' : 'Preprint'}
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
                                {language === 'CN' ? '发布页' : 'Published'}
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className={styles.paperTitle}>
                    {language === 'CN' ? doc.titleCN : doc.titleEN}
                </h3>

                {/* Basic Info Row */}
                <div className={styles.paperBasicInfo}>
                    <span>{doc.date}</span>
                    <span className={styles.separator}>|</span>
                    <span>{language === 'CN' ? doc.lengthCN : doc.lengthEN}</span>
                    <span className={styles.separator}>|</span>
                    <span>{language === 'CN' ? doc.originalLangCN : doc.originalLangEN}</span>
                </div>

                {/* Abstract */}
                <div className={styles.description}>
                    <span className={styles.abstractText}>
                        <span className={styles.abstractLabel}>{language === 'CN' ? '摘要: ' : 'Abstract: '}</span>
                        {displayDescription}
                    </span>
                    {isLongAbstract && (
                        <button
                            className={styles.expandBtn}
                            onClick={(e) => toggleAbstract(doc.id, e)}
                        >
                            {isExpanded ? (
                                <>{language === 'CN' ? '收起' : 'Collapse'} <ChevronUp size={14} /></>
                            ) : (
                                <>{language === 'CN' ? '展开' : 'Expand'} <ChevronDown size={14} /></>
                            )}
                        </button>
                    )}
                </div>
            </div>
        );
    };

    // Render GDD Card (original layout)
    const renderGDDCard = (doc: typeof publicDocs[0]) => {
        const description = language === 'CN' ? doc.descriptionCN : doc.descriptionEN;
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;

        return (
            <div
                key={doc.id}
                className={styles.card}
                onClick={() => handleCardClick(doc)}
            >
                {/* Category Badge */}
                <div className={styles.categoryBadge} data-category={doc.category}>
                    <FileText size={14} />
                    <span>GDD</span>
                </div>

                {/* Title Row */}
                <div className={styles.cardHeader}>
                    <h3 className={styles.docTitle}>
                        {language === 'CN' ? doc.titleCN : doc.titleEN}
                    </h3>
                </div>

                {/* Meta Row */}
                <div className={styles.metaRow}>
                    <span className={styles.metaItem}>{doc.date}</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {language === 'CN' ? `原文语言: ${doc.originalLangCN}` : `Original Language: ${doc.originalLangEN}`}
                    </span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {language === 'CN' ? `文章长度: ${doc.lengthCN}` : `Length: ${doc.lengthEN}`}
                    </span>
                    <span className={styles.separator}>|</span>
                    <span className={`${styles.metaItem} ${styles.internalTag}`}>
                        {language === 'CN'
                            ? (doc.isInternal ? '内部文档: 是' : '内部文档: 否')
                            : (doc.isInternal ? 'Internal Doc: Yes' : 'Internal Doc: No')}
                    </span>
                </div>

                {/* Abstract / Description */}
                <div className={styles.description}>
                    <span className={styles.abstractText}>
                        <span className={styles.abstractLabel}>{language === 'CN' ? '摘要: ' : 'Abstract: '}</span>
                        {displayDescription}
                    </span>
                    {isLongAbstract && (
                        <button
                            className={styles.expandBtn}
                            onClick={(e) => toggleAbstract(doc.id, e)}
                        >
                            {isExpanded ? (
                                <>{language === 'CN' ? '收起' : 'Collapse'} <ChevronUp size={14} /></>
                            ) : (
                                <>{language === 'CN' ? '展开' : 'Expand'} <ChevronDown size={14} /></>
                            )}
                        </button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{language === 'CN' ? '过往文档' : 'Past Documents'}</h1>
                <p className={styles.subtitle}>
                    {language === 'CN'
                        ? '包含可公开的设计文档、分析文章及学术论文。'
                        : 'Collection of publicable Game Design Documents, Analysis Articles & Academic Papers.'}
                </p>
            </header>

            {/* Papers Section */}
            {papers.length > 0 && (
                <section className={`${styles.section} ${styles.paperSection}`}>
                    <h2 className={styles.sectionTitle}>
                        <BookOpen size={20} />
                        {language === 'CN' ? '学术论文' : 'Academic Papers'}
                    </h2>
                    <div className={styles.grid}>
                        {papers.map(renderPaperCard)}
                    </div>
                </section>
            )}

            {/* GDDs Section */}
            {gdds.length > 0 && (
                <section className={`${styles.section} ${styles.gddSection}`}>
                    <h2 className={styles.sectionTitle}>
                        <FileText size={20} />
                        {language === 'CN' ? '过往文书案例' : 'Past Paper Work Examples'}
                    </h2>
                    <div className={styles.grid}>
                        {gdds.map(renderGDDCard)}
                    </div>
                </section>
            )}

            {selectedDoc && (
                <PdfModal
                    url={selectedDoc.url}
                    title={selectedDoc.title}
                    onClose={() => setSelectedDoc(null)}
                />
            )}
        </div>
    );
};

export default Documents;
