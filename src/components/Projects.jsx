"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Modal from "./modal"

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("todos")
    const [modalOpen, setModalOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState("")

    const handleProjectLink = (project, linkType) => {
        // Si es el proyecto "De la selva su encanto", mostrar el modal
        if (project.title === "De la selva su encanto") {
            setCurrentProject(project.title)
            setModalOpen(true)
            return
        }

        // Para otros proyectos, abrir el enlace normalmente
        const url = linkType === "demo" ? project.demo : project.github
        if (url) {
            window.open(url, "_blank")
        }
    }

    const projects = [
        {
            id: 1,
            title: "De la selva su encanto",
            description:
                "Es un juego tematizado en los mitos de la selva peruana, en el cual shipi el shipibo sobrevive en la noche a los seres míticos.",
            image: "/img/PANTALLAZO_DEMOSTRATIVO.webp",
            demo: "",
            github: "",
            categories: ["Godot"],
        },
        {
            id: 2,
            title: "FamilyVets",
            description:
                "Es una pagina para gestionar citas para una veterinaria para evitar las colas y facilitar tiempos de demora ",
            image: "/img/family.jpg",
            demo: "https://family-vets.netlify.app/#espec",
            github: "https://github.com/Gufi2205/FamilyVets.git",
            categories: ["PHP", "HTML", "Javascript", "CSS"],
        },
        {
            id: 3,
            title: "InkaChess ",
            description: "Es un juego de ajedrez controlado dediante la voz.",
            image: "/img/Inkachess.jpg",
            demo: "https://inkachess.netlify.app/",
            github: "https://github.com/NIKOLLE8/INKA_CHESS.git",
            categories: ["HTML", "Javascript", "CSS"],
        },
        {
            id: 4,
            title: "gufiplay ",
            description: "Es un programa que te permite descargar canciones en diferentes formatos desde un link de youtube.",
            image: "/img/gufiplay.jpg",
            demo: "https://www.mediafire.com/file/e7juhmasm0oegl4/Descargador.exe/file",
            github: "https://github.com/Gufi2205/gufiplay.git",
            categories: ["Python"],
        },
    ]

    const categories = [
        { id: "todos", name: "Todos" },
        { id: "Godot", name: "Godot" },
        { id: "HTML", name: "HTML" },
        { id: "CSS", name: "CSS" },
        { id: "Javascript", name: "Javascript" },
        { id: "PHP", name: "PHP" },
        { id: "Python", name: "Python" },
    ]

    const filteredProjects =
        activeCategory === "todos" ? projects : projects.filter((project) => project.categories.includes(activeCategory))

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120 },
        },
        exit: { opacity: 0, scale: 0.8 },
    }

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)",
        },
        tap: { scale: 0.95 },
        selected: {
            scale: 1.1,
            backgroundColor: "#10b981",
            color: "#ffffff",
            boxShadow: "0 0 20px rgba(74, 222, 128, 0.8)",
        },
    }

    return (
        <section id="proyectos" className="relative overflow-hidden">
            {/* Modal de proyecto no disponible */}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} projectName={currentProject} />

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-12 text-white relative block w-full mx-auto"
                >
                    <span className="relative z-10 mx-auto block w-fit">Mis Proyectos</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 w-48 mx-auto"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm w-48 mx-auto"></span>
                </motion.h2>

                {/* Filtros de categorías */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                ? "bg-green-600 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                } border border-green-500/30`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            animate={activeCategory === category.id ? "selected" : ""}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Proyectos - Tarjetas originales con nuevo diseño */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="relative group bg-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-gray-800 hover:border-green-400"
                            >
                                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Imagen del proyecto */}
                                <div className="h-48 overflow-hidden rounded-t-xl relative">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/600x300/1f2937/ffffff?text=${project.title}`
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-100">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    {/* Categorías */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.categories.map((category, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-green-300 border border-green-500/20"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Botones */}
                                    <div className="flex gap-3">
                                        <motion.button
                                            onClick={() => handleProjectLink(project, "demo")}
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-center transition-all relative overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                                            Demo
                                        </motion.button>
                                        <motion.button
                                            onClick={() => handleProjectLink(project, "github")}
                                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded-lg text-center transition-all border border-gray-700 relative overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                                            GitHub
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects;

