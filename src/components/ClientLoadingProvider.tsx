'use client'

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingScreen from './LoadingScreen';

export default function ClientLoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Mostrar pantalla de carga solo en la carga inicial
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Reducir a 300ms para una experiencia más rápida
      
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]); // Añadir isLoading como dependencia

  // Para cambios de ruta, usar un enfoque más rápido
  useEffect(() => {
    if (!isLoading) {
      setIsNavigating(true);
      // Tiempo muy corto para transiciones entre páginas
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {isNavigating && (
        <div className="fixed top-0 left-0 w-full h-1 bg-black z-50">
          <div className="h-full bg-green-400 animate-[loading_0.5s_ease-in-out_infinite]"></div>
        </div>
      )}
      {children}
    </>
  );
}