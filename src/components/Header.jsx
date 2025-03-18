'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-black/95 text-white py-4 z-50 backdrop-blur-sm shadow-[0_0_10px_3px_rgba(0,255,127,0.3)]">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="relative">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                        JULIO PEREZ
                    </h1>
                    <div className="absolute -left-2 -right-2 -bottom-2 -top-2 bg-green-500 opacity-10 blur-xl rounded-full"></div>
                </div>

                {/* Menú hamburguesa para móviles */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-green-400 hover:text-green-300 focus:outline-none transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {['sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/#${item}`}
                                    className="relative group py-2 px-1 block"
                                >
                                    <span className="text-white group-hover:text-green-400 transition-colors relative z-10">
                                        {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 opacity-50 blur-sm group-hover:w-full transition-all duration-500 delay-100"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Menú móvil desplegable */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 border-t border-green-900 px-4 py-4">
                    <ul className="flex flex-col space-y-4">
                        {['sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((item) => (
                            <li key={item} className="border-b border-green-900 pb-2">
                                <a
                                    href={`#${item}`}
                                    className="block py-1 text-white hover:text-green-300 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;