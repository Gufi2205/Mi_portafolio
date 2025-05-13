"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Importación dinámica con carga perezosa
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="flex justify-center items-center h-screen w-full">
    <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
})

export default function SobreMiPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden flex items-center justify-center w-full pb-16 md:pb-0">
      <div className="mx-auto">
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen w-full">
            <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <About />
        </Suspense>
      </div>
    </main>
  )
}