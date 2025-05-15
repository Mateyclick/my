// tailwind.config.js (o como se llame tu archivo de config)
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { 
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: { 
        // --- COLORES ACTUALIZADOS --- 
        primary: "#75AADB",   // Celeste Uruguay (Sin cambios) 
        secondary: "#0072BB", // Azul Francia (ÚNICO CAMBIO AQUÍ, antes #A0D2EB) 
        // --------------------------- 
        accent: "#e8c468",    // Mantenemos accent (amarillo/dorado) 
        highlight: "#f4a462", // Mantenemos highlight (naranja claro) 
        dark: "#292c33",      // Mantenemos dark (gris oscuro) 
        // Colores HSL para Shadcn/ui (estos se definen en CSS, no aquí directamente) 
        border: "hsl(var(--border))", 
        input: "hsl(var(--input))", 
        ring: "hsl(var(--ring))", 
        background: "hsl(var(--background))", 
        foreground: "hsl(var(--foreground))", 
        // Podrías añadir aquí los colores de Shadcn/ui si quieres usarlos con clases de Tailwind 
        // shadcn_primary: "hsl(var(--primary))",  
        // shadcn_secondary: "hsl(var(--secondary))",  
        // ...etc 
      }, 
      animation: { // Mantenemos animaciones 
        "slide-in-left": "slideInLeft 1s ease-out", 
        "slide-in-right": "slideInRight 1s ease-out", 
        "fade-in": "fadeIn 1s ease-out", 
      }, 
      keyframes: { // Mantenemos keyframes 
        slideInLeft: { 
          "0%": { transform: "translateX(-100%)", opacity: "0" }, 
          "100%": { transform: "translateX(0)", opacity: "1" }, 
        }, 
        slideInRight: { 
          "0%": { transform: "translateX(100%)", opacity: "0" }, 
          "100%": { transform: "translateX(0)", opacity: "1" }, 
        }, 
        fadeIn: { 
          "0%": { opacity: "0" }, 
          "100%": { opacity: "1" }, 
        }, 
      }, 
    }, 
  }, 
  plugins: [require("tailwindcss-animate")], 
} satisfies Config;