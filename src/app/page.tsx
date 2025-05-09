
import Header from "@/components/Header"
import About from "@/components/About"


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
