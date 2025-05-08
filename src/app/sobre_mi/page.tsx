"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Importación dinámica con carga perezosa
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="flex justify-center items-center h-64">
    <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
})

export default function SobreMiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <About />
      </Suspense>
    </div>
  )
}