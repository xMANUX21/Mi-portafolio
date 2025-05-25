import React from "react";

const navItems = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificaciones" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f] border-b border-cyber-glow shadow-lg backdrop-blur bg-opacity-60">
      <div className="container mx-auto px-4 py-3 flex justify-center space-x-6">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-cyber-pink hover:text-cyber-yellow font-medium tracking-wide transition"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
