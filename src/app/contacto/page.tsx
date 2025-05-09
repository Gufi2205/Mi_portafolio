'use client'

import { Suspense } from 'react';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Contact />
      </Suspense>
    </div>
  );
}