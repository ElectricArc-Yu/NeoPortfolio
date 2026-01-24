import React, { useState, useEffect } from 'react';

export default function VideoPlayer({ url, subtitles, lang }) {
    // subtitles: { en: 'path/to/en.vtt', zh: 'path/to/zh.vtt' }
    // lang: 'en' | 'zh'

    const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');

    if (isYoutube) {
        // Basic YouTube embed - Note: YouTube handles its own subtitles usually, 
        // but we can try to force lang if needed via params, though external subs on YT embed are hard.
        // For this requirement, we'll assume "subtitles" prop implies local video or custom player.
        // If user insists on YT with custom subs, it requires a complex wrapper. 
        // We'll stick to standard embed for YT and HTML5 video for others with track support.
        const videoId = url.split('v=')[1] || url.split('/').pop();
        return (
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-800 bg-black">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?cc_load_policy=1&hl=${lang}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }

    return (
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-800 bg-black relative group">
            <video
                controls
                className="w-full h-full"
                crossOrigin="anonymous"
            >
                <source src={url} type="video/mp4" />
                {subtitles?.en && (
                    <track
                        kind="subtitles"
                        src={subtitles.en}
                        srcLang="en"
                        label="English"
                        default={lang === 'en'}
                    />
                )}
                {subtitles?.zh && (
                    <track
                        kind="subtitles"
                        src={subtitles.zh}
                        srcLang="zh"
                        label="中文"
                        default={lang === 'zh'}
                    />
                )}
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
