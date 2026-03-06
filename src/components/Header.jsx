import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Servicios', id: 'servicios' },
        { name: 'Contacto', id: 'contacto' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '1rem 0' : '2rem 0',
                background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-gold)' : 'none',
                transition: 'var(--transition)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    onClick={() => scrollTo('inicio')}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
                >
                    <img
                        src="/Logo.jfif"
                        alt="M"
                        style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--gold-soft)' }}
                    />
                    <span className="font-premium" style={{ fontSize: '1.2rem', color: 'var(--gold-soft)' }}>M</span>
                </div>

                {/* Desktop Nav */}
                <nav style={{ display: 'none', gap: '3rem' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <span
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            style={{
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: scrolled ? 'var(--white-warm)' : 'var(--white-warm)'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </span>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div
                    style={{ display: 'block', cursor: 'pointer', color: 'var(--gold-soft)' }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '80%',
                            background: 'var(--bg-deep)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2.5rem',
                            borderLeft: '1px solid var(--border-gold)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <span
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                style={{
                                    fontSize: '1.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    color: 'var(--gold-soft)'
                                }}
                            >
                                {link.name}
                            </span>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .nav-link:hover { color: var(--gold-soft) !important; }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          div[style*="@media"] { display: none !important; } /* This is tricky, using CSS class instead */
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
