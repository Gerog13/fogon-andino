import Image from "next/image";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-navy-blue text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/fogon-andino-logo.png"
                alt="Fogón Andino Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h3 className="font-serif text-2xl font-bold">Fogón Andino</h3>
            </div>
            <p className="font-sans text-white/80 leading-relaxed text-sm">
              Catering con alma mendocina para eventos únicos e inolvidables.
              Llevamos el calor del fogón y la fuerza de la montaña a tu evento.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg font-bold mb-6 text-white">
              Navegación
            </h4>
            <nav className="space-y-3">
              <a
                href="#hero"
                className="font-sans text-white/70 hover:text-white duration-300 block text-sm hover:translate-x-1 transform transition-transform"
              >
                Inicio
              </a>
              <a
                href="#services"
                className="font-sans text-white/70 hover:text-white duration-300 block text-sm hover:translate-x-1 transform transition-transform"
              >
                Servicios
              </a>
              <a
                href="#values"
                className="font-sans text-white/70 hover:text-white duration-300 block text-sm hover:translate-x-1 transform transition-transform"
              >
                Valores
              </a>
              <a
                href="#contact"
                className="font-sans text-white/70 hover:text-white duration-300 block text-sm hover:translate-x-1 transform transition-transform"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact and social */}
          <div className="md:col-span-1">
            <h4 className="font-serif text-lg font-bold mb-6 text-white">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:fogonandinomza@gmail.com"
                className="flex items-center gap-3 hover:translate-x-1 transform transition-transform duration-300"
              >
                <div className="w-8 h-8 bg-fire-red/20 rounded-full flex items-center justify-center">
                  <MdEmail className="w-4 h-4 text-fire-red" />
                </div>
                <div>
                  <p className="font-sans text-white/70 text-sm">Email</p>
                  <p className="font-sans text-white font-medium hover:text-light-beige transition-colors duration-300">
                    fogonandinomza@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/fgnandino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:translate-x-1 transform transition-transform duration-300"
              >
                <div className="w-8 h-8 bg-fire-red/20 rounded-full flex items-center justify-center">
                  <FaInstagram className="w-4 h-4 text-fire-red" />
                </div>
                <div>
                  <p className="font-sans text-white/70 text-sm">Instagram</p>
                  <p className="font-sans text-white font-medium hover:text-light-beige transition-colors duration-300">
                    @fgnandino
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-fire-red/20 rounded-full flex items-center justify-center">
                  <MdLocationOn className="w-4 h-4 text-fire-red" />
                </div>
                <div>
                  <p className="font-sans text-white/70 text-sm">Ubicación</p>
                  <p className="font-sans text-white font-medium">
                    Mendoza, Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-white/50 text-sm">
            © {new Date().getFullYear()} Fogón Andino. Todos los derechos
            reservados. Mendoza, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
