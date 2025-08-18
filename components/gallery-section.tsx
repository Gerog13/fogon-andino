"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/elegantly-plated-sorrentinos.png",
    title: "Sorrentinos Mendocinos",
    description: "Pasta fresca rellena con sabores regionales",
  },
  {
    src: "/gourmet-asado-catering.png",
    title: "Asado Gourmet",
    description: "Carnes premium a la parrilla con acompañamientos",
  },
  {
    src: "/elegant-event-table.png",
    title: "Mesa de Evento",
    description: "Montaje elegante para ocasiones especiales",
  },
  {
    src: "/gourmet-vegetarian.png",
    title: "Opciones Vegetarianas",
    description: "Platos vegetarianos llenos de sabor y color",
  },
]

export function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-blue mb-4">Nuestra Inspiración Visual</h2>
          <p className="font-sans text-lg text-navy-blue/70 max-w-2xl mx-auto">
            Cada plato cuenta una historia, cada evento es una experiencia única
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].title}
              className="w-full h-96 md:h-[500px] object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-light-beige/80 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-navy-blue mb-2">
                  {galleryImages[currentImage].title}
                </h3>
                <p className="font-sans text-navy-blue/80">{galleryImages[currentImage].description}</p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-navy-blue/20 hover:border-navy-blue"
          >
            ←
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-navy-blue/20 hover:border-navy-blue"
          >
            →
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? "bg-fire-red" : "bg-neutral-gray hover:bg-navy-blue/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
