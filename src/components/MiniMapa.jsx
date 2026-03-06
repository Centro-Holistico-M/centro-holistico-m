import React from 'react';

const MiniMapa = ({ mapUrl }) => {
    if (!mapUrl) return null;

    // Extract src from iframe string if it's an iframe, or use as is
    let src = mapUrl;
    if (mapUrl.includes('iframe')) {
        const match = mapUrl.match(/src="([^"]+)"/);
        if (match) src = match[1];
    } else if (!mapUrl.startsWith('http') && mapUrl.length > 50) {
        // handle possible google maps embed shortcode or path
    }

    return (
        <div style={{
            width: '100%',
            height: '300px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--border-gold)',
            filter: 'grayscale(1) invert(0.9) opacity(0.8)'
        }}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Centro Holístico M"
            ></iframe>
        </div>
    );
};

export default MiniMapa;
