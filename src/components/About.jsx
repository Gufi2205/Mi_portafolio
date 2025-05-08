// Eliminar los elementos de fondo neón
"use client"
import { motion } from "framer-motion"

const About = () => {
    // Función para manejar la descarga del CV
    const handleDownloadCV = () => {
        const fileUrl = "/CV - Julio Perez.pdf" // Asegúrate de que el archivo esté en la carpeta public
        const fileName = "CV_Julio_Perez.pdf" // Nombre que tendrá el archivo descargado

        // Crear enlace temporal
        const link = document.createElement("a")
        link.href = fileUrl
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="sobre-mi" className="relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-16 text-white relative block w-full mx-auto"
                >
                    <span className="relative z-10 mx-auto block w-fit">Sobre Mí</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 w-32 mx-auto"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm w-32 mx-auto"></span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center"
                >
                    <div className="md:w-1/3 mb-12 md:mb-0 flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="rounded-full overflow-hidden w-64 h-64 border-2 border-green-500 shadow-xl relative z-10 group-hover:border-green-400 transition-colors duration-300">
                                <img
                                    src="/img/perfil.jpg"
                                    alt="Julio Pérez"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 md:pl-12">
                        <p className="text-lg leading-relaxed mb-8 text-gray-300 text-justify">
                            Ingeniero de software con experiencia en desarrollo web utilizando React, Next.js y Tailwind CSS, así como
                            en soluciones en la nube con Google Cloud Platform. Especialista en automatización de procesos con Python,
                            optimizando flujos de trabajo y mejorando la eficiencia operativa. Apasionado por crear soluciones
                            innovadoras, escalables y de alto impacto, siempre en busca de nuevos retos y tecnologías emergentes.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="https://github.com/Gufi2205"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-3 overflow-hidden rounded-lg bg-black border border-green-500 text-white transition-all duration-300"
                            >
                                <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-300 group-hover:w-full opacity-20"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm transform group-hover:translate-y-0 transition-transform"></div>
                                <div className="relative flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-400 group-hover:text-green-300 transition-colors"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    <span className="group-hover:text-green-300 transition-colors">GitHub</span>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/julio-p%C3%A9rez-b687261a0" // URL corregida
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-3 overflow-hidden rounded-lg bg-black border border-green-500 text-white transition-all duration-300"
                            >
                                {/* Efecto de fondo al hacer hover */}
                                <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-300 group-hover:w-full opacity-20"></div>

                                {/* Línea decorativa inferior */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm"></div>

                                {/* Contenido del botón */}
                                <div className="relative flex items-center">
                                    {/* Icono de LinkedIn */}
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-400 group-hover:text-green-300 transition-colors"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>

                                    {/* Texto del botón */}
                                    <span className="group-hover:text-green-300 transition-colors">LinkedIn</span>
                                </div>
                            </a>
                            <button
                                onClick={handleDownloadCV}
                                className="group relative px-6 py-3 overflow-hidden rounded-lg bg-black border border-green-500 text-white transition-all duration-300"
                            >
                                <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-300 group-hover:w-full opacity-20"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm"></div>
                                <div className="relative flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-400 group-hover:text-green-300 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span className="group-hover:text-green-300 transition-colors">Descargar CV</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;

