import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Diseño de Marca",
    description: "Creo experiencias de marca únicas que ayudan a las empresas a destacar.",
    dropdownText: "El Diseño de Marca consiste en crear una identidad única para tu negocio, que abarca el diseño del logotipo, los colores de la marca, la tipografía y otros elementos."
  },
  {
    number: "02",
    title: "Diseño UI/UX",
    description: "Diseño de interfaces de usuario intuitivas y atractivas para mejorar las experiencias de los usuarios.",
    dropdownText: "El diseño UI/UX garantiza que tus productos digitales sean fáciles de usar y proporcionen una experiencia fluida para tus usuarios."
  },
  {
    number: "03",
    title: "Diseño Web",
    description: "Desarrollo sitios web responsivos y atractivos, adaptados a tus necesidades.",
    dropdownText: "Me especializo en crear sitios web responsivos que se ven excelentes en cualquier dispositivo, garantizando una sólida presencia en línea."
  },
  {
    number: "04",
    title: "Diseño de Aplicaciones",
    description: "Desarrollo aplicaciones móviles funcionales y estéticamente agradables.",
    dropdownText: "Mis servicios de diseño de aplicaciones se centran en crear aplicaciones móviles intuitivas y fáciles de usar para iOS y Android."
  },
];

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Estado para gestionar la visibilidad
  const sectionRef = useRef(null); // Referencia a la sección

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Se activa cuando la sección es visible
        } else {
          setIsVisible(false); // Se puede restablecer a false si se desea
        }
      },
      { threshold: 0.1 } // Se activa cuando al menos el 10% es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id='servicios' 
      ref={sectionRef} // Añade la referencia aquí
      className="lg:py-20 sm:py-20 flex flex-col items-center justify-center bg-black text-white px-4"
    >
      {/* Título animado */}
      <motion.h2 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} 
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">Mis servicios de calidad</span>
      </motion.h2>
      
      {/* Descripción animada */}
      <motion.p 
        className="text-center mb-12 text-gray-400 max-w-lg"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Desarrollo sitios web personalizados y responsivos que garantizan una experiencia de usuario intuitiva y atractiva en todas las plataformas.
      </motion.p>

      <div className="w-full container">
        {services.map((service, index) => (
          <div key={index} className="mb-4">
            {/* Servicio animado */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} 
              transition={{ duration: 0.5, delay: isVisible ? index * 0.2 : 0 }} // Delay solo si es visible
              className={`flex justify-between items-start p-5 bg-black transition duration-300 
                          hover:bg-purple-700 cursor-pointer ${activeIndex === index ? 'bg-purple-700' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center w-full">
                <span className="text-purple-500 text-2xl font-bold mr-4">{service.number}</span>
                <h3 className="text-xl font-semibold transition duration-300 hover:text-white flex-1">{service.title}</h3>
                <p className="hidden md:block text-gray-400 max-w-md">{service.description}</p>
                <span className={`text-2xl ml-4 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : ''}`}>
                  ▸
                </span>
              </div>
            </motion.div>

            {index < services.length - 1 && <div className="border-t border-purple-500"></div>}

            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: activeIndex === index ? 1 : 0, height: activeIndex === index ? "auto" : 0 }} 
              transition={{ duration: 0.5 }} 
              className={`overflow-hidden transition-all ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <div className="bg-black text-gray-400 p-4 text-sm md:text-base">
                {service.dropdownText}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
