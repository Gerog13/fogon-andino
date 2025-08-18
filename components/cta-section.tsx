"use client"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-20 px-4 bg-fire-red text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para crear un evento inolvidable?
        </h2>
        <p className="font-sans text-lg mb-8 opacity-90">
          Nuestro equipo está listo para hacer de tu evento algo extraordinario
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="cursor-pointer bg-navy-blue font-semibold border-transparent hover:bg-navy-blue/90"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}
