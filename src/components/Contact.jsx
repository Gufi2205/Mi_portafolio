"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMail, FiMapPin, FiSend, FiX } from "react-icons/fi"
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa"

const Contact = () => {
    // Estados del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    // Manejador de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        if (formErrors[name]) setFormErrors({ ...formErrors, [name]: "" })
    }

    // Validación del formulario
    const validateForm = () => {
        const errors = {}
        if (!formData.name.trim()) errors.name = "Nombre requerido"
        if (!formData.email.trim()) {
            errors.email = "Email requerido"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Email inválido"
        }
        if (!formData.subject.trim()) errors.subject = "Asunto requerido"
        if (!formData.message.trim()) {
            errors.message = "Mensaje requerido"
        } else if (formData.message.length < 10) {
            errors.message = "Mínimo 10 caracteres"
        }
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    // Manejador de envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            setIsSubmitting(true)

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })

                if (!response.ok) {
                    throw new Error("Error en el servidor: " + response.status)
                }

                setShowSuccessModal(true)
                setFormData({ name: "", email: "", subject: "", message: "" })
            } catch (error) {
                console.error("Error al enviar:", error)
                alert("Error: " + error.message)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    // Componente del modal de éxito
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
    )

    return (
        <section id="contact" className="relative py-5 overflow-hidden">
            <SuccessModal />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 relative inline-block">
                        <span className="relative z-10">Trabajemos Juntos</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"></span>
                        <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm"></span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 px-2">
                        Contáctame para propuestas, colaboraciones o cualquier consulta
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-4 md:p-12">
                        {/* Sección izquierda - Información de contacto */}
                        <div className="space-y-6 md:space-y-8 md:pr-0 lg:pr-8">
                            <motion.div className="mb-8 md:mb-12 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                                <div className="text-left">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-100">Julio Pérez</h3>
                                    <p className="text-gray-400 text-sm">Desarrollador web</p>
                                    <p className="text-green-400 text-sm mt-2">⏳ Respuesta en 24h</p>
                                </div>
                            </motion.div>

                            <motion.div className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700/30">
                                <div className="space-y-3 md:space-y-4">
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
                                            <a
                                                href="mailto:julio2205perez@gmail.com"
                                                className="text-gray-300 hover:text-green-400 transition-colors"
                                            >
                                                julio2205perez@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700/30">
                                <div className="flex items-center gap-2 md:gap-3 mb-3">
                                    <FiMapPin className="text-green-400 text-lg md:text-xl" />
                                    <h4 className="font-semibold text-gray-100 text-base md:text-lg">Ubicación</h4>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center gap-2 text-gray-300">
                                        <span className="text-gray-400">📍</span>
                                        Lima, Perú
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="pt-4 md:pt-6 border-t border-gray-700/30">
                                <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Encuéntrame en</h4>
                                <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                                    {[
                                        { icon: <FaGithub className="w-5 h-5 md:w-6 md:h-6" />, link: "https://github.com" },
                                        { icon: <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />, link: "https://linkedin.com" },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 md:p-3 bg-gray-800 hover:bg-green-900/20 rounded-lg md:rounded-xl text-gray-400 hover:text-green-400 transition-all border border-gray-700/30 hover:border-green-400/30"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sección derecha - Formulario */}
                        <motion.div className="space-y-4 md:space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block text-sm md:text-base font-medium mb-1 md:mb-2 text-gray-300">
                                        👤 Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.name
                                                ? "border-red-400 focus:ring-red-400/20"
                                                : "border-gray-700 focus:border-green-500 focus:ring-green-400/20"
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="Ej. María García"
                                    />
                                    {formErrors.name && <p className="text-red-400 text-xs md:text-sm mt-1">{formErrors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm md:text-base font-medium mb-1 md:mb-2 text-gray-300">
                                        📧 Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.email
                                                ? "border-red-400 focus:ring-red-400/20"
                                                : "border-gray-700 focus:border-green-500 focus:ring-green-400/20"
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                    {formErrors.email && <p className="text-red-400 text-xs md:text-sm mt-1">{formErrors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm md:text-base font-medium mb-1 md:mb-2 text-gray-300">✏️ Asunto</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.subject
                                                ? "border-red-400 focus:ring-red-400/20"
                                                : "border-gray-700 focus:border-green-500 focus:ring-green-400/20"
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="Ej. Oportunidad de trabajo"
                                    />
                                    {formErrors.subject && <p className="text-red-400 text-xs md:text-sm mt-1">{formErrors.subject}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm md:text-base font-medium mb-1 md:mb-2 text-gray-300">
                                        💬 Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-gray-800 border focus:ring-2 ${formErrors.message
                                                ? "border-red-400 focus:ring-red-400/20"
                                                : "border-gray-700 focus:border-green-500 focus:ring-green-400/20"
                                            } text-gray-300 placeholder-gray-500`}
                                        placeholder="Describe tu proyecto o consulta..."
                                    ></textarea>
                                    {formErrors.message && <p className="text-red-400 text-xs md:text-sm mt-1">{formErrors.message}</p>}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-sm md:text-base py-3 md:py-4 font-medium rounded-lg flex items-center justify-center gap-2 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity"></div>
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="w-4 h-4 md:w-5 md:h-5" />
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
    )
}

export default Contact;