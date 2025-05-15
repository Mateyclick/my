// src/components/ParticleBackground.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react"; 
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Mantenemos loadFull

const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined): Promise<void> => {
      // console.log("Particles loaded:", container);
    },
    []
  );

  // --- Configuración con Más y Mayores Partículas ---
  const options: ISourceOptions = useMemo(
    () => ({
      // background eliminado para transparencia
      fpsLimit: 60, 
      interactivity: {
        events: {
          onClick: { 
            enable: true,
            mode: "push", 
          },
          onHover: { 
            enable: true,
            mode: "grab", 
          },
        },
        modes: {
          push: {
            quantity: 3, // Ajustamos cantidad al push
          },
          grab: {
            distance: 150, // Aumentamos un poco la distancia del grab
            links: { 
              opacity: 0.5, // Opacidad del enlace del grab
              color: "#1e3b71" 
            }
          },
          repulse: { 
            distance: 100, 
            duration: 0.4,
          },
           bubble: { 
             distance: 200,
             size: 30, 
             duration: 2,
             opacity: 0.8,
           },
        },
      },
      particles: {
        color: {
          value: "#1e3b71", // Mantenemos COLOR PRIMARIO
        },
        links: { 
          color: "#a1b9e0", // Aclaramos un poco más los links entre partículas
          distance: 130, // Reducimos distancia de links para compensar densidad
          enable: true,
          opacity: 0.3, // Reducimos opacidad de links por densidad
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { 
            default: "bounce", 
          },
          random: false,
          speed: 1.2, // Mantenemos velocidad moderada
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Reducimos área para MÁS densidad
          },
          value: 100, // Aumentamos número base de partículas SIGNIFICATIVAMENTE
        },
        opacity: {
          value: 0.5, // Reducimos opacidad general ligeramente por cantidad/tamaño
        },
        shape: {
          type: "circle", 
        },
        size: {
          value: { min: 2, max: 6 }, // Aumentamos tamaño MÍNIMO y MÁXIMO
        },
      },
      detectRetina: true, 
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>; 
};

export default ParticleBackground;