import { motion } from 'framer-motion';

const ExperienceEducation = () => {
  // Variantes para la animación
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='trayectoria' className="bg-black text-white py-20 px-6">
      {/* Container for Experience and Education sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Experience Section */}
        <div>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial="hidden" 
            animate="visible" 
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent"> 🛠 Trayectoria Laboral</span>
          </motion.h2>
          <motion.ul 
            className="space-y-4"
            initial="hidden" 
            whileInView="visible" 
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            viewport={{ once: false }} // Permitir animaciones cada vez que está en vista
          >
            {/* Experience Item */}
            <motion.li 
              className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-purple-400" 
              variants={itemVariants}
            >
              <p className="text-sm text-purple-800">2022 - Actual</p>
              <h3 className="text-xl font-semibold">Técnico en Informática </h3>
              <p>Trebojocs</p>
            </motion.li>
            <motion.li 
              className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-purple-400" 
              variants={itemVariants}
            >
              <p className="text-sm text-purple-800">05/2022 - 09/2022</p>
              <h3 className="text-xl font-semibold">370h Prácticas Front-End Developer</h3>
              <p>Batista10</p>
            </motion.li>
            <motion.li 
              className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-purple-400" 
              variants={itemVariants}
            >
              <p className="text-sm text-purple-800">2016 - 2022</p>
              <h3 className="text-xl font-semibold">Mozo Almacén</h3>
              <p>Comerco</p>
            </motion.li>
          </motion.ul>
        </div>

        {/* Education Section */}
        <div>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial="hidden" 
            animate="visible" 
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">🎓 Estudios</span>
          </motion.h2>
          <motion.ul 
            className="space-y-4"
            initial="hidden" 
            whileInView="visible" 
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            viewport={{ once: false }} // Permitir animaciones cada vez que está en vista
          >
            {/* Education Item */}
            <motion.li 
              className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-purple-400" 
              variants={itemVariants}
            >
              <p className="text-sm text-purple-800">2022 - Cursando</p>
              <h3 className="text-xl font-semibold">Ingeniería Informática</h3>
              <p>Universidad Oberta de Cataluña - Online</p>
            </motion.li>
            <motion.li 
              className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-purple-400" 
              variants={itemVariants}
            >
              <p className="text-sm text-purple-800">2022</p>
              <h3 className="text-xl font-semibold">Open Bootcamp Front-End ReactJS</h3>
              <p>Online</p>
            </motion.li>
            <motion.li 
              className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-purple-400" 
              variants={itemVariants}
            >
              <p className="text-sm text-purple-800">2020 - 2022</p>
              <h3 className="text-xl font-semibold ">Técnico Superior en Desarrollo App Web</h3>
              <p>Ilerna FP - Online</p>
            </motion.li>
          </motion.ul>
        </div>
        
      </div>
    </div>
  );
};

export default ExperienceEducation;
