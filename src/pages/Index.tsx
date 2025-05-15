// src/pages/Index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import FullScreenSection from '../components/FullScreenSection'; 
import PricingSection from '../components/PricingSection';   
import ParticleBackground from '../components/ParticleBackground'; 
import WhatsAppButton from '../components/WhatsAppButton'; // <-- 1. Importar el botón
import {
  Server, Globe, Smartphone, PenTool, CreditCard,
} from 'lucide-react';

const Index = () => {
  // Array de beneficios (sin cambios)
  const benefits = [ 
    {
      icon: Server,
      title: "Hosting incluido por 1 año",
      description: "Tu web alojada en servidores rápidos y estables, sin costos extra por 12 meses.",
    },
    {
      icon: Globe,
      title: "Dominio .online gratis por 1 año",
      description: "Tu nombre en internet con una de las extensiones más buscadas y modernas.",
    },
    {
      icon: Smartphone,
      title: "Diseño 100% responsive",
      description: "Tu sitio se adapta perfectamente a celulares, tablets y computadoras.",
    },
    {
      icon: PenTool,
      title: "Logo profesional incluido",
      description: "Creamos un logo simple, moderno y funcional para tu marca.",
    },
    {
      icon: CreditCard,
      title: "Pago contra entrega",
      description: "Pagás una vez que tu sitio está terminado.",
    },
  ];

  // Variantes Hero (sin cambios)
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
    }
  };
  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- 2. DEFINE TU NÚMERO Y MENSAJE AQUÍ ---
  const miNumeroWhatsApp = "59899880083"; // Reemplaza con tu número completo (código país + número)
  const miMensajeWhatsApp = "¡Hola! Vi tu página y me gustaría consultar sobre el diseño web."; 
  // --------------------------------------


  return (
    // Quitamos bg-white, el fondo lo dará el body o las partículas mismas
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll relative"> 
      
      {/* Contenedor Partículas con z-0 */}
      <div className="fixed inset-0 z-0"> 
        <ParticleBackground />
      </div>

      {/* Hero Section con z-10 */}
      <motion.section 
        // Añadimos relative y z-10 aquí
        className="min-h-screen flex items-center justify-center relative snap-start z-10" 
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Fondo del Hero ya eliminado */}
        {/* Contenedor del contenido del Hero */}
        <div className="container mx-auto text-center px-4"> {/* Quitamos z-10 de aquí, ya está en el padre section */}
          <motion.h1 
             variants={heroItemVariants}
             className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6"
           >
            Mate y  <span className="text-secondary">Click</span>
          </motion.h1>
          <motion.p 
             variants={heroItemVariants}
             className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8"
           >
            Transformamos tu visión en una experiencia digital única
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits Sections con z-10 */}
      {benefits.map((benefit, index) => (
         // Envolvemos FullScreenSection en un div que maneja el z-index y el snap
         <div key={index} className="relative z-10 snap-start"> 
           <FullScreenSection
             {...benefit}
             index={index}
           />
         </div>
      ))}

      {/* Pricing Section con z-10 */}
       <div className="relative z-10 snap-start"> {/* Envolvemos PricingSection */}
         <PricingSection /> 
       </div>

      {/* --- 3. Añadir el Botón de WhatsApp --- */}
      <WhatsAppButton 
        phoneNumber={miNumeroWhatsApp} 
        message={miMensajeWhatsApp}
        // position="bottom-left" // Descomenta si lo quieres a la izquierda
      />
      {/* ------------------------------------- */}
      
    </div>
  );
};

export default Index;