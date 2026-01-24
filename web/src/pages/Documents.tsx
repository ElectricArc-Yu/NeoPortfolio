import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicDocs } from '../data/documents';
import PdfModal from '../components/PdfModal';
import styles from './Documents.module.css';

const Documents: React.FC = () => {
    const { language } = useLanguage();
    const [selectedDoc, setSelectedDoc] = useState<{ url: string; title: string } | null>(null);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{language === 'CN' ? '过往文档' : 'Past Documents'}</h1>
                <p className={styles.subtitle}>
                    {language === 'CN'
                        ? '包含可公开的设计文档及分析文章。'
                        : 'Collection of publicable Game Design Documents & Analysis Articles.'}
                </p>
            </header>

            <div className={styles.grid}>
                {publicDocs.map((doc) => (
                    <div
                        key={doc.id}
                        className={styles.card}
                        onClick={() => setSelectedDoc({ url: doc.url, title: language === 'CN' ? doc.titleCN : doc.titleEN })}
                    >
                        {/* Title Row */}
                        <div className={styles.cardHeader}>
                            <h3 className={styles.docTitle}>
                                {language === 'CN' ? doc.titleCN : doc.titleEN}
                            </h3>
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
                            <span className={styles.separator}>|</span>
                            <span className={`${styles.metaItem} ${styles.internalTag}`}>
                                {language === 'CN'
                                    ? (doc.isInternal ? '内部文档: 是' : '内部文档: 否')
                                    : (doc.isInternal ? 'Internal Doc: Yes' : 'Internal Doc: No')}
                            </span>
                        </div>

                        {/* Abstract / Description */}
                        <div className={styles.description}>
                            <span className={styles.abstractLabel}>{language === 'CN' ? '摘要: ' : 'Abstract: '}</span>
                            {language === 'CN' ? doc.descriptionCN : doc.descriptionEN}
                        </div>
                    </div>
                ))}
            </div>

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
