// src/components/FullScreenSection.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FullScreenSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FullScreenSection = ({ icon: Icon, title, description, index }: FullScreenSectionProps) => {
  // Animaciones de scroll y variantes (sin cambios respecto a la versión anterior)
  const { scrollYProgress } = useScroll({
    target: undefined, 
    offset: ["start end", "end start"] 
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]); 
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]); 
  const y = useTransform(scrollYProgress, [0, 1], ["5vh", "-5vh"]); 

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    } 
  };

  return (
    // La sección raíz ya no necesita z-index propio, lo maneja el div wrapper en Index.tsx
    // Tampoco necesita snap-start propio.
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden" // Quitamos snap-start
      style={{ opacity }} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      variants={sectionVariants}
    >
      {/* Fondo ya eliminado */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5" /> */}
      
      {/* Contenido principal */}
      {/* El z-10 aquí es Opcional, ya que el padre wrapper tiene z-10 */}
      <motion.div 
        className="container mx-auto px-4 relative" // z-10 opcional aquí
        style={{ scale, y }} 
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-8"
            variants={itemVariants}
          >
            <Icon className="w-16 h-16 text-secondary" /> 
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 leading-relaxed" 
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FullScreenSection;