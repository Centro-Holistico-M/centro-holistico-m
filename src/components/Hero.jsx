import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="inicio"
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ marginBottom: '2rem' }}
            >
                <img
                    src="/Logo.jfif"
                    alt="Centro Holístico M"
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '1px solid var(--gold-soft)',
                        padding: '5px'
                    }}
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'var(--gold-soft)', marginBottom: '1rem' }}
            >
                Centro Holístico M
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--white-warm)',
                    opacity: 0.8
                }}
            >
                La sanación comienza cuando te escuchas
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <div style={{
                    width: '1px',
                    height: '60px',
                    background: 'linear-gradient(to bottom, var(--gold-soft), transparent)',
                    margin: '0 auto'
                }} />
            </motion.div>
        </section>
    );
};

export default Hero;
