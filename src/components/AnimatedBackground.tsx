"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// Definición de tipo para una partícula
interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas para que ocupe toda la pantalla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Partículas para el efecto de fondo
    const particles: Particle[] = []
    const particleCount = 80

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(0, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 50) + 50}, ${Math.random() * 0.5 + 0.1})`,
        update() {
          this.x += this.speedX
          this.y += this.speedY

          if (this.x > canvas.width) this.x = 0
          else if (this.x < 0) this.x = canvas.width

          if (this.y > canvas.height) this.y = 0
          else if (this.y < 0) this.y = canvas.height
        },
        draw(ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        },
      }

      particles.push(particle)
    }

    // Dibujar líneas entre partículas cercanas
    function drawLines(ctx: CanvasRenderingContext2D) {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 50) + 50}, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Crear gradientes de fondo
    function createGradients(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      // Gradiente principal
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      )

      gradient.addColorStop(0, "rgba(0, 20, 20, 1)")
      gradient.addColorStop(0.5, "rgba(0, 10, 15, 0.8)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Añadir algunos puntos de luz
      const numSpots = 3
      for (let i = 0; i < numSpots; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, Math.random() * 300 + 100)

        spotGradient.addColorStop(0, "rgba(0, 255, 100, 0.05)")
        spotGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = spotGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }

    // Función de animación
    function animate() {
      if (!ctx || !canvas) return

      // Limpiar canvas con un fondo semitransparente para crear efecto de estela
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar gradientes de fondo
      createGradients(ctx, canvas)

      // Actualizar y dibujar partículas
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)
      }

      // Dibujar líneas entre partículas
      drawLines(ctx)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Elementos de fondo adicionales para mejorar el efecto */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/80 opacity-50"></div>

      {/* Efecto de viñeta para dar profundidad */}
      <div className="absolute inset-0 bg-radial-gradient"></div>

      {/* Elementos neón estáticos */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1 h-40 bg-green-500 opacity-30 blur-md"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          height: ["10vh", "20vh", "10vh"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-2 h-60 bg-green-400 opacity-20 blur-md"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          width: ["1px", "3px", "1px"],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/5 w-3 h-3 rounded-full bg-green-300 opacity-40 blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default AnimatedBackground;

