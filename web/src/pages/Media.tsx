import React, { useState, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mediaSeries, mediaItems } from '../data/media';
import styles from './Media.module.css';
import { PlayCircle, Globe, Clock, List, ExternalLink, ChevronDown, Mic, Video, Lock, Calendar, X, FileText } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';
import { getLocalizedValue } from '../utils/i18n';
import type { MediaSeries, MediaEpisode, PodcastEpisode, PlatformLink } from '../data/types';
import { siteConfig } from '../data/siteConfig';
import { formatDate, formatUnit } from '../utils/formatters';

import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/variants';

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

const Media: React.FC = () => {
    const { language, t } = useLanguage();
    const [expandedSeries, setExpandedSeries] = useState<string[]>([]);
    const [showMiscellaneous, setShowMiscellaneous] = useState(false);

    // Memoize toggle function to prevent unnecessary re-renders
    const toggleSeries = useCallback((seriesId: string) => {
        setExpandedSeries(prev =>
            prev.includes(seriesId)
                ? prev.filter(id => id !== seriesId)
                : [...prev, seriesId]
        );
    }, []);

    // Memoize domain extraction function
    const getDomain = useCallback((url: string) => {
        try {
            const hostname = new URL(url).hostname;
            return hostname.replace('www.', '');
        } catch {
            return 'Link';
        }
    }, []);

    const renderBadge = (badge: string, key: string | number, isTypeBadge = false) => {
        let displayBadge = badge;
        let badgeClass = styles.badge;
        const upperBadge = badge.toUpperCase();

        if (upperBadge.startsWith('%R%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.redBadge}`;
        } else if (upperBadge.startsWith('%P%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.purpleBadge}`;
        } else if (upperBadge.startsWith('%G%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.greenBadge}`;
        } else if (upperBadge.startsWith('%Y%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.goldBadge}`;
        } else if (upperBadge.startsWith('%B%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.blueBadge}`;
        } else if (upperBadge.startsWith('%K%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.pinkBadge}`;
        } else if (upperBadge.startsWith('%O%')) {
            displayBadge = badge.substring(3);
            badgeClass = `${styles.badge} ${styles.orangeBadge}`;
        } else if (isTypeBadge) {
            badgeClass = `${styles.badge} ${styles.typeBadge}`;
        }

        // Use translation for common labels
        const translationKeys = ['Video', 'Article', 'Podcast', 'Chinese', 'English'];
        if (translationKeys.includes(displayBadge)) {
            displayBadge = t(displayBadge);
        }

        return (
            <span key={key} className={badgeClass}>
                {displayBadge}
            </span>
        );
    };

    const renderPlatformLinks = (links: PlatformLink[]) => {
        return (
            <div className={styles.platformLinks}>
                {links.map((link, idx) => {
                    const localizedLabel = getLocalizedValue(link.labels, language);
                    const label = localizedLabel || platformConfig[link.platform]?.label || link.platform;
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
                            href={getLocalizedValue(link.urls, language)}
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
                        {t('Scheduled')} {formatDate(episode.scheduledDate, language)}
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
                    {t('Soon')}
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
                        {getLocalizedValue(episode.titles, language)}
                    </h4>

                    {getLocalizedValue(episode.descriptions, language) && (
                        <p className={styles.episodeDescription}>
                            {getLocalizedValue(episode.descriptions, language)}
                        </p>
                    )}

                    <div className={styles.episodeMetaUnder}>
                        {renderMeta()}
                    </div>
                </div>

                <div className={styles.episodeActions}>
                    {isUnreleased ? (
                        <span className={styles.comingSoon}>
                            {t('Stay Tuned')}
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
                        {getLocalizedValue(episode.titles, language)}
                    </span>
                </div>
                {isScheduled && episode.scheduledDate && (
                    <span className={styles.podcastScheduled}>
                        <Calendar size={10} />
                        {t('Scheduled')} {formatDate(episode.scheduledDate, language)}
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
            <motion.div 
                key={series.id} 
                className={`${styles.seriesCard} ${styles.goldSeries} ${isExpanded ? styles.expanded : ''}`}
                variants={fadeInUp}
                layout
            >
                <motion.div
                    className={`${styles.seriesHeader} ${isExpanded ? styles.sticky : ''}`}
                    onClick={() => toggleSeries(series.id)}
                    layout="position"
                >
                    <div className={styles.seriesInfo}>
                        <div className={`${styles.seriesIcon} ${isVideoSeries ? styles.videoIcon : styles.podcastIcon}`}>
                            {isVideoSeries ? <Video size={24} /> : <Mic size={24} />}
                        </div>
                        <div className={styles.seriesTitles}>
                            <h2 className={styles.seriesName}>
                                {getLocalizedValue(series.seriesNames, language)}
                            </h2>
                            {!isExpanded && (
                                <motion.p 
                                    className={styles.seriesDescription}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {getLocalizedValue(series.descriptions, language)}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className={styles.seriesMetaHeader}>
                        <div className={styles.seriesBadges}>
                            {!isExpanded && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
                                >
                                    {series.seriesBadges ? (
                                        series.seriesBadges.map((badge, idx) => renderBadge(badge, `type-${idx}`, true))
                                    ) : (
                                        renderBadge(isVideoSeries ? 'Video' : 'Podcast', 'type-default', true)
                                    )}
                                </motion.div>
                            )}
                            {series.languages.map((lang, idx) => renderBadge(lang, `lang-${idx}`))}
                            <span className={styles.badge}>
                                {formatUnit(episodeCount, 'Episodes', language, t)}
                            </span>
                        </div>
                        <div className={styles.expandIcon}>
                            {isExpanded ? <X size={18} /> : <ChevronDown size={18} />}
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div 
                            className={styles.seriesContent}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                ease: "easeOut", 
                                delay: 0.05 
                            }} // Smoother expansion
                        >
                            <p className={styles.expandedDescription}>
                                {getLocalizedValue(series.descriptions, language)}
                            </p>
                            <div className={styles.contentSeparator} />

                            {!isVideoSeries && series.mainLinks && series.mainLinks.length > 0 && (
                                <div className={styles.mainLinksSection}>
                                    <span className={styles.mainLinksLabel}>
                                        {t('Listen on')}:
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
                        </motion.div>
                    )}
                </AnimatePresence>
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
                    {getLocalizedValue(siteConfig.pages.media.titles, language)}
                </h1>
                <p className={styles.subtitle}>
                    {getLocalizedValue(siteConfig.pages.media.subtitles, language)}
                </p>
            </motion.header>

            <motion.div 
                className={styles.seriesList}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                {mediaSeries.map(series => renderSeries(series))}

                {mediaItems && mediaItems.length > 0 && (
                    <motion.div 
                        className={`${styles.seriesCard} ${styles.cyanSeries} ${showMiscellaneous ? styles.expanded : ''}`}
                        variants={fadeInUp}
                        layout
                    >
                        <motion.div
                            className={`${styles.seriesHeader} ${showMiscellaneous ? styles.sticky : ''}`}
                            onClick={() => setShowMiscellaneous(!showMiscellaneous)}
                            layout="position"
                        >
                            <div className={styles.seriesInfo}>
                                <div className={`${styles.seriesIcon} ${styles.videoIcon}`} style={{ background: 'linear-gradient(135deg, var(--accent-color), #008085)' }}>
                                    <List size={24} />
                                </div>
                                <div className={styles.seriesTitles}>
                                    <h2 className={styles.seriesName}>
                                        {t('Miscellaneous')}
                                    </h2>
                                    {!showMiscellaneous && (
                                        <motion.p 
                                            className={styles.seriesDescription}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {t('Miscellaneous Description')}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                            <div className={styles.seriesMetaHeader}>
                                <div className={styles.seriesBadges}>
                                    <span className={styles.badge}>
                                        {formatUnit(mediaItems.length, 'Items', language, t)}
                                    </span>
                                </div>
                                <div className={styles.expandIcon}>
                                    {showMiscellaneous ? <X size={18} /> : <ChevronDown size={18} />}
                                </div>
                            </div>
                        </motion.div>

                        <AnimatePresence>
                            {showMiscellaneous && (
                                <motion.div 
                                    className={styles.seriesContent}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className={styles.expandedDescription}>
                                        {t('Miscellaneous Content')}
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
                                                            alt={getLocalizedValue(item.titles, language)}
                                                            className={styles.thumbnail}
                                                        />
                                                    )}
                                                    <div className={styles.playOverlay}>
                                                        <PlayCircle size={40} />
                                                    </div>
                                                </div>

                                                <div className={styles.content}>
                                                    <div className={styles.cardHeader}>
                                                        <h3 className={styles.mediaTitle}>{getLocalizedValue(item.titles, language)}</h3>
                                                        <div className={styles.badges}>
                                                            <span className={`${styles.badge} ${styles.carrierBadge}`}>{item.carrier}</span>
                                                            {item.languages.map((lang, idx) => renderBadge(lang, `misc-lang-${idx}`))}
                                                        </div>
                                                    </div>

                                                    <p className={styles.description}>
                                                        {getLocalizedValue(item.descriptions, language)}
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
                                                                        ? formatUnit(item.episodesCount || 0, 'Episodes', language, t)
                                                                        : item.duration
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className={styles.viewAction}>
                                                            <span>
                                                                {t('View Now')}
                                                                {` (${getDomain(item.url)})`}
                                                            </span>
                                                            <ExternalLink size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </motion.div>
        </PageTransition>
    );
};

export default Media;
