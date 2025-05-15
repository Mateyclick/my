// src/components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el icono de WhatsApp

interface WhatsAppButtonProps {
  phoneNumber: string; // El número de teléfono completo con código de país (ej: "59899123456")
  message?: string;     // Mensaje precargado opcional
  position?: 'bottom-right' | 'bottom-left'; // Posición opcional (default: bottom-right)
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hola! Estoy interesado en sus servicios de diseño web.", // Mensaje por defecto
  position = 'bottom-right',
}) => {
  // Eliminar caracteres no numéricos del teléfono
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Codificar el mensaje para la URL
  const encodedMessage = encodeURIComponent(message);

  // Construir la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

  // Determinar clases de posición
  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  return (
    <a
      href={whatsappUrl}
      target="_blank" // Abrir en nueva pestaña
      rel="noopener noreferrer" // Buenas prácticas de seguridad
      aria-label="Contactar por WhatsApp" // Accesibilidad
      className={`
        ${positionClasses} 
        fixed z-50  // Asegura que esté sobre todo (incluso sobre partículas z-0 y contenido z-10)
        bg-[#25D366] // Color verde oficial de WhatsApp
        text-white 
        p-4        // Padding interno
        rounded-full 
        shadow-lg   // Sombra para destacar
        hover:bg-[#1DAE56] // Color al pasar el mouse
        hover:scale-110   // Efecto de escala al pasar el mouse
        focus:outline-none 
        focus:ring-2 
        focus:ring-green-400 
        focus:ring-offset-2
        transition-all duration-300 ease-in-out // Transición suave
      `}
    >
      <FaWhatsapp size={28} /> {/* Tamaño del icono */}
    </a>
  );
};

export default WhatsAppButton;