import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mediaSeries, mediaItems } from '../data/media';
import styles from './Media.module.css';
import { PlayCircle, Globe, Clock, List, ExternalLink, ChevronDown, Mic, Video, Lock, Calendar, X, FileText } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';
import type { MediaSeries, MediaEpisode, PodcastEpisode, PlatformLink } from '../data/types';
import { siteConfig } from '../data/siteConfig';

// Platform icon/color mapping
const platformConfig: Record<string, { color: string; label: string }> = {
    'Bilibili': { color: '#00A1D6', label: 'Bilibili' },
    'YouTube': { color: '#FF0000', label: 'YouTube' },
    'XiaoYuZhou': { color: '#EE6352', label: '小宇宙' },
    'Gcores': { color: '#E04A2D', label: 'Gcore' },
    'Podcast': { color: '#9B59B6', label: 'Podcast' },
    'Local': { color: '#00ADB5', label: 'Local' },
    'Other': { color: '#888', label: 'Link' }
};

// Check if a date is in the future
const isFutureDate = (dateStr?: string): boolean => {
    if (!dateStr) return false;
    const normalizedDate = dateStr.replace(/\./g, '-');
    const targetDate = new Date(normalizedDate);
    const now = new Date();
    return targetDate > now;
};

// Format scheduled date for display
const formatScheduledDate = (dateStr: string, language: 'CN' | 'EN'): string => {
    const normalizedDate = dateStr.replace(/\./g, '-');
    const date = new Date(normalizedDate);
    if (language === 'CN') {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        if (dateStr.split(/[-.]/).length === 3) {
            return `${date.getFullYear()}年${month}月${day}日`;
        }
        return `${date.getFullYear()}年${month}月`;
    }
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: dateStr.split(/[-.]/).length === 3 ? 'numeric' : undefined
    });
};

const Media: React.FC = () => {
    const { language, t } = useLanguage();
    const [expandedSeries, setExpandedSeries] = useState<string[]>([]);
    const [showMiscellaneous, setShowMiscellaneous] = useState(false);

    const toggleSeries = (seriesId: string) => {
        setExpandedSeries(prev =>
            prev.includes(seriesId)
                ? prev.filter(id => id !== seriesId)
                : [...prev, seriesId]
        );
    };

    const getDomain = (url: string) => {
        try {
            const hostname = new URL(url).hostname;
            return hostname.replace('www.', '');
        } catch {
            return 'Link';
        }
    };

    const renderPlatformLinks = (links: PlatformLink[]) => {
        return (
            <div className={styles.platformLinks}>
                {links.map((link, idx) => {
                    const label = link.label || platformConfig[link.platform]?.label || link.platform;
                    let displayLabel = label;
                    let customClass = '';

                    const upperLabel = label.toUpperCase();

                    if (upperLabel.startsWith('%R%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.redLink;
                    } else if (upperLabel.startsWith('%P%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.purpleLink;
                    } else if (upperLabel.startsWith('%G%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.greenLink;
                    } else if (upperLabel.startsWith('%Y%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.goldLink;
                    } else if (upperLabel.startsWith('%B%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.blueLink;
                    } else if (upperLabel.startsWith('%K%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.pinkLink;
                    } else if (upperLabel.startsWith('%O%')) {
                        displayLabel = label.substring(3);
                        customClass = styles.orangeLink;
                    }

                    return (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.platformLink} ${customClass}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span>{displayLabel}</span>
                            <ExternalLink size={12} />
                        </a>
                    );
                })}
            </div>
        );
    };

    const renderVideoEpisode = (episode: MediaEpisode) => {
        const isScheduled = isFutureDate(episode.scheduledDate);
        const isUnreleased = episode.isPublished === false || isScheduled;

        // Normalize type to array
        const types = Array.isArray(episode.type)
            ? episode.type
            : (episode.type ? [episode.type] : ['video']);

        const hasVideo = types.includes('video');
        const hasArticle = types.includes('article');

        const renderMeta = () => {
            if (isScheduled && episode.scheduledDate) {
                return (
                    <span className={styles.scheduledDate}>
                        <Calendar size={12} />
                        {language === 'CN' ? '预计 ' : 'Expected '}
                        {formatScheduledDate(episode.scheduledDate, language)}
                    </span>
                );
            }

            if (!isUnreleased) {
                return (
                    <>
                        <span className={styles.episodeDate}>
                            <Clock size={12} /> {episode.date}
                        </span>
                        {episode.duration && (
                            <span className={styles.episodeDuration}>
                                <Clock size={12} style={{ opacity: 0 }} /> {episode.duration}
                            </span>
                        )}
                    </>
                );
            }

            return (
                <span className={styles.scheduledDate}>
                    <Lock size={12} />
                    {language === 'CN' ? '即将发布' : 'Soon'}
                </span>
            );
        };

        return (
            <div key={episode.id} className={`${styles.episodeCard} ${isUnreleased ? styles.unreleasedGlow : styles.publishedGlow}`}>
                <div className={styles.episodeHeaderArea}>
                    <div className={styles.episodeNumber}>
                        {isUnreleased && <Lock size={12} className={styles.lockIcon} />}
                        {episode.episodeNumber}
                    </div>
                    {(hasVideo || hasArticle) && (
                        <div className={styles.episodeIcons}>
                            {hasVideo && <Video size={24} className={styles.headerIcon} />}
                            {hasArticle && <FileText size={24} className={styles.headerIcon} />}
                        </div>
                    )}
                </div>

                <div className={styles.episodeContent}>
                    <h4 className={styles.episodeTitle}>
                        {language === 'CN' ? episode.titleCN : episode.titleEN}
                    </h4>

                    {episode.descriptionCN && (
                        <p className={styles.episodeDescription}>
                            {language === 'CN' ? episode.descriptionCN : episode.descriptionEN}
                        </p>
                    )}

                    <div className={styles.episodeMetaUnder}>
                        {renderMeta()}
                    </div>
                </div>

                <div className={styles.episodeActions}>
                    {isUnreleased ? (
                        <span className={styles.comingSoon}>
                            {language === 'CN' ? '关注频道' : 'Stay Tuned'}
                        </span>
                    ) : (
                        renderPlatformLinks(episode.links)
                    )}
                </div>
            </div>
        );
    };

    const renderPodcastEpisode = (episode: PodcastEpisode) => {
        const isScheduled = isFutureDate(episode.scheduledDate);

        return (
            <div
                key={episode.id}
                className={`${styles.podcastEpisodeItem} ${isScheduled ? styles.unreleasedGlow : styles.publishedGlow}`}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className={styles.podcastEpisodeNumber}>
                        {isScheduled && <Lock size={10} className={styles.lockIcon} />}
                        {episode.episodeNumber}
                    </span>
                    <span className={styles.podcastEpisodeTitle}>
                        {language === 'CN' ? episode.titleCN : episode.titleEN}
                    </span>
                </div>
                {isScheduled && episode.scheduledDate && (
                    <span className={styles.podcastScheduled}>
                        <Calendar size={10} />
                        {language === 'CN' ? '预计 ' : ''}
                        {formatScheduledDate(episode.scheduledDate, language)}
                    </span>
                )}
            </div>
        );
    };

    const renderSeries = (series: MediaSeries) => {
        const isExpanded = expandedSeries.includes(series.id);
        const isVideoSeries = series.type === 'video-series';
        const episodeCount = isVideoSeries
            ? series.episodes?.length || 0
            : series.podcastEpisodes?.length || series.episodesCount || 0;

        return (
            <div key={series.id} className={`${styles.seriesCard} ${styles.goldSeries} ${isExpanded ? styles.expanded : ''}`}>
                <div
                    className={`${styles.seriesHeader} ${isExpanded ? styles.sticky : ''}`}
                    onClick={() => toggleSeries(series.id)}
                >
                    <div className={styles.seriesInfo}>
                        <div className={`${styles.seriesIcon} ${isVideoSeries ? styles.videoIcon : styles.podcastIcon}`}>
                            {isVideoSeries ? <Video size={24} /> : <Mic size={24} />}
                        </div>
                        <div className={styles.seriesTitles}>
                            <h2 className={styles.seriesName}>
                                {language === 'CN' ? series.seriesNameCN : series.seriesNameEN}
                            </h2>
                            {!isExpanded && (
                                <p className={styles.seriesDescription}>
                                    {language === 'CN' ? series.descriptionCN : series.descriptionEN}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={styles.seriesMetaHeader}>
                        <div className={styles.seriesBadges}>
                            {!isExpanded && (
                                <>
                                    {series.seriesBadges ? (
                                        series.seriesBadges.map((badge, idx) => {
                                            let displayBadge = badge;
                                            let badgeClass = styles.typeBadge;
                                            const upperBadge = badge.toUpperCase();

                                            if (upperBadge.startsWith('%R%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.redBadge;
                                            } else if (upperBadge.startsWith('%P%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.purpleBadge;
                                            } else if (upperBadge.startsWith('%G%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.greenBadge;
                                            } else if (upperBadge.startsWith('%Y%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.goldBadge;
                                            } else if (upperBadge.startsWith('%B%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.blueBadge;
                                            } else if (upperBadge.startsWith('%K%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.pinkBadge;
                                            } else if (upperBadge.startsWith('%O%')) {
                                                displayBadge = badge.substring(3);
                                                badgeClass = styles.orangeBadge;
                                            }

                                            // Default mapping for standard badges if no prefix
                                            if (displayBadge === 'Video') displayBadge = (language === 'CN' ? '视频' : 'Video');
                                            else if (displayBadge === 'Article') displayBadge = (language === 'CN' ? '文章' : 'Article');
                                            else if (displayBadge === 'Podcast') displayBadge = (language === 'CN' ? '播客' : 'Podcast');

                                            return (
                                                <span key={idx} className={`${styles.badge} ${badgeClass}`}>
                                                    {displayBadge}
                                                </span>
                                            );
                                        })
                                    ) : (
                                        <span className={`${styles.badge} ${styles.typeBadge}`}>
                                            {isVideoSeries
                                                ? (language === 'CN' ? '视频' : 'Video')
                                                : (language === 'CN' ? '播客' : 'Podcast')
                                            }
                                        </span>
                                    )}
                                    <span className={styles.badge}>{series.language}</span>
                                </>
                            )}
                            <span className={styles.badge}>{series.language}</span>
                            <span className={styles.badge}>
                                {episodeCount} {language === 'CN' ? '集' : 'Eps'}
                            </span>
                        </div>
                        <div className={styles.expandIcon}>
                            {isExpanded ? <X size={18} /> : <ChevronDown size={18} />}
                        </div>
                    </div>
                </div>

                {isExpanded && (
                    <div className={styles.seriesContent}>
                        <p className={styles.expandedDescription}>
                            {language === 'CN' ? series.descriptionCN : series.descriptionEN}
                        </p>
                        <div className={styles.contentSeparator} />

                        {!isVideoSeries && series.mainLinks && series.mainLinks.length > 0 && (
                            <div className={styles.mainLinksSection}>
                                <span className={styles.mainLinksLabel}>
                                    {language === 'CN' ? '收听平台：' : 'Listen on:'}
                                </span>
                                {renderPlatformLinks(series.mainLinks)}
                            </div>
                        )}

                        <div className={styles.episodesList}>
                            {isVideoSeries ? (
                                series.episodes?.map(ep => renderVideoEpisode(ep))
                            ) : (
                                <div className={styles.podcastEpisodesList}>
                                    {series.podcastEpisodes?.map(ep => renderPodcastEpisode(ep))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    {language === 'CN' ? siteConfig.pages.media.titleCN : siteConfig.pages.media.titleEN}
                </h1>
                <p className={styles.subtitle}>
                    {language === 'CN'
                        ? siteConfig.pages.media.subtitleCN
                        : siteConfig.pages.media.subtitleEN}
                </p>
            </header>

            <div className={styles.seriesList}>
                {mediaSeries.map(series => renderSeries(series))}

                {mediaItems && mediaItems.length > 0 && (
                    <div className={`${styles.seriesCard} ${styles.cyanSeries} ${showMiscellaneous ? styles.expanded : ''}`}>
                        <div
                            className={`${styles.seriesHeader} ${showMiscellaneous ? styles.sticky : ''}`}
                            onClick={() => setShowMiscellaneous(!showMiscellaneous)}
                        >
                            <div className={styles.seriesInfo}>
                                <div className={`${styles.seriesIcon} ${styles.videoIcon}`} style={{ background: 'linear-gradient(135deg, var(--accent-color), #008085)' }}>
                                    <List size={24} />
                                </div>
                                <div className={styles.seriesTitles}>
                                    <h2 className={styles.seriesName}>
                                        {language === 'CN' ? '杂项' : 'Miscellaneous'}
                                    </h2>
                                    {!showMiscellaneous && (
                                        <p className={styles.seriesDescription}>
                                            {language === 'CN' ? '过往项目原型、代码演示以及非系列内容。' : 'Past project prototypes, code demos, and non-series content.'}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={styles.seriesMetaHeader}>
                                <div className={styles.seriesBadges}>
                                    <span className={styles.badge}>
                                        {mediaItems.length} {language === 'CN' ? '项' : 'Items'}
                                    </span>
                                </div>
                                <div className={styles.expandIcon}>
                                    {showMiscellaneous ? <X size={18} /> : <ChevronDown size={18} />}
                                </div>
                            </div>
                        </div>

                        {showMiscellaneous && (
                            <div className={styles.seriesContent}>
                                <p className={styles.expandedDescription}>
                                    {language === 'CN' ? '项目演示视频、早期原型记录以及独立的分析内容。' : 'Project showcases, prototype recordings, and independent analysis content.'}
                                </p>
                                <div className={styles.contentSeparator} />
                                <div className={styles.mediaList}>
                                    {mediaItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.mediaCard} ${styles.publishedGlow}`}
                                        >
                                            <div className={styles.thumbnailWrapper}>
                                                {item.thumbnail && (
                                                    <img
                                                        src={getAssetPath(item.thumbnail)}
                                                        alt={item.title}
                                                        className={styles.thumbnail}
                                                    />
                                                )}
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
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Media;
