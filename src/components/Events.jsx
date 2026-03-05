import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import { fetchSheet } from '../services/sheetService';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchSheet('Horarios');
            // Filter where Fecha has value
            const filtered = data.filter(item => item.Fecha && item.Fecha.trim() !== '');
            setEvents(filtered);
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return null;

    return (
        <div style={{ marginTop: '4rem' }}>
            <div>
                <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '2.5rem', textAlign: 'center', color: 'var(--text-primary)' }}>Eventos Especiales</h3>

                {events.length === 0 ? (
                    <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                        Próximamente nuevos eventos especiales.
                    </p>
                ) : (
                    <div className="grid-layout">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                className="card event-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}
                            >
                                <div style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {event.Actividad}
                                </div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>{event.Nombre}</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <Calendar size={16} color="var(--accent-gold-soft)" />
                                        <span>{event.Fecha}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <Clock size={16} color="var(--accent-gold-soft)" />
                                        <span>{event.Hora}</span>
                                    </div>
                                    {event.Cupos && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                            <Users size={16} color="var(--accent-gold-soft)" />
                                            <span>Cupos: {event.Cupos}</span>
                                        </div>
                                    )}
                                </div>

                                {event.Notas && (
                                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '6px', marginBottom: '1.5rem' }}>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                                            "{event.Notas}"
                                        </p>
                                    </div>
                                )}

                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: '50px', background: event.Estado === 'Disponible' ? 'var(--sage-soft)' : '#F5F5F5', color: 'var(--text-primary)', fontWeight: '500' }}>
                                        {event.Estado || 'Inscripciones abiertas'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
