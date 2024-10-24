import { navLinks } from "../constants";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.png"; // Asegúrate de tener el logo en la carpeta assets

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4 text-center">
        {/* Logo grande y centrado */}
        <div className="mb-8">
          <img src={logo} alt="Logo" className="w-40 h-auto mx-auto" />
        </div>

        {/* Menú de navegación centrado */}
        <div className="flex justify-center space-x-8 mb-8">
        <a
            href="#inicio"
            className="text-sm border-b-2 border-transparent hover:border-purple-600 transition-all"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="text-sm border-b-2 border-transparent hover:border-purple-600 transition-all"
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className="text-sm border-b-2 border-transparent hover:border-purple-600 transition-all"
          >
            Proyectos
          </a>
          <a
            href="#trayectoria"
            className="text-sm border-b-2 border-transparent hover:border-purple-600 transition-all"
          >
            Trayectoria
          </a>
        </div>

        {/* Texto del footer */}
        <div className="text-sm text-purple-600">
          <p>© 2024 All Rights Reserved by Sergi Regany</p>
          
        </div>

        {/* Botón para volver arriba (a la derecha) */}
        <div className="absolute right-4 bottom-4">
          <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
