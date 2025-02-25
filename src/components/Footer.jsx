'use client'
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-300 py-12 relative overflow-hidden">
            {/* Borde neón superior */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
            
            {/* Efectos de borde neón */}
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-t-3xl pointer-events-none">
                <div className="absolute -top-[2px] -left-[2px] -right-[2px] h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm"></div>
                <div className="absolute -bottom-[2px] -left-[2px] -right-[2px] h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm"></div>
                <div className="absolute -left-[2px] -top-[2px] -bottom-[2px] w-[2px] bg-gradient-to-b from-transparent via-green-400 to-transparent blur-sm"></div>
                <div className="absolute -right-[2px] -top-[2px] -bottom-[2px] w-[2px] bg-gradient-to-b from-transparent via-green-400 to-transparent blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-gray-100 mb-2 relative">
                            Julio Felipe Perez Yañez
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-green-400/50 blur-xs"></span>
                        </h2>
                        <p className="text-green-400">Desarrollador Web</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mb-6 md:mb-0">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-green-500/10 rounded-lg blur-sm"></div>
                            <div className="relative">
                                <h3 className="text-lg font-semibold mb-3 text-green-400">Enlaces</h3>
                                <ul className="space-y-2">
                                    {['sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={`#${link}`} 
                                                className="text-gray-400 hover:text-green-400 transition-colors flex items-center group"
                                            >
                                                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">▹</span>
                                                {link.split('-').join(' ')}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-green-500/10 rounded-lg blur-sm"></div>
                            <div className="relative">
                                <h3 className="text-lg font-semibold mb-3 text-green-400">Social</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a 
                                            href="https://github.com/Gufi2205" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-gray-400 hover:text-green-400 transition-colors flex items-center group"
                                        >
                                            <FaGithub className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="www.linkedin.com/in/julio-pérez-b687261a0" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-gray-400 hover:text-green-400 transition-colors flex items-center group"
                                        >
                                            <FaLinkedin className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-500/30 mt-8 pt-8 text-center md:text-left relative">
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
                    <p className="text-gray-400">
                        &copy; {currentYear} Julio Perez. Todos los derechos reservados.
                        <span className="mx-2 text-green-400">|</span>
                        <span className="hover:text-green-400 cursor-pointer transition-colors">
                            Política de Privacidad
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;