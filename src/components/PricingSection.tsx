// src/components/PricingSection.tsx
import React from 'react';
import { motion } from 'framer-motion'; 

const PricingSection = () => {

  // Variantes (sin cambios)
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    } 
  };

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4" // Quitamos snap-start si ya no lo controla Index
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      variants={sectionVariants}
    >
      {/* Fondo ya eliminado */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5" /> */}
      
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative"> {/* Ajustado space-y */}       
        <motion.h2 
          // --- TAMAÑO REDUCIDO ---
          className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" 
          variants={itemVariants}
        >
          Precio Especial
        </motion.h2>
        
        <motion.div 
          className="flex flex-col items-center gap-3 md:gap-4" // Ajustado gap
          variants={itemVariants} 
        >
          <span 
             // --- TAMAÑO REDUCIDO ---
             className="text-2xl md:text-3xl line-through text-gray-500"
           >
            Antes: $4000
          </span>
          <span 
            // --- TAMAÑO REDUCIDO (Mayor reducción aquí) ---
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          > 
            Ahora: $3500
          </span>
          <p 
            // --- TAMAÑO REDUCIDO ---
            className="text-base md:text-lg text-accent font-medium mt-3 md:mt-4" // Ajustado margen y tamaño
          > 
            ¡Oferta por tiempo limitado!
          </p>
        </motion.div>

         {/* Botón opcional (sin cambios) */}
         {/* <motion.div variants={itemVariants}> ... </motion.div> */}

      </div>
    </motion.section>
  );
};

export default PricingSection;