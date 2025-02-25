'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAlertCircle } from 'react-icons/fi';

const Modal = ({ isOpen, onClose, projectName }) => {
    return (
        <AnimatePresence>
            {isOpen && (
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
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors"
                        >
                            <FiX className="w-6 h-6" />
                        </button>

                        <div className="text-center relative z-10">
                            <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                <FiAlertCircle className="w-12 h-12 text-green-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-100 mb-2">Proyecto no disponible</h3>
                            <p className="text-gray-400 mb-6">
                                El proyecto "{projectName}" no se encuentra disponible en este momento.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;