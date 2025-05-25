import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Sistema Bancario",
    description: "Aplicación backend con Node.js nativo, con lógica de movimientos, pagos y conexión a MongoDB.",
    tech: ["Node.js", "MongoDB", "HTML"],
    image: "/images/bank.png", //public/images/
    link: "https://github.com/xMANUX21/banco-acme-mongodb",
  },
  {
    title: "Generador de Reportes",
    description: "Uso de Node.js para gestión ETL con múltiples archivos que generan reportes HTML desde MongoDB.",
    tech: ["Node.js", "Vanilla JS", "HTML"],
    image: "/images/reportesSchool.png",
    link: "https://github.com/xMANUX21/reportes-node",
  },
  {
    title: "Mi portafolio",
    description: "Portafolio web con mi información , mis habilidades técnicas y blandas, proyectos desarrollados y enlaces de contacto.",
    tech: ["Node.js", "React", "HTML","Tailwind","CSS"],
    image: "/images/portafolioFo.png",
    link: "https://github.com/xMANUX21/Mi-portafolio.git",
  },
  // aqui se agregan mas
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-cyber-bg border border-cyber-glow/40 rounded-xl p-6 shadow-neon/50 mt-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-cyber text-cyber-pink tracking-wide mb-6 drop-shadow-[0_0_6px_#ff00ffaa]">
        Proyectos
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-cyber-dark border border-cyber-green/30 rounded-lg p-4 hover:shadow-[0_0_12px_#00ff88aa] transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={`Imagen del proyecto ${project.title}`}
              className="w-full h-40 object-cover rounded mb-3 border border-cyber-green/20"
            />
            <h3 className="text-xl text-cyber-green font-semibold mb-2 tracking-wide">
              {project.title}
            </h3>
            <p className="text-cyber-blue text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-cyber-yellow mb-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-cyber-glow/10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyber-green underline hover:text-cyber-yellow transition"
            >
              Ver en GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* Botón para ver más proyectos */}
      <div className="text-center mt-8">
        <a
          href="https://github.com/xMANUX21/Proyectos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-sm font-medium text-cyber-yellow border border-cyber-yellow rounded hover:bg-cyber-yellow hover:text-cyber-dark transition"
        >
          Ver más proyectos
        </a>
      </div>
    </motion.section>
  );
}
