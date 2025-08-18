import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Eventos Deportivos",
    description: "Energía y sabor para acompañar la pasión del deporte con menús diseñados para cada ocasión.",
    icon: "🏋🏽",
  },
  {
    title: "Corporativos & Sociales",
    description: "Elegancia y profesionalismo para reuniones de trabajo, celebraciones y eventos especiales.",
    icon: "🏢",
  },
  {
    title: "Opciones Vegetarianas",
    description: "Deliciosas alternativas vegetarianas y opciones sin TACC para todos los gustos y necesidades.",
    icon: "🥗",
  },
  {
    title: "Servicio Personalizado",
    description: "Atención dedicada y menús adaptados a las preferencias y requerimientos de cada cliente.",
    icon: "👨‍🍳",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-blue mb-4">Nuestros Servicios</h2>
          <p className="font-sans text-lg text-navy-blue/70 max-w-2xl mx-auto">
            Especializados en crear experiencias gastronómicas únicas para cada tipo de evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-navy-blue hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-neutral-gray/30"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-serif text-xl text-navy-blue group-hover:text-fire-red transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-navy-blue/70 text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
