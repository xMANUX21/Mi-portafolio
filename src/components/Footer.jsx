import React from "react";

function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 text-white text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} Manuel Cubillos. Todos los derechos reservados.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/xMANUX21" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/manuel-cubillos/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:manuelxd53@gmail.com" className="hover:underline">
          Correo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
