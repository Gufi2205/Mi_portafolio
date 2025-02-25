// src/app/page.jsx
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Elementos de fondo globales */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-green-500/10 blur-3xl rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1/4 h-1/4 bg-green-400/5 blur-3xl rounded-full"></div>
      </div>

      {/* Sección de Encabezado */}
      <Header />

      {/* Secciones con contenedores consistentes */}
      <section id="sobre-mi" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-0 relative z-10">
          <About />
        </div>
      </section>

      <section id="habilidades" className="relative py-20 overflow-hidden bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-0 relative z-10">
          <Skills />
        </div>
      </section>

      <section id="proyectos" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-0 relative z-10">
          <Projects />
        </div>
      </section>

      <section id="contacto" className="relative py-20 overflow-hidden bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-0 relative z-10">
          <Contact />
        </div>
      </section>

      {/* Pie de página */}
      <Footer />
    </main>
  );
}