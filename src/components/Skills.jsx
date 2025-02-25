'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const frontendSkills = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    ];

    const toolsSkills = [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    ];

    const backendSkills = [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ];

    const renderSkillCards = (skills) => {
        return skills.map((skill, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-black/20 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-green-400 backdrop-blur-sm"
            >
                <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64";
                    }}
                />
                <h3 className="text-lg font-medium text-gray-300 group-hover:text-green-300 transition-colors">{skill.name}</h3>
            </motion.div>
        ));
    };

    return (
        <section id="habilidades" className="py-5 bg-black relative overflow-hidden">
            {/* Elementos de fondo neón */}
            <div className="absolute top-20 left-1/4 w-1 h-40 bg-green-500 opacity-70 blur-sm"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-60 bg-green-400 opacity-50 blur-md"></div>
            <div className="absolute bottom-1/4 left-20 w-3 h-3 rounded-full bg-green-300 opacity-70 blur-sm"></div>
            <div className="absolute top-1/4 right-20 w-2 h-2 rounded-full bg-green-400 opacity-90 blur-sm"></div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1/2 h-40 bg-green-500 opacity-10 blur-3xl rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-16 text-white relative inline-block mx-auto"
                >
                    <span className="relative z-10">Mis Habilidades</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 opacity-50 blur-sm"></span>
                </motion.h2>

                <div className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-semibold mb-6 text-center text-green-400"
                    >
                        Frontend
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {renderSkillCards(frontendSkills)}
                    </div>
                </div>

                <div className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-semibold mb-6 text-center text-green-400"
                    >
                        Backend
                    </motion.h3>
                    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {renderSkillCards(backendSkills)}
                    </div>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-semibold mb-6 text-center text-green-400"
                    >
                        Herramientas
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {renderSkillCards(toolsSkills)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;