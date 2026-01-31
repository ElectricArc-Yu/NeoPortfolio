import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import type { GDDType, PublicDoc } from '../data/types';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';
import { siteConfig } from '../data/siteConfig';
import { getLocalizedValue } from '../utils/i18n';
import { FileText, BookOpen, ChevronDown, ChevronUp, FlaskConical, GraduationCap, ClipboardList, FileCode } from 'lucide-react';

// Icon mapping for GDD types
const gddTypeIcons: Record<GDDType, React.ReactNode> = {
    Test: <ClipboardList size={18} />,
    Analysis: <FlaskConical size={18} />,
    Methodology: <GraduationCap size={18} />,
    GDD: <FileCode size={18} />
};

// Labels for GDD types (using Localized format internally or just mapping)
const gddTypeLabels: Record<GDDType, { CN: string, EN: string, JA?: string }> = {
    Test: { CN: '策划测试题', EN: 'Design Tests', JA: '企画テスト' },
    Analysis: { CN: '分析研究', EN: 'Analysis & Research', JA: '分析・研究' },
    Methodology: { CN: '方法论与教程', EN: 'Methodology & Tutorials', JA: 'メソッド・チュートリアル' },
    GDD: { CN: '完整设计文档', EN: 'Full Game Design Documents', JA: 'ゲーム企画書' }
};

// Descriptions for each category
const gddTypeDescriptions: Record<GDDType, { CN: string, EN: string, JA?: string }> = {
    Test: {
        CN: '求职过程中完成的策划岗位测试题，展示系统设计与问题解决能力。',
        EN: 'Design tests completed during job applications, demonstrating system design and problem-solving skills.',
        JA: '採用選考中に作成された企画職用テスト。システム設計と問題解決能力を示しています。'
    },
    Analysis: {
        CN: '对已发布游戏内容的深度分析，探索设计理念与系统架构。',
        EN: 'In-depth analysis of published game content, exploring design philosophy and system architecture.',
        JA: 'リリース済みゲームタイトルの詳細な分析。デザイン哲学とシステム構成を掘り下げます。'
    },
    Methodology: {
        CN: '设计方法论与职业发展教程，帮助提升专业能力。',
        EN: 'Design methodologies and professional development tutorials to enhance professional skills.',
        JA: 'デザイン手法とキャリア開発のチュートリアル。専門能力の向上を目的としています。'
    },
    GDD: {
        CN: '完整的游戏设计文档，涵盖系统设计与关卡规划。',
        EN: 'Complete game design documents covering system design and level planning.',
        JA: 'システム設計からレベルプランニングまで網羅した完全なゲーム企画書。'
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

    const handleCardClick = (doc: PublicDoc) => {
        if (doc.externalUrl) {
            window.open(doc.externalUrl, '_blank', 'noopener,noreferrer');
        } else if (doc.url) {
            setSelectedDoc({ url: doc.url, title: getLocalizedValue(doc.titles, language) || '' });
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
    }, {} as Record<GDDType, PublicDoc[]>);

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

    // Render Paper Card
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
                            <span className={styles.paperTypeBadge}>{doc.paperType}</span>
                        )}
                        {doc.journal && doc.journal.trim() !== '' && (
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
                                {language === 'CN' ? '预印本' : (language === 'JA' ? 'プレプリント' : 'Preprint')}
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
                                {language === 'CN' ? '发布页' : (language === 'JA' ? '掲載ページ' : 'Published')}
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
                            {language === 'CN' ? '摘要: ' : (language === 'JA' ? '要約: ' : 'Abstract: ')}
                        </span>
                        {displayDescription}
                    </span>
                    {isLongAbstract && (
                        <button
                            className={styles.expandBtn}
                            onClick={(e) => toggleAbstract(doc.id, e)}
                        >
                            {isExpanded ? (
                                <>{language === 'CN' ? '收起' : (language === 'JA' ? '閉じる' : 'Collapse')} <ChevronUp size={14} /></>
                            ) : (
                                <>{language === 'CN' ? '展开' : (language === 'JA' ? '展開' : 'Expand')} <ChevronDown size={14} /></>
                            )}
                        </button>
                    )}
                </div>
            </div>
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
                                {language === 'CN' ? '目标岗位: ' : (language === 'JA' ? '志望職種: ' : 'Target: ')}{targetPosition}
                            </span>
                        </>
                    )}
                </div>

                <div className={styles.description}>
                    <span className={styles.abstractText}>
                        <span className={styles.abstractLabel}>
                            {language === 'CN' ? '摘要: ' : (language === 'JA' ? '要約: ' : 'Abstract: ')}
                        </span>
                        {displayDescription}
                    </span>
                    {isLongAbstract && (
                        <button
                            className={styles.expandBtn}
                            onClick={(e) => toggleAbstract(doc.id, e)}
                        >
                            {isExpanded ? (
                                <>{language === 'CN' ? '收起' : (language === 'JA' ? '閉じる' : 'Collapse')} <ChevronUp size={14} /></>
                            ) : (
                                <>{language === 'CN' ? '展开' : (language === 'JA' ? '展開' : 'Expand')} <ChevronDown size={14} /></>
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
                <h1 className={styles.title}>
                    {getLocalizedValue(siteConfig.pages.documents.titles, language)}
                </h1>
                <p className={styles.subtitle}>
                    {getLocalizedValue(siteConfig.pages.documents.subtitles, language)}
                </p>
            </header>

            {/* Papers Section */}
            {papers.length > 0 && (
                <section className={`${styles.section} ${styles.paperSection}`}>
                    <h2 className={styles.sectionTitle}>
                        <BookOpen size={20} />
                        {language === 'CN' ? '学术论文' : (language === 'JA' ? '学術論文' : 'Academic Papers')}
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
                    {language === 'CN' ? '过往文书案例' : (language === 'JA' ? '過去の書類作成事例' : 'Past Paper Work Examples')}
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
                                        {getLocalizedValue(gddTypeLabels[type], language)}
                                    </h3>
                                    <p className={styles.gddTypeDesc}>
                                        {getLocalizedValue(gddTypeDescriptions[type], language)}
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
