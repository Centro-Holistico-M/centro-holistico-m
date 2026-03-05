import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchSheet } from '../services/sheetService';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchSheet('Servicios');
            // Handle potential missing columns gracefully
            const processed = data
                .filter(s => s.Nombre)
                .sort((a, b) => (parseInt(a.Orden) || 99) - (parseInt(b.Orden) || 99));

            setServices(processed);
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return null;

    return (
        <section id="servicios" className="page-section">
            <div className="container">
                <h2 className="page-title">Nuestros Servicios</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="service-card"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                paddingBottom: '3rem',
                                borderBottom: i === services.length - 1 ? 'none' : '1px solid var(--border-color)'
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    {service.Categoria}
                                </div>
                                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.Nombre}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem' }}>
                                    {service.DescripcionCorta}
                                </p>

                                <div className="grid-layout" style={{ marginTop: '1.5rem', gap: '1rem' }}>
                                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px' }}>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Beneficio</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>{service.DescripcionCompleta || 'Bienestar integral'}</div>
                                    </div>
                                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px' }}>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Duración y Precio</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                                            {service.Duracion} {service.Precio && service.Precio !== '0' ? `• $${service.Precio}` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
