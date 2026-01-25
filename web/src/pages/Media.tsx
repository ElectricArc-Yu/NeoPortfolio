import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mediaItems } from '../data/media';
import styles from './Media.module.css';
import { PlayCircle, Globe, Clock, List, ExternalLink } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

const Media: React.FC = () => {
    const { language, t } = useLanguage();

    const getDomain = (url: string) => {
        try {
            const hostname = new URL(url).hostname;
            return hostname.replace('www.', '');
        } catch (e) {
            return 'Link';
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('Media')}</h1>
                <p className={styles.subtitle}>
                    {language === 'CN'
                        ? '分析视频、演示短片与自媒体内容展示。'
                        : 'Showcase of analysis videos, gameplay demos, and media content.'}
                </p>
            </header>

            <div className={styles.mediaList}>
                {mediaItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mediaCard}
                    >
                        <div className={styles.thumbnailWrapper}>
                            {item.thumbnail && <img src={getAssetPath(item.thumbnail)} alt={item.title} className={styles.thumbnail} />}
                            <div className={styles.playOverlay}>
                                <PlayCircle size={40} />
                            </div>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.mediaTitle}>{item.title}</h3>
                                <div className={styles.badges}>
                                    <span className={`${styles.badge} ${styles.carrierBadge}`}>{item.carrier}</span>
                                    <span className={styles.badge}>{item.language}</span>
                                </div>
                            </div>

                            <p className={styles.description}>
                                {language === 'CN' ? item.descriptionCN : item.descriptionEN}
                            </p>

                            <div className={styles.footer}>
                                <div className={styles.metaInfo}>
                                    <div className={styles.metaItem}>
                                        <Globe size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        {item.isCollection ? <List size={14} /> : <Clock size={14} />}
                                        <span>
                                            {item.isCollection
                                                ? (language === 'CN' ? `${item.episodesCount} 集` : `${item.episodesCount} Episodes`)
                                                : item.duration
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.viewAction}>
                                    <span>
                                        {language === 'CN' ? '点击查看' : 'View Now'}
                                        {` (${getDomain(item.url)})`}
                                    </span>
                                    <ExternalLink size={14} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Media;
