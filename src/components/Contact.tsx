'use client';

import { useState, FormEvent } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Aquí iría la lógica para enviar el formulario
            // Por ahora solo simulamos un envío exitoso
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simulamos éxito
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch {
            // Sin parámetro de error
            console.error('Error al enviar el formulario');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-[#0d1117]/90 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Columna izquierda - Información de contacto */}
                <div className="w-full md:w-1/3 bg-[#0d1117] p-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-1">Julio Perez</h3>
                        <p className="text-gray-400">Desarrollador web</p>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-md font-semibold text-white mb-4">Información de Contacto</h4>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <FaPhone className="mr-3 text-gray-400" />
                                <span>+51 987 654 321</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-md font-semibold text-white mb-4">Ubicación</h4>
                        <div className="flex items-center text-gray-300">
                            <FaMapMarkerAlt className="mr-3 text-gray-400" />
                            <span>Lima, Perú</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold text-white mb-4">Encuéntrame en</h4>
                        <div className="flex space-x-3">
                            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#161b22] rounded-md flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#161b22] rounded-md flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Columna derecha - Formulario */}
                <div className="w-full md:w-2/3 p-8">
                    {submitStatus === 'success' && (
                        <div className="mb-4 p-3 bg-green-900/30 text-green-400 rounded">
                            ¡Mensaje enviado con éxito! Te responderé lo antes posible.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-4 p-3 bg-red-900/30 text-red-400 rounded">
                            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="flex items-center text-gray-300 mb-2">
                                <span className="mr-2">👤</span> Nombre completo
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-[#161b22] border border-gray-700 rounded p-3 text-white focus:border-green-400 focus:outline-none"
                                placeholder="María García"
                                required
                            />
                        </div>

                        <div>
                            <label className="flex items-center text-gray-300 mb-2">
                                <span className="mr-2">📧</span> Correo electrónico
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#161b22] border border-gray-700 rounded p-3 text-white focus:border-green-400 focus:outline-none"
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="flex items-center text-gray-300 mb-2">
                                <span className="mr-2">✏️</span> Asunto
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-[#161b22] border border-gray-700 rounded p-3 text-white focus:border-green-400 focus:outline-none"
                                placeholder="Oportunidad de trabajo"
                                required
                            />
                        </div>

                        <div>
                            <label className="flex items-center text-gray-300 mb-2">
                                <span className="mr-2">💬</span> Mensaje
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full bg-[#161b22] border border-gray-700 rounded p-3 text-white focus:border-green-400 focus:outline-none"
                                placeholder="Describe tu proyecto o consulta..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full font-medium py-3 px-4 rounded transition-all duration-300 flex items-center justify-center ${
                                isSubmitting 
                                ? 'bg-gray-600 cursor-not-allowed opacity-70' 
                                : 'bg-green-600 hover:bg-green-700 hover:shadow-[0_0_10px_rgba(0,255,127,0.5)] text-white'
                            }`}
                            aria-busy={isSubmitting}
                        >
                            <span className="mr-2">{isSubmitting ? '⏳' : '📤'}</span>
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;