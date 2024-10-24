import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const initialProjects = [
  {
    title: 'Project 1',
    description: 'Desarrollo ',
    image: 'https://via.placeholder.com/400x400?text=Creative+Design',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 2',
    description: 'Desarrollo',
    image: 'https://via.placeholder.com/400x400?text=Creative+Design',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 3',
    description: 'Desarrollo',
    image: 'https://via.placeholder.com/400x400?text=Creative+Design',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 4',
    description: 'Mi Primer Portfolio',
    image: 'https://via.placeholder.com/400x400?text=Creative+Design',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 5',
    description: 'Description for project 5...',
    image: 'https://via.placeholder.com/400x400?text=Project+5',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 6',
    description: 'Description for project 6...',
    image: 'https://via.placeholder.com/400x400?text=Project+6',
    demoLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState(initialProjects);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [displayedProjects, setDisplayedProjects] = useState([]); // Proyectos que se mostrarán
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad

  const projectsRef = useRef(null); // Referencia para el contenedor de proyectos

  useEffect(() => {
    // Reiniciar proyectos mostrados al cargar la página
    setDisplayedProjects(projects.slice(0, visibleProjects));
  }, [projects, visibleProjects]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredProjects = initialProjects.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );

    setProjects(filteredProjects);
    setVisibleProjects(4); // Reiniciar el número de proyectos visibles al buscar

    // Desplazar la vista a la sección de proyectos
    if (filteredProjects.length > 0) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowMore = () => {
    const newVisibleCount = Math.min(visibleProjects + 1, projects.length);
    setVisibleProjects(newVisibleCount);
  };

  useEffect(() => {
    // Actualizar proyectos mostrados
    setDisplayedProjects(projects.slice(0, visibleProjects));
  }, [visibleProjects, projects]);

  // Manejar el scroll para detectar si el contenedor está visible
  useEffect(() => {
    const handleScroll = () => {
      const { top } = projectsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        setIsVisible(true); // Activar la visibilidad
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='proyectos' className="min-h-screen bg-custom-dark py-20">
      <div className="container mx-auto">
        {/* Título con animación */}
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">Mis Proyectos</span>
        </motion.h2>

        {/* Buscador */}
        <div className="relative mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Buscar..."
            className="w-full max-w-md px-4 py-2 rounded-full text-gray-900 mx-auto block"
          />
          <FaSearch className="absolute right-6 top-3 text-gray-900" />
        </div>

        {/* Galería de Proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" ref={projectsRef}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative group bg-gray-800 rounded-lg overflow-hidden ${isVisible ? 'animate' : 'opacity-0 scale-0'}`} // Clase para controlar la animación
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay por cada proyecto
            >
              {/* Imágenes cuadradas */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover aspect-square transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.demoLink}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> <span>Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2  hover:bg-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón "Mostrar más" */}
        {visibleProjects < projects.length && (
          <button
            onClick={handleShowMore}
            className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 mx-auto block"
          >
            Mostrar más
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
