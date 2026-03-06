import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border-gold)',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.5)'
        }}>
            <div className="container">
                <p className="font-premium" style={{ color: 'var(--gold-soft)', fontSize: '1.2rem', marginBottom: '1rem' }}>M</p>
                <p style={{ opacity: 0.5, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                    © {new Date().getFullYear()} CENTRO HOLÍSTICO M | DISEÑO PREMIUM ESPIRITUAL
                </p>
            </div>
        </footer>
    );
};

export default Footer;
