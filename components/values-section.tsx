const values = [
  {
    title: "Calidad Gastronómica",
    description: "Ingredientes frescos y técnicas culinarias que resaltan los sabores auténticos de Mendoza.",
    icon: "🍽️",
  },
  {
    title: "Atención Personalizada",
    description: "Cada evento es único, por eso adaptamos nuestro servicio a tus necesidades específicas.",
    icon: "💎",
  },
  {
    title: "Ingredientes Regionales",
    description: "Valoramos los productos locales, apoyando a productores mendocinos y garantizando frescura.",
    icon: "🍇",
  },
  {
    title: "Confianza & Profesionalismo",
    description: "Años de experiencia nos respaldan para hacer de tu evento una experiencia memorable.",
    icon: "🤝",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-20 px-4 bg-light-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-blue mb-4">Lo que nos diferencia</h2>
          <p className="font-sans text-lg text-navy-blue/70 max-w-2xl mx-auto">
            Nuestros valores son la base de cada servicio que brindamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl group-hover:bg-fire-red group-hover:scale-110 transition-all duration-300">
                {value.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy-blue mb-3 group-hover:text-fire-red transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-sans text-navy-blue/70 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
