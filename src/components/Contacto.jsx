import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchData, CONTACTO_API } from '../services/sheetsApi';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Youtube, MessageCircle } from 'lucide-react';
import MiniMapa from './MiniMapa';

const Contacto = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getContact = async () => {
            const result = await fetchData(CONTACTO_API);
            if (result && result.length > 0) setData(result[0]);
            setLoading(false);
        };
        getContact();
    }, []);

    if (loading || !data) return null;

    const whatsappUrl = `https://wa.me/${(data.WhatsApp || '').replace(/\D/g, '')}`;

    const isValid = (val) => val && val.trim() !== '' && val !== 'N/A';
    const formatUrl = (url) => url.startsWith('http') ? url : `https://${url}`;

    return (
        <section id="contacto" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', color: 'var(--gold-soft)', marginBottom: '1rem' }}>Contacto</h2>
                    <div style={{ width: '50px', height: '1px', background: 'var(--gold-soft)', margin: '0 auto' }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Phone color="var(--gold-soft)" />
                                <div>
                                    <h4 style={{ color: 'var(--gold-soft)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Llámanos</h4>
                                    <p style={{ fontSize: '1.1rem' }}>{data.Teléfono || data.Telefono}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Mail color="var(--gold-soft)" />
                                <div>
                                    <h4 style={{ color: 'var(--gold-soft)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Email</h4>
                                    <p style={{ fontSize: '1.1rem' }}>{data.Email || data.Correo}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <MapPin color="var(--gold-soft)" />
                                <div>
                                    <h4 style={{ color: 'var(--gold-soft)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Ubicación</h4>
                                    <p style={{ fontSize: '1.1rem' }}>{data.Dirección || data.Direccion}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Clock color="var(--gold-soft)" />
                                <div>
                                    <h4 style={{ color: 'var(--gold-soft)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Horario</h4>
                                    <p style={{ fontSize: '1.1rem' }}>{data.Horario}</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Buttons */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-button">
                                <MessageCircle size={20} /> WhatsApp
                            </a>
                            <a href={`tel:${data.Teléfono}`} className="gold-button">
                                <Phone size={20} /> Llamar
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                            {isValid(data.Instagram) && (
                                <a href={formatUrl(data.Instagram)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-warm)', opacity: 0.6 }}>
                                    <Instagram size={32} />
                                </a>
                            )}
                            {isValid(data.Facebook) && (
                                <a href={formatUrl(data.Facebook)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-warm)', opacity: 0.6 }}>
                                    <Facebook size={32} />
                                </a>
                            )}
                            {isValid(data.YouTube) && (
                                <a href={formatUrl(data.YouTube)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white-warm)', opacity: 0.6 }}>
                                    <Youtube size={32} />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Map Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <MiniMapa mapUrl={data.Mapa} />
                    </motion.div>
                </div>
            </div>
            <style>{`
        .gold-button:hover { opacity: 0.8; }
        a[target="_blank"]:hover { opacity: 1 !important; color: var(--gold-soft) !important; }
      `}</style>
        </section>
    );
};

export default Contacto;
