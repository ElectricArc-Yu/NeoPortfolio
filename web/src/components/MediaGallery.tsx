import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Play, Volume2 } from 'lucide-react';
import styles from './MediaGallery.module.css';

interface MediaGalleryProps {
    images: string[];
    video?: string; // Optional video URL
}

// Sub-component for Video with specific behavior
const VideoSlide: React.FC<{ src: string; poster: string }> = ({ src, poster }) => {
    const [showUnmute, setShowUnmute] = useState(true);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handleUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 0.5;
            setShowUnmute(false);
            videoRef.current.play().catch(() => { }); // Auto play if allowed
        }
    };

    const handleVolumeChange = () => {
        if (videoRef.current) {
            if (!videoRef.current.muted && videoRef.current.volume > 0) {
                setShowUnmute(false);
            }
        }
    };

    return (
        <div className={styles.videoWrapper}>
            <video
                ref={videoRef}
                src={src}
                controls
                muted
                className={styles.image}
                poster={poster}
                onVolumeChange={handleVolumeChange}
            />
            {showUnmute && (
                <button className={styles.unmuteOverlay} onClick={handleUnmute}>
                    <Volume2 size={32} />
                    <span>Unmute</span>
                </button>
            )}
        </div>
    );
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ images, video }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Combine images and video into a single slide array
    // Rule: Video always at index 1 (second position) if present
    const slides = useMemo(() => {
        const result = [...images];
        if (video) {
            // Insert at index 1
            if (result.length > 0) {
                result.splice(1, 0, video);
            } else {
                result.push(video);
            }
        }
        return result;
    }, [images, video]);

    if (!slides || slides.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const isVideo = (url: string) => {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url === video;
    };

    return (
        <div className={styles.gallery}>
            <div className={styles.viewer}>
                {isVideo(slides[currentIndex]) ? (
                    <VideoSlide src={slides[currentIndex]} poster={images[0]} />
                ) : (
                    <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.image} />
                )}

                {slides.length > 1 && (
                    <>
                        <button onClick={prevSlide} className={`${styles.navBtn} ${styles.prev}`}>
                            <ChevronLeft />
                        </button>
                        <button onClick={nextSlide} className={`${styles.navBtn} ${styles.next}`}>
                            <ChevronRight />
                        </button>
                    </>
                )}
            </div>

            <div className={styles.thumbnails}>
                {slides.map((slide, idx) => {
                    const isVid = isVideo(slide);
                    return (
                        <button
                            key={idx}
                            className={`${styles.thumb} ${idx === currentIndex ? styles.active : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                backgroundImage: isVid
                                    ? `url(${images[0]})` // Fallback to first image for thumbnail bg
                                    : `url(${slide})`,
                                position: 'relative'
                            }}
                        >
                            {isVid && (
                                <div className={styles.thumbVideoOverlay}>
                                    <Play size={12} fill="white" />
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MediaGallery;
