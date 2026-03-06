import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchData, INICIO_API } from '../services/sheetsApi';
import { Calendar, Clock, Star } from 'lucide-react';

const Inicio = () => {
    const [actividades, setActividades] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getInicioData = async () => {
            const data = await fetchData(INICIO_API);
            setActividades(data);
            setLoading(false);
        };
        getInicioData();
    }, []);

    if (loading) return null;

    return (
        <section id="inicio-actividades" className="section-padding" style={{ background: 'rgba(212, 175, 55, 0.02)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', color: 'var(--gold-soft)', marginBottom: '1rem' }}>Calendario Semanal</h2>
                    <p style={{ color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Actividades y Eventos
                    </p>
                    <div style={{ width: '50px', height: '1px', background: 'var(--gold-soft)', margin: '1.5rem auto' }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {actividades.length > 0 ? actividades.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="premium-card"
                            style={{ padding: '1.5rem', borderLeft: '3px solid var(--gold-soft)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <span style={{
                                    color: 'var(--gold-soft)',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }} className="font-premium">
                                    {item.Día || item.Dia}
                                </span>
                                <Star size={16} color="var(--gold-soft)" fill="var(--gold-soft)" opacity={0.5} />
                            </div>

                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--white-warm)' }}>
                                {item.Actividad || item.Nombre || item.Evento}
                            </h3>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <Clock size={16} color="var(--gold-soft)" />
                                <span>{item.Horario || item.Hora}</span>
                            </div>
                        </motion.div>
                    )) : (
                        <div style={{ textAlign: 'center', gridColumn: '1 / -1', opacity: 0.5 }}>
                            <p>Cargando actividades...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Inicio;
