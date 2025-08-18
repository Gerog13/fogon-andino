"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "María González",
    role: "Organizadora de Eventos Corporativos",
    content:
      "Fogón Andino superó todas nuestras expectativas. La calidad de la comida y la atención al detalle fueron excepcionales.",
    avatar: "/professional-woman-smiling-headshot.png",
  },
  {
    name: "Carlos Mendoza",
    role: "Director Deportivo",
    content:
      "Para nuestros eventos deportivos, siempre confiamos en Fogón Andino. Su servicio es impecable y la comida deliciosa.",
    avatar: "/professional-man-smiling-headshot.png",
  },
  {
    name: "Ana Rodríguez",
    role: "Coordinadora de Bodas",
    content:
      "Trabajar con Fogón Andino es un placer. Su profesionalismo y creatividad hacen que cada evento sea memorable.",
    avatar: "/elegant-woman-smiling-headshot.png",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-light-beige">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="font-sans text-lg text-navy-blue/70">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="mb-6">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-neutral-gray"
              />
            </div>

            <blockquote className="font-sans text-lg md:text-xl text-navy-blue/80 italic mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div>
              <h4 className="font-serif text-xl font-bold text-navy-blue">{testimonials[currentTestimonial].name}</h4>
              <p className="font-sans text-navy-blue/60">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-fire-red" : "bg-neutral-gray hover:bg-navy-blue/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
