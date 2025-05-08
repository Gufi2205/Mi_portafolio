'use client'

import { Suspense } from 'react';
import ContactForm from '@/components/Contact';

// Componente que utiliza useSearchParams
function ContactContent() {
  return <ContactForm />;
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
      
      <Suspense fallback={<div className="text-center">Cargando formulario...</div>}>
        <ContactContent />
      </Suspense>
    </div>
  );
}