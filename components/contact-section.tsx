"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/emailjs-config";

// Esquema de validación con Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos").optional(),
  eventType: z.string().min(1, "Selecciona un tipo de evento"),
  guestCount: z.string().min(1, "Selecciona la cantidad de invitados"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  date: z.date().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [date, setDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const watchedEventType = watch("eventType");
  const watchedGuestCount = watch("guestCount");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Configuración de EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone || "No proporcionado",
        event_type: data.eventType,
        guest_count: data.guestCount,
        event_date: data.date ? format(data.date, "PPP", { locale: es }) : "No especificada",
        message: data.message,
        to_email: "fogonandinomza@gmail.com",
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setSubmitStatus("success");
      reset();
      setDate(undefined);
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error enviando email:", error);
      setSubmitStatus("error");
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setValue("date", selectedDate);
    }
  };

  const isFormValid = isValid && isDirty && !isSubmitting;

  return (
    <section id="contact" className="py-20 px-4 mx-auto bg-light-beige">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            Solicitá tu Presupuesto
          </h2>
          <p className="font-sans text-lg text-navy-blue/70 max-w-2xl mx-auto">
            Contanos sobre tu evento y te responderemos en 24 horas con una
            propuesta personalizada.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-medium">
              ¡Gracias! Tu solicitud ha sido enviada. Te responderemos en 24 horas.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-800 font-medium">
              Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.
            </p>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-navy-blue mb-6">
            Formulario de Contacto
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">
                  Nombre completo *
                </label>
                <Input
                  {...register("name")}
                  placeholder="Tu nombre completo"
                  className={`border-gray-200 focus:border-fire-red focus:ring-fire-red/20 ${
                    errors.name ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">
                  Email *
                </label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="tu@email.com"
                  className={`border-gray-200 focus:border-fire-red focus:ring-fire-red/20 ${
                    errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Event Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">
                  Teléfono
                </label>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="+54 9 261 XXX XXXX"
                  className={`border-gray-200 focus:border-fire-red focus:ring-fire-red/20 ${
                    errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">
                  Tipo de evento *
                </label>
                <Select
                  value={watchedEventType}
                  onValueChange={(value) => setValue("eventType", value)}
                >
                  <SelectTrigger className={`w-full border-gray-200 focus:border-fire-red focus:ring-fire-red/20 ${
                    errors.eventType ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}>
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="competencia">Competencia</SelectItem>
                    <SelectItem value="casamiento">Casamiento</SelectItem>
                    <SelectItem value="cumpleanos">Cumpleaños</SelectItem>
                    <SelectItem value="empresarial">Evento empresarial</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.eventType && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.eventType.message}
                  </p>
                )}
              </div>
            </div>

            {/* Date and Guest Count Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">
                  Fecha del evento
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-gray-200 hover:bg-gray-50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date
                        ? format(date, "PPP", { locale: es })
                        : "Selecciona una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-blue mb-2">
                  Cantidad de invitados *
                </label>
                <Select
                  value={watchedGuestCount}
                  onValueChange={(value) => setValue("guestCount", value)}
                >
                  <SelectTrigger className={`w-full border-gray-200 focus:border-fire-red focus:ring-fire-red/20 ${
                    errors.guestCount ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}>
                    <SelectValue placeholder="Selecciona cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1 - 20 personas</SelectItem>
                    <SelectItem value="21-50">21 - 50 personas</SelectItem>
                    <SelectItem value="51-100">51 - 100 personas</SelectItem>
                    <SelectItem value="101-200">101 - 200 personas</SelectItem>
                    <SelectItem value="200+">Más de 200 personas</SelectItem>
                  </SelectContent>
                </Select>
                {errors.guestCount && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.guestCount.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-navy-blue mb-2">
                Cuéntanos más sobre tu evento *
              </label>
              <Textarea
                {...register("message")}
                placeholder="Describe tu evento, preferencias de comida, ubicación, etc."
                rows={4}
                className={`border-gray-200 focus:border-fire-red focus:ring-fire-red/20 resize-none ${
                  errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`w-full font-medium py-3 text-sm rounded-lg transition-all duration-300 ${
                isFormValid
                  ? "bg-fire-red hover:bg-fire-red/90 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </div>
              ) : (
                "Enviar Solicitud"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
