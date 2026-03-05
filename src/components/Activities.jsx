import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchSheet } from '../services/sheetService';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchSheet('Horarios');
            // Filter where Fecha is empty
            const filtered = data.filter(item => !item.Fecha || item.Fecha.trim() === '');

            // Group by Dia
            const grouped = filtered.reduce((acc, curr) => {
                const dia = curr.Día || curr.Dia || 'Otros';
                if (!acc[dia]) acc[dia] = [];
                acc[dia].push(curr);
                return acc;
            }, {});

            // Order days manually
            const dayOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
            const sortedGrouped = Object.keys(grouped).sort((a, b) => {
                return dayOrder.indexOf(a) - dayOrder.indexOf(b);
            });

            setActivities({ keys: sortedGrouped, data: grouped });
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return null;
    if (!activities.keys || activities.keys.length === 0) return null;

    return (
        <div style={{ paddingBottom: '2rem' }}>


            <div className="grid-layout">
                {activities.keys.map((dia, idx) => (
                    <motion.div
                        key={dia}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="day-group"
                    >
                        <h3 className="font-serif" style={{ color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            {dia}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {activities.data[dia].map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '600', fontSize: '1rem' }}>{item.Actividad}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.Nombre}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>{item.Hora}</div>
                                        <div style={{ fontSize: '0.75rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: item.Estado === 'Disponible' ? 'var(--sage-soft)' : '#F5F5F5', display: 'inline-block', marginTop: '0.25rem' }}>
                                            {item.Estado}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Activities;
