import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchData, SERVICIOS_API } from '../services/sheetsApi';
import { Sparkles, Clock, Tag } from 'lucide-react';

const Servicios = () => {
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(SERVICIOS_API);
            setServicios(data);
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return null;

    return (
        <section id="servicios" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', color: 'var(--gold-soft)', marginBottom: '1rem' }}>Servicios</h2>
                    <div style={{ width: '50px', height: '1px', background: 'var(--gold-soft)', margin: '0 auto' }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {servicios.map((serv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-card"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Sparkles size={24} color="var(--gold-soft)" />
                                <span style={{
                                    color: 'var(--gold-soft)',
                                    fontSize: '1.2rem',
                                    fontWeight: '600'
                                }} className="font-premium">
                                    ${serv.Precio}
                                </span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--white-warm)', marginBottom: '0.8rem' }}>
                                    {serv.Nombre}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                    {serv.Descripción || serv.Descripcion}
                                </p>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1.5rem', opacity: 0.7 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                                    <Clock size={16} />
                                    <span>{serv.Duración || serv.Duracion}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
