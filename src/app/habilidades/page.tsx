"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Importación dinámica con carga perezosa
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="flex justify-center items-center h-64">
    <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
})

export default function HabilidadesPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Skills />
      </Suspense>
    </main>
  )
}


