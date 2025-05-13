'use client'

import { useState, useEffect, ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingScreen from './LoadingScreen';
import { Suspense } from 'react';

interface ClientLoadingProviderProps {
  children: ReactNode;
}

// Componente separado para usar useSearchParams
function NavigationStateHandler({ onNavigate, isLoading }: { onNavigate: (value: boolean) => void, isLoading: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isLoading) {
      onNavigate(true);
      // Reducir aún más el tiempo de transición entre páginas
      const timer = setTimeout(() => {
        onNavigate(false);
      }, 50); // Reducido de 100ms a 50ms
      
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isLoading, onNavigate]);

  return null;
}

export default function ClientLoadingProvider({ children }: ClientLoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 200); // Reducido de 300ms a 200ms
      
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {isNavigating && (
        <div className="fixed top-0 left-0 w-full h-1 bg-black z-50">
          <div className="h-full bg-green-400 animate-[loading_0.3s_ease-in-out_infinite]"></div>
        </div>
      )}
      <Suspense fallback={null}>
        <NavigationStateHandler onNavigate={setIsNavigating} isLoading={isLoading} />
      </Suspense>
      {children}
    </>
  );
}