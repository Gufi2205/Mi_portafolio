"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
}

const Modal = ({ isOpen, onClose, projectName }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900 p-4 rounded-lg max-w-sm w-full mx-4 border border-green-500/30">
                <h3 className="text-lg font-bold text-green-400 mb-3">{projectName}</h3>
                <p className="text-gray-300 mb-4 text-sm">
                    Lo sentimos, este proyecto no está disponible públicamente en este momento.
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 rounded-lg transition-colors text-sm"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

// Definir interfaces para los tipos
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    demo: string;
    github: string;
    categories: string[];
}

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("todos")
    const [modalOpen, setModalOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState("")
    const [animationDirection, setAnimationDirection] = useState("left")

    // Obtener la dirección de la animación del localStorage
    useEffect(() => {
        const direction = localStorage.getItem('animationDirection') || 'left'
        setAnimationDirection(direction)
    }, [])

    const getAnimationVariants = () => {
        return {
            hidden: { 
                opacity: 0, 
                x: animationDirection === "left" ? -100 : 100 
            },
            visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                }
            }
        }
    }

    const handleProjectLink = (project: Project, linkType: "demo" | "github") => {
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
            title: "FamilyVets",
            description: "",
            image: "/img/family.jpg",
            demo: "https://family-vets.netlify.app/#espec",
            github: "https://github.com/Gufi2205/FamilyVets.git",
            categories: ["PHP", "HTML", "Javascript", "CSS"],
        },
        {
            id: 3,
            title: "InkaChess ",
            description: "",
            image: "/img/Inkachess.jpg",
            demo: "https://inkachess.netlify.app/",
            github: "https://github.com/NIKOLLE8/INKA_CHESS.git",
            categories: ["HTML", "Javascript", "CSS"],
        },
        {
            id: 4,
            title: "Gufiplay ",
            description: "",
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
        <section id="proyectos" className="relative overflow-hidden transform scale-90">
            {/* Modal de proyecto no disponible */}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} projectName={currentProject} />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={getAnimationVariants()}
                    className="text-2xl font-bold text-center mb-10 text-white relative block w-full mx-auto"
                >
                    <span className="relative z-10 mx-auto block w-fit">Mis Proyectos</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 w-48 mx-auto"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm w-48 mx-auto"></span>
                </motion.h2>

                {/* Filtros de categorías */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={getAnimationVariants()}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === category.id
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="relative group bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-green-400"
                            >
                                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Imagen del proyecto */}
                                <div className="h-36 overflow-hidden rounded-t-lg relative">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://via.placeholder.com/600x300/1f2937/ffffff?text=${project.title}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-4">
                                    <h3 className="text-base font-bold mb-2 text-gray-100">{project.title}</h3>
                                    
                                    {/* Categorías */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.categories.map((category, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-green-300 border border-green-500/20"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Botones */}
                                    <div className="flex gap-2">
                                        <motion.button
                                            onClick={() => handleProjectLink(project, "demo")}
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 rounded text-xs text-center transition-all relative overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                                            Demo
                                        </motion.button>
                                        <motion.button
                                            onClick={() => handleProjectLink(project, "github")}
                                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-1.5 px-3 rounded text-xs text-center transition-all border border-gray-700 relative overflow-hidden"
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

