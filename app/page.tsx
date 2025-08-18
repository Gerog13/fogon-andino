import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ValuesSection } from "@/components/values-section";
// import { GallerySection } from "@/components/gallery-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      {/* <GallerySection /> */}
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
