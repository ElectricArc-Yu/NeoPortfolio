import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import type { GDDType } from '../data/documents';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';
import { FileText, BookOpen, ChevronDown, ChevronUp, FlaskConical, GraduationCap, ClipboardList, FileCode } from 'lucide-react';

// Icon mapping for GDD types
const gddTypeIcons: Record<GDDType, React.ReactNode> = {
    Test: <ClipboardList size={18} />,
    Analysis: <FlaskConical size={18} />,
    Methodology: <GraduationCap size={18} />,
    GDD: <FileCode size={18} />
};

// Labels for GDD types
const gddTypeLabels = {
    Test: { cn: '策划测试题', en: 'Design Tests' },
    Analysis: { cn: '分析研究', en: 'Analysis & Research' },
    Methodology: { cn: '方法论与教程', en: 'Methodology & Tutorials' },
    GDD: { cn: '完整设计文档', en: 'Full Game Design Documents' }
};

// Descriptions for each category
const gddTypeDescriptions = {
    Test: {
        cn: '求职过程中完成的策划岗位测试题，展示系统设计与问题解决能力。',
        en: 'Design tests completed during job applications, demonstrating system design and problem-solving skills.'
    },
    Analysis: {
        cn: '对已发布游戏内容的深度分析，探索设计理念与系统架构。',
        en: 'In-depth analysis of published game content, exploring design philosophy and system architecture.'
    },
    Methodology: {
        cn: '设计方法论与职业发展教程，帮助提升专业能力。',
        en: 'Design methodologies and professional development tutorials to enhance professional skills.'
    },
    GDD: {
        cn: '完整的游戏设计文档，涵盖系统设计与关卡规划。',
        en: 'Complete game design documents covering system design and level planning.'
    }
};

const Documents: React.FC = () => {
    const { language } = useLanguage();
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

    const handleCardClick = (doc: typeof publicDocs[0]) => {
        if (doc.externalUrl) {
            window.open(doc.externalUrl, '_blank', 'noopener,noreferrer');
        } else if (doc.url) {
            // Don't apply getAssetPath here - PdfModal handles it internally
            setSelectedDoc({ url: doc.url, title: language === 'CN' ? doc.titleCN : doc.titleEN });
        }
    };

    // Group by category
    const papers = publicDocs.filter(d => d.category === 'Paper');
    const gdds = publicDocs.filter(d => d.category === 'GDD');

    // Group GDDs by type and sort by date (newest first)
    const gddsByType = gdds.reduce((acc, doc) => {
        const type = doc.gddType || 'GDD';
        if (!acc[type]) acc[type] = [];
        acc[type].push(doc);
        return acc;
    }, {} as Record<GDDType, typeof gdds>);

    // Sort each group by date
    Object.keys(gddsByType).forEach(type => {
        gddsByType[type as GDDType].sort((a, b) => {
            const parseDate = (dateStr: string) => {
                const parts = dateStr.split('.');
                return new Date(parseInt(parts[0]), parseInt(parts[1] || '1') - 1);
            };
            return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        });
    });

    // Define display order for GDD types
    const gddTypeOrder: GDDType[] = ['Test', 'Analysis', 'Methodology', 'GDD'];

    // Render Paper Card (same as before)
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

    // Render GDD Card (enhanced with target position)
    const renderGDDCard = (doc: typeof publicDocs[0]) => {
        const description = language === 'CN' ? doc.descriptionCN : doc.descriptionEN;
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;
        const targetPosition = language === 'CN' ? doc.targetPositionCN : doc.targetPositionEN;

        return (
            <div
                key={doc.id}
                className={styles.card}
                onClick={() => handleCardClick(doc)}
            >
                {/* Category Badge */}
                <div className={styles.categoryBadge} data-category={doc.gddType || 'GDD'}>
                    {gddTypeIcons[doc.gddType || 'GDD']}
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
                        {language === 'CN' ? doc.originalLangCN : doc.originalLangEN}
                    </span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {language === 'CN' ? doc.lengthCN : doc.lengthEN}
                    </span>
                    {targetPosition && (
                        <>
                            <span className={styles.separator}>|</span>
                            <span className={`${styles.metaItem} ${styles.targetPosition}`}>
                                {language === 'CN' ? '目标岗位: ' : 'Target: '}{targetPosition}
                            </span>
                        </>
                    )}
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

            {/* GDDs Section - Grouped by Type */}
            <section className={`${styles.section} ${styles.gddSection}`}>
                <h2 className={styles.sectionTitle}>
                    <FileText size={20} />
                    {language === 'CN' ? '过往文书案例' : 'Past Paper Work Examples'}
                </h2>

                {gddTypeOrder.map(type => {
                    const docs = gddsByType[type];
                    if (!docs || docs.length === 0) return null;

                    const isExpanded = expandedCategories.has(type);

                    return (
                        <div key={type} className={`${styles.gddTypeGroup} ${isExpanded ? styles.expanded : ''}`}>
                            <div
                                className={styles.gddTypeHeader}
                                onClick={() => toggleCategory(type)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && toggleCategory(type)}
                            >
                                <div className={styles.gddTypeIcon}>
                                    {gddTypeIcons[type]}
                                </div>
                                <div className={styles.gddTypeInfo}>
                                    <h3 className={styles.gddTypeTitle}>
                                        {language === 'CN' ? gddTypeLabels[type].cn : gddTypeLabels[type].en}
                                    </h3>
                                    <p className={styles.gddTypeDesc}>
                                        {language === 'CN' ? gddTypeDescriptions[type].cn : gddTypeDescriptions[type].en}
                                    </p>
                                </div>
                                <span className={styles.gddTypeCount}>{docs.length}</span>
                                <div className={styles.expandIndicator}>
                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>
                            <div className={`${styles.gddTypeCards} ${isExpanded ? styles.cardsExpanded : styles.cardsCollapsed}`}>
                                {docs.map(renderGDDCard)}
                            </div>
                        </div>
                    );
                })}
            </section>

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
