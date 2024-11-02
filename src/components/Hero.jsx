import '../index.css'; 
import { motion } from 'framer-motion';
import fondoHd from '/src/assets/fondohd.jpg';

function Hero() {
  // Texto que se va a animar
  const nombre = "SERGI REGANY"; // Nombre completo
  const descripcion = "DESARROLLADOR WEB";

  // Variantes para animar las letras del nombre
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Deletreo más rápido
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -200 }, // Empieza por encima de la vista
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 400, damping: 25 } // Efecto de caída con rebote suave
    }
  };

  // Variantes para animar la descripción
  const descripcionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: nombre.length * 0.15, duration: 1.0 } // Aparece más rápido
    }
  };

  return (
    <div 
      id='inicio' 
      className=" relative h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${fondoHd})` }}
    >
      {/* Gradiente de Difuminado Ajustado */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" style={{ background: 'linear-gradient(to bottom, transparent 60%, black 100%)' }}></div>
      
      {/* Overlay para oscurecer */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className=" relative flex items-center justify-center h-full">
        <div className="p-12 md:text-center">
          
          {/* Animación del Nombre */}
          <motion.h1 
            className="text-7xl font-bold mb-4 leading-none text-white tracking-widest"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nombre.split("").map((letra, index) => (
              <motion.span key={index}  variants={letterVariants}>
                {letra}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animación del Rol después del nombre */}
          <motion.p
            className="text-[1.375rem] text-4xl tracking-[0.6rem] md:tracking-[1.2rem] mb-8 text-white"
            variants={descripcionVariants}
            initial="hidden"
            animate="visible"
          >
            {descripcion}
          </motion.p>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
