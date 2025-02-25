'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    // Estados del formulario (mantener igual)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Manejadores de cambios y validación (mantener igual)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (formErrors[name]) setFormErrors({ ...formErrors, [name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Nombre requerido';
        if (!formData.email.trim()) {
            errors.email = 'Email requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Email inválido';
        }
        if (!formData.subject.trim()) errors.subject = 'Asunto requerido';
        if (!formData.message.trim()) {
            errors.message = 'Mensaje requerido';
        } else if (formData.message.length < 10) {
            errors.message = 'Mínimo 10 caracteres';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setShowSuccessModal(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 1500);
        }
    };

    const SuccessModal = () => (
        <AnimatePresence>
            {showSuccessModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative border border-green-500/30"
                    >
                        <div className="absolute inset-0 bg-green-500/10 rounded-2xl opacity-30"></div>
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors"
                        >
                            <FiX className="w-6 h-6" />
                        </button>

                        <div className="text-center relative z-10">
                            <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-100 mb-2">¡Envío exitoso!</h3>
                            <p className="text-gray-400 mb-6">Tu mensaje ha sido enviado correctamente. Te contactaré pronto.</p>

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <section id="contact" className="relative py-5 bg-black overflow-hidden">
            {/* Elementos de fondo neón */}
            <div className="absolute top-20 left-1/4 w-1 h-40 bg-green-500 opacity-70 blur-sm"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-60 bg-green-400 opacity-50 blur-md"></div>
            <div className="absolute bottom-1/4 left-20 w-3 h-3 rounded-full bg-green-300 opacity-70 blur-sm"></div>
            <div className="absolute top-1/4 right-20 w-2 h-2 rounded-full bg-green-400 opacity-90 blur-sm"></div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1/2 h-40 bg-green-500 opacity-10 blur-3xl rounded-full"></div>

            <SuccessModal />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-100 mb-4 relative inline-block">
                        <span className="relative z-10">Trabajemos Juntos</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"></span>
                        <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm"></span>
                    </h2>
                    <p className="text-lg text-gray-400">Contáctame para propuestas, colaboraciones o cualquier consulta</p>
                </motion.div>

                <div className="max-w-7xl mx-auto bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-800">
                    <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
                        {/* Sección izquierda */}
                        <div className="space-y-8 pr-8 relative">
                            {/* Perfil y tiempo de respuesta */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="mb-12 flex items-center gap-6"
                            >
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-gray-100">Julio Pérez</h3>
                                    <p className="text-gray-400 text-sm">Desarrollador Full Stack</p>
                                    <p className="text-green-400 text-sm mt-2">⏳ Respuesta en 24h</p>
                                </div>
                            </motion.div>

                            {/* Tarjeta de contacto */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/30 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FiMail className="text-green-400 text-xl" />
                                        <h4 className="font-semibold text-gray-100">Información de Contacto</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <FaPhoneAlt className="text-gray-400" />
                                            <a href="tel:+51987370254" className="text-gray-300 hover:text-green-400 transition-colors">
                                                +51 987 370 254
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <FiMail className="text-gray-400" />
                                            <a href="mailto:julio2205perez@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                                                julio2205perez@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Tarjeta de ubicación */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/30 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FiMapPin className="text-green-400 text-xl" />
                                    <h4 className="font-semibold text-gray-100">Ubicación</h4>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center gap-2 text-gray-300">
                                        <span className="text-gray-400">📍</span>
                                        Lima, Perú
                                    </p>
                                </div>
                            </motion.div>

                            {/* Redes sociales */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="pt-6 border-t border-gray-700/30"
                            >
                                <h4 className="font-semibold mb-4 flex items-center gap-2 text-gray-100">
                                    <span className="bg-green-600 text-white p-2 rounded-lg">🌐</span>
                                    Encuéntrame en
                                </h4>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <FaGithub className="w-6 h-6" />, link: 'https://github.com' },
                                        { icon: <FaLinkedin className="w-6 h-6" />, link: 'https://linkedin.com' },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800 hover:bg-green-900/20 rounded-xl text-gray-400 hover:text-green-400 transition-all border border-gray-700/30 hover:border-green-400/30"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sección derecha - Formulario */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="space-y-6"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        👤 Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.name
                                                ? 'border-red-400 focus:ring-red-400/20'
                                                : 'border-gray-700 focus:border-green-500 focus:ring-green-400/20'
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="Ej. María García"
                                    />
                                    {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        📧 Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.email
                                                ? 'border-red-400 focus:ring-red-400/20'
                                                : 'border-gray-700 focus:border-green-500 focus:ring-green-400/20'
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                    {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        ✏️ Asunto
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.subject
                                                ? 'border-red-400 focus:ring-red-400/20'
                                                : 'border-gray-700 focus:border-green-500 focus:ring-green-400/20'
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="Ej. Oportunidad de trabajo"
                                    />
                                    {formErrors.subject && <p className="text-red-400 text-sm mt-1">{formErrors.subject}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        💬 Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.message
                                                ? 'border-red-400 focus:ring-red-400/20'
                                                : 'border-gray-700 focus:border-green-500 focus:ring-green-400/20'
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="Describe tu proyecto o consulta..."
                                    ></textarea>
                                    {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 font-medium rounded-lg transition-all flex items-center justify-center gap-2 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity"></div>
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="w-5 h-5" />
                                            Enviar Mensaje
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;