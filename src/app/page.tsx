// src/app/page.jsx
import Header from "@/components/Header"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Sección de Encabezado */}
      <Header />

      {/* Secciones con contenedores consistentes */}
      <section id="sobre-mi" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-0 relative z-10">
          <About />
        </div>
      </section>

      <section id="habilidades" className="relative py-20 overflow-hidden backdrop-blur-sm">
        <div className="container mx-auto px-0 relative z-10">
          <Skills />
        </div>
      </section>

      <section id="proyectos" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-0 relative z-10">
          <Projects />
        </div>
      </section>

      <section id="contacto" className="relative py-20 overflow-hidden backdrop-blur-sm">
        <div className="container mx-auto px-0 relative z-10">
          <Contact />
        </div>
      </section>

      {/* Pie de página */}
      <Footer />
    </main>
  )
}

