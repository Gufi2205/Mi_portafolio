// src/app/page.jsx
import Header from "@/components/Header"
import About from "@/components/About"
// Eliminar estas importaciones no utilizadas
// import Skills from "@/components/Skills"
// import Projects from "@/components/Projects"
// import Contact from "@/components/Contact"
// import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Sección de Encabezado */}
      <Header />

      {/* Sección de Acerca de */}
      <About />

    </main>
  )
}

