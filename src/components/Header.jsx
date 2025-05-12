'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);
    const router = useRouter();

    // Definir menuItems antes de usarlo en useEffect
    const menuItems = [
        { id: 'sobre_mi', icon: 'user', tooltip: 'Sobre Mí' },
        { id: 'habilidades', icon: 'code', tooltip: 'Habilidades' },
        { id: 'proyectos', icon: 'folder', tooltip: 'Proyectos' },
        { id: 'contacto', icon: 'envelope', tooltip: 'Contacto' }
    ];

    // Precargar todas las páginas al cargar el componente
    useEffect(() => {
        menuItems.forEach(item => {
            router.prefetch(`/${item.id}`);
        });
    }, [router, menuItems]);

    const handleNavigation = (item) => {
        setIsMenuOpen(false);
        // Ya no es necesario prefetch aquí porque lo hacemos al cargar
        router.push(`/${item}`);
    };

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'user':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                );
            case 'code':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                );
            case 'folder':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                );
            case 'envelope':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <header className="fixed inset-x-0 top-0 flex flex-col items-end justify-center pt-4 z-50 pointer-events-none">
            <div className="container mx-auto px-4 pointer-events-auto">
                {/* Menú hamburguesa para móviles y menú desplegable */}
                <div className="md:hidden flex justify-between items-center mb-1">
                    {/* Menú móvil desplegable */}
                    {isMenuOpen && (
                        <ul className="flex flex-row justify-start w-max px-3 py-1 rounded-full bg-black/80 border border-green-900/30 shadow-[0_0_10px_3px_rgba(0,255,127,0.3)]">
                            {menuItems.map((item) => (
                                <li key={item.id} className="flex flex-col items-center mx-1.5">
                                    <button
                                        onClick={() => handleNavigation(item.id)}
                                        className="p-1 rounded-full bg-black/50 hover:bg-green-900/30 transition-colors flex items-center justify-center"
                                    >
                                        <span className="text-white hover:text-green-300 transition-colors">
                                            {renderIcon(item.icon)}
                                        </span>
                                    </button>
                                    <span className="text-xs mt-0.5 text-green-400">{item.tooltip}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    
                    {/* Botón hamburguesa o X */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-green-400 hover:text-green-300 focus:outline-none transition-colors bg-black/80 p-1.5 rounded-full border border-green-900/30"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
                
                <nav className="hidden md:block">
                    <ul className="flex justify-center space-x-4 bg-black/80 w-max max-w-xs mx-auto px-4 py-1 rounded-full border border-green-900/30 shadow-[0_0_10px_3px_rgba(0,255,127,0.3)]">
                        {menuItems.map((item) => (
                            <li key={item.id} className="relative">
                                <button
                                    onClick={() => handleNavigation(item.id)}
                                    onMouseEnter={() => setActiveTooltip(item.id)}
                                    onMouseLeave={() => setActiveTooltip(null)}
                                    className="relative group p-1 rounded-full bg-black/50 hover:bg-green-900/30 transition-colors flex items-center justify-center"
                                >
                                    <span className="text-white group-hover:text-green-400 transition-colors">
                                        {renderIcon(item.icon)}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full rounded-full border border-transparent group-hover:border-green-400/30 transition-all duration-300"></span>
                                </button>
                                {activeTooltip === item.id && (
                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-0.5 rounded-lg whitespace-nowrap border border-green-900">
                                        {item.tooltip}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;