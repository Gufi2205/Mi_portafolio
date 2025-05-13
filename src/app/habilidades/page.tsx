"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Importación dinámica con carga perezosa
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="flex justify-center items-center h-24">
    <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
})

export default function HabilidadesPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden flex items-center justify-center w-full pb-16 md:pb-0">
      <div className="mx-auto">
        <Suspense fallback={
          <div className="flex justify-center items-center h-24">
            <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Skills />
        </Suspense>
      </div>
    </main>
  )
}


