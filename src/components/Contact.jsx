import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
    const whatsappUrl = `https://wa.me/527761541551`;
    const instagramUrl = `https://instagram.com/centroholisticom`; // Placeholder, update if needed
    const facebookUrl = `https://facebook.com/centroholisticom`;    // Placeholder, update if needed
    const youtubeUrl = `https://youtube.com/@centroholisticom`;     // Placeholder, update if needed

    return (
        <section id="contacto" className="page-section">
            <div className="container">
                <h2 className="page-title">Contacto</h2>

                <div className="grid-layout" style={{ gap: '2.5rem' }}>
                    <motion.div
                        className="card"
                        style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>
                                Centro Holístico M
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <Phone size={20} color="var(--accent-gold)" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Teléfono</div>
                                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>7761541551</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <Mail size={20} color="var(--accent-gold)" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Correo</div>
                                    <div style={{ fontWeight: '500', color: 'var(--text-primary)', wordBreak: 'break-all' }}>centrom.holistico@gmail.com</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <MapPin size={20} color="var(--accent-gold)" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Dirección</div>
                                    <div style={{ fontWeight: '500', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                        Francisco Marquez 27<br />
                                        Colonia Centro<br />
                                        Huauchinango, Puebla
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <Clock size={20} color="var(--accent-gold)" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Horario</div>
                                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>Lunes a viernes de 07:00am a 7:00pm</div>
                                </div>
                            </div>
                        </div>

                        {/* Social & Action Buttons */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-button whatsapp-btn" aria-label="WhatsApp">
                                <MessageCircle size={20} />
                                <span>Contactar por WhatsApp</span>
                            </a>

                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-button instagram-btn" aria-label="Instagram">
                                <Instagram size={20} />
                                <span>Síguenos en Instagram</span>
                            </a>

                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-button facebook-btn" aria-label="Facebook">
                                <Facebook size={20} />
                                <span>Síguenos en Facebook</span>
                            </a>

                            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-button youtube-btn" aria-label="YouTube">
                                <Youtube size={20} />
                                <span>Canal de YouTube</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#eee', width: '100%' }}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.483161042718!2d-98.0537042!3d20.1764353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d064fc67469a93%3A0xc3b5a1b32f91df25!2sFrancisco%20M%C3%A1rquez%2027%2C%20Centro%2C%2073160%20Huauchinango%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1709500000000!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Centro Holístico M"
                        ></iframe>
                    </motion.div>
                </div>
            </div>

            <footer style={{ marginTop: '4rem', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', opacity: 0.6, fontSize: '0.8rem' }}>
                <p>© 2026 Centro Holístico M - Espacio de Sanación</p>
            </footer>
        </section>
    );
};

export default Contact;
