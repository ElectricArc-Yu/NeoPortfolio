import React, { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import MediaGallery from '../components/MediaGallery';
import WorkChart from '../components/WorkChart';
import PdfModal from '../components/PdfModal';
import BackToTop from '../components/BackToTop';
import CodeLoader from '../components/CodeLoader';
import ImageModal from '../components/ImageModal';
import styles from './ProjectDetail.module.css';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { language, t } = useLanguage();
    const [previewPdf, setPreviewPdf] = useState<{ url: string, title: string } | null>(null);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const project = projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const description = language === 'CN' ? project.descriptionCN : project.descriptionEN;
    const isCommercial = project.type === 'Commercial';

    // Helper to get localized data
    const getPlatform = () => language === 'CN' ? project.platformCN : project.platformEN;
    const getDuration = () => language === 'CN' ? project.durationCN : project.durationEN;
    const getTeamSize = () => language === 'CN' ? project.teamSizeCN : project.teamSizeEN;

    // Helper to get the correct URL based on language
    const getUrl = (urlCN?: string, urlEN?: string) => {
        if (language === 'CN' && urlCN) return urlCN;
        return urlEN || urlCN;
    };

    const handleLinkClick = (e: React.MouseEvent, url: string, label: string, type: string) => {
        // Only preview for docs and PDFs
        if (type === 'doc' || url.toLowerCase().endsWith('.pdf')) {
            e.preventDefault();
            setPreviewPdf({ url, title: label });
        }
    };

    const handleBack = () => {
        // Check if there is history state to go back to, basically blindly trust -1 works for most users coming from Home
        // If user opened link directly, -1 might take them out of site, but hash router usually keeps history stack safe?
        // Actually safe way: if window.history.state.idx > 0 navigate(-1) else navigate('/')
        // But for simplicity navigate(-1) is usually requested behavior. fallback handled by browser.
        // Let's stick to navigate(-1).
        navigate(-1);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button onClick={handleBack} className={styles.backButton}>
                    ← {t('Back to List')}
                </button>
                <div className={styles.titleContainer}>
                    {/* Header icon removed as per req #5 */}
                    <h1 className={styles.title}>{language === 'CN' ? project.titleCN : project.titleEN}</h1>
                </div>
            </header>

            <div className={styles.grid}>
                {/* Main Content - Left Side */}
                <div className={styles.mainContent}>
                    <MediaGallery
                        images={project.images}
                        video={project.video}
                        onImageClick={setZoomedImage}
                    />

                    <div className={styles.markdown}>
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                code({ node, inline, className, children, ...props }: any) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={vscDarkPlus}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{
                                                margin: '1.5rem 0',
                                                borderRadius: '8px',
                                                fontSize: '0.9rem',
                                                border: '1px solid rgba(255, 255, 255, 0.1)'
                                            }}
                                            codeTagProps={{
                                                style: {
                                                    whiteSpace: 'pre-wrap',
                                                    wordBreak: 'break-all'
                                                }
                                            }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props} style={{
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            padding: '0.2rem 0.4rem',
                                            borderRadius: '4px',
                                            fontSize: '0.9em',
                                            fontFamily: 'monospace'
                                        }}>
                                            {children}
                                        </code>
                                    );
                                },
                                'code-loader': ({ node, ...props }: any) => {
                                    return <CodeLoader src={props.src} language={props.language} />;
                                },
                                img: ({ node, ...props }: any) => {
                                    return (
                                        <img
                                            {...props}
                                            onClick={() => setZoomedImage(props.src || null)}
                                            style={{ cursor: 'zoom-in', maxWidth: '100%', borderRadius: '4px' }}
                                        />
                                    );
                                }
                            } as Record<string, any>}
                        >
                            {description}
                        </ReactMarkdown>
                    </div>
                </div>

                {/* Sidebar - Right Side */}
                <aside className={styles.sidebar}>
                    {/* Project Info Card */}
                    <div className={styles.card}>
                        <h3>{t('Project Info')}</h3>
                        <ul className={styles.infoList}>
                            <li>
                                <span>{t('Type')}</span>
                                <span className={styles.highlight}>
                                    {(Array.isArray(project.gameType) ? project.gameType.join(', ') : project.gameType) || project.type}
                                </span>
                            </li>
                            {getPlatform() && (
                                <li>
                                    <span>{t('Platform')}</span>
                                    <span>{getPlatform()}</span>
                                </li>
                            )}
                            {getDuration() && (
                                <li>
                                    <span>{t('Project Cycle')}</span>
                                    <span>{getDuration()}</span>
                                </li>
                            )}
                            {getTeamSize() && (
                                <li>
                                    <span>{t('Team Size')}</span>
                                    <span>{getTeamSize()}</span>
                                </li>
                            )}
                            <li>
                                <span>{t('Project Role')}</span>
                                <div className={styles.projectRoles}>
                                    {project.role.map(r => <span key={r} className={styles.roleTag}>{r}</span>)}
                                </div>
                            </li>
                            <li>
                                <span>{isCommercial ? t('Sales') : t('Work Hours')}</span>
                                <span className={styles.highlight}>{isCommercial ? project.sales : (project.workHours ? `${project.workHours}h` : 'N/A')}</span>
                            </li>
                            {(isCommercial && (language === 'CN' ? project.priceCN : project.priceEN)) && (
                                <li>
                                    <span>{language === 'CN' ? '售价' : 'Price'}</span>
                                    <span className={styles.highlight}>{language === 'CN' ? project.priceCN : project.priceEN}</span>
                                </li>
                            )}
                            <li>
                                <span>{t('Tech Stack')}</span>
                                <div className={styles.techStack}>
                                    {project.techStack.map(tech => <span key={tech} className={styles.roleTag}>{tech}</span>)}
                                </div>
                            </li>
                        </ul>

                        {/* Work Distribution inside Project Info */}
                        {project.workDistribution && project.workDistribution.length > 0 && (
                            <div className={styles.workDistribution}>
                                <h4>{t('Work Distribution')}</h4>
                                <WorkChart data={project.workDistribution} />
                            </div>
                        )}
                    </div>

                    {/* Project Introduce Card */}
                    {(language === 'CN' ? project.introduceCN : project.introduceEN) && (
                        <div className={styles.card}>
                            <h3>{t('Project Introduce')}</h3>
                            <div className={styles.introduceText}>
                                {(language === 'CN' ? project.introduceCN : project.introduceEN)?.split('\n').map((line, i) => (
                                    <p key={i} style={{ marginBottom: line.trim() ? '0.5rem' : '1rem' }}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quick Links Card - Array of Links */}
                    {project.links && project.links.length > 0 && (
                        <div className={styles.card}>
                            <h3>{t('Quick Links')}</h3>
                            <div className={styles.quickLinks}>
                                {project.links.map((link, index) => {
                                    const url = getUrl(link.urlCN, link.urlEN);
                                    if (!url) return null;
                                    const localizedLabel = language === 'CN' ? link.labelCN : link.labelEN;
                                    return (
                                        <a
                                            key={`${link.labelEN}-${index}`}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.quickLinkItem}
                                            onClick={(e) => handleLinkClick(e, url, localizedLabel, link.type)}
                                        >
                                            <span className={styles.linkLabel}>{localizedLabel}</span>
                                            <span className={styles.linkType}>{link.type}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <BackToTop />
                </aside>
            </div>

            {/* Modal Previews */}
            {previewPdf && (
                <PdfModal
                    url={previewPdf.url}
                    title={previewPdf.title}
                    onClose={() => setPreviewPdf(null)}
                />
            )}

            {zoomedImage && (
                <ImageModal
                    src={zoomedImage}
                    onClose={() => setZoomedImage(null)}
                />
            )}
        </div>
    );
};

export default ProjectDetail;
