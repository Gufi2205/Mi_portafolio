// Eliminar los elementos de fondo neón
"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Definir interfaz para las habilidades
interface Skill {
    name: string;
    icon: string;
}

const Skills = () => {
    const [animationDirection, setAnimationDirection] = useState("left")
    const [activeSection, setActiveSection] = useState(0)
    const sections = ["Frontend", "Backend", "Herramientas"]

    useEffect(() => {
        // Obtener la dirección de la animación del localStorage
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

    const frontendSkills = [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    ]

    const toolsSkills = [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    ]

    const backendSkills = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        {
            name: "SQL Server",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ]

    const nextSection = () => {
        setActiveSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    };

    const prevSection = () => {
        setActiveSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
    };

    const renderSkillCards = (skills: Skill[]) => {
        return skills.map((skill, index) => (
            <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={getAnimationVariants()}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-black/20 rounded-lg shadow-md p-3 flex flex-col items-center hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-green-400 backdrop-blur-sm"
            >
                <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/40";
                    }}
                />
                <p className="text-sm font-medium text-gray-300 group-hover:text-green-300 transition-colors">{skill.name}</p>
            </motion.div>
        ))
    }

    const renderActiveSection = () => {
        switch (activeSection) {
            case 0:
                return (
                    <motion.div
                        key="frontend"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                            {renderSkillCards(frontendSkills)}
                        </div>
                    </motion.div>
                );
            case 1:
                return (
                    <motion.div
                        key="backend"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                            {renderSkillCards(backendSkills)}
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="tools"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {renderSkillCards(toolsSkills)}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="habilidades" className="relative overflow-hidden transform scale-90">
            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={getAnimationVariants()}
                    className="text-2xl font-bold text-center mb-10 text-white relative block w-full mx-auto"
                >
                    <span className="relative z-10 mx-auto block w-fit">Mis Habilidades</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 w-48 mx-auto"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm w-48 mx-auto"></span>
                </motion.h2>
                
                {/* Navegación del carrusel */}
                <div className="flex justify-center items-center mb-8 gap-4">
                    <button 
                        onClick={prevSection}
                        className="p-2 rounded-full bg-black/50 hover:bg-green-900/30 transition-colors border border-green-500/30"
                    >
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <motion.h3
                        key={sections[activeSection]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-xl font-semibold text-center text-green-400 w-40"
                    >
                        <span className="relative mx-auto block w-fit">{sections[activeSection]}</span>
                    </motion.h3>
                    
                    <button 
                        onClick={nextSection}
                        className="p-2 rounded-full bg-black/50 hover:bg-green-900/30 transition-colors border border-green-500/30"
                    >
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                
                {/* Indicadores de sección */}
                <div className="flex justify-center gap-2 mb-6">
                    {sections.map((section, index) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                activeSection === index 
                                    ? "bg-green-400 w-6" 
                                    : "bg-gray-600 hover:bg-green-600"
                            }`}
                            aria-label={`Ver sección ${section}`}
                        />
                    ))}
                </div>
                
                {/* Contenido del carrusel */}
                <div className="min-h-[300px] flex items-center justify-center">
                    {renderActiveSection()}
                </div>
            </div>
        </section>
    )
}

export default Skills;

