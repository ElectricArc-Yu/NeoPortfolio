import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';
import { FileText, ExternalLink, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
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

    // Group by category
    const papers = publicDocs.filter(d => d.category === 'Paper');
    const gdds = publicDocs.filter(d => d.category === 'GDD');

    const renderCard = (doc: typeof publicDocs[0]) => {
        const description = language === 'CN' ? doc.descriptionCN : doc.descriptionEN;
        const isLongAbstract = description.length > 150;
        const isExpanded = expandedAbstracts.has(doc.id);
        const displayDescription = isLongAbstract && !isExpanded
            ? description.slice(0, 150) + '...'
            : description;

        return (
            <div
                key={doc.id}
                className={`${styles.card} ${doc.category === 'Paper' ? styles.paperCard : ''}`}
                onClick={() => handleCardClick(doc)}
            >
                {/* Category Badge */}
                <div className={styles.categoryBadge} data-category={doc.category}>
                    {doc.category === 'Paper' ? <BookOpen size={14} /> : <FileText size={14} />}
                    <span>{doc.category}</span>
                </div>

                {/* Title Row */}
                <div className={styles.cardHeader}>
                    <h3 className={styles.docTitle}>
                        {language === 'CN' ? doc.titleCN : doc.titleEN}
                    </h3>
                    {doc.externalUrl && <ExternalLink size={18} className={styles.externalIcon} />}
                </div>

                {/* Meta Row */}
                <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                        {doc.date}
                    </span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {language === 'CN' ? `原文语言: ${doc.originalLang}` : `Original Language: ${doc.originalLang}`}
                    </span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.metaItem}>
                        {language === 'CN' ? `文章长度: ${doc.lengthCN}` : `Length: ${doc.lengthEN}`}
                    </span>
                    {!doc.externalUrl && (
                        <>
                            <span className={styles.separator}>|</span>
                            <span className={`${styles.metaItem} ${styles.internalTag}`}>
                                {language === 'CN'
                                    ? (doc.isInternal ? '内部文档: 是' : '内部文档: 否')
                                    : (doc.isInternal ? 'Internal Doc: Yes' : 'Internal Doc: No')}
                            </span>
                        </>
                    )}
                </div>

                {/* Abstract / Description */}
                <div className={styles.description}>
                    <span className={styles.abstractLabel}>{language === 'CN' ? '摘要: ' : 'Abstract: '}</span>
                    {displayDescription}
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
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <BookOpen size={20} />
                        {language === 'CN' ? '学术论文' : 'Academic Papers'}
                    </h2>
                    <div className={styles.grid}>
                        {papers.map(renderCard)}
                    </div>
                </section>
            )}

            {/* GDDs Section */}
            {gdds.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <FileText size={20} />
                        {language === 'CN' ? '设计文档' : 'Design Documents'}
                    </h2>
                    <div className={styles.grid}>
                        {gdds.map(renderCard)}
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
