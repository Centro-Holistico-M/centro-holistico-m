import React, { useState, useEffect } from 'react';
import { fetchSheet } from '../services/sheetService';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('#inicio');
    const [slogan, setSlogan] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#inicio', '#servicios', '#contacto'];
            let current = '#inicio';
            for (const section of sections) {
                const element = document.querySelector(section);
                if (element && window.scrollY >= (element.offsetTop - 100)) {
                    current = section;
                }
            }
            setActiveTab(current);
        };
        window.addEventListener('scroll', handleScroll);

        const getData = async () => {
            const data = await fetchSheet('Contacto');
            if (data && data.length > 0) {
                setSlogan(data[0].FraseCierre);
            }
        };
        getData();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Contacto', href: '#contacto' }
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="compact-nav">
            <div className="nav-container">
                <div className="nav-brand-section">
                    <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="brand-link" aria-label="Inicio">
                        <img src="/Logo.jfif" alt="Logo Centro Holístico M" className="brand-logo-img" />
                        {slogan && (
                            <span style={{
                                fontSize: 'clamp(0.6rem, 2.2vw, 0.85rem)',
                                color: 'var(--text-secondary)',
                                fontStyle: 'italic',
                                letterSpacing: '0.3px',
                                marginLeft: '0.6rem',
                                whiteSpace: 'nowrap',
                                fontWeight: '500'
                            }}>
                                {slogan}
                            </span>
                        )}
                    </a>
                </div>

                <div className="nav-links">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`nav-link-item ${activeTab === link.href ? 'active' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
