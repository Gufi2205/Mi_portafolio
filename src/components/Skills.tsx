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
                
                {/* Sección Frontend */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-center text-green-400 mb-6">Frontend</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {renderSkillCards(frontendSkills)}
                    </div>
                </div>

                {/* Sección Backend */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-center text-green-400 mb-6">Backend</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {renderSkillCards(backendSkills)}
                    </div>
                </div>

                {/* Sección Herramientas */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-center text-green-400 mb-6">Herramientas</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {renderSkillCards(toolsSkills)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;

