import React, { useState } from "react";
import {
  ClipboardIcon,
  CheckIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutMe() {
  const [copied, setCopied] = useState(false);
  const email = "manuelxd53@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="text-white px-4 text-center space-y-8 max-w-4xl mx-auto">
      {/* FOTO + REDES */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/me/yotas.jpeg" // foto mia
          alt="Manuel Cubillos"
          className="w-32 h-32 rounded-full border-4 border-cyber-yellow object-cover"
        />
        <div className="flex gap-4 text-2xl text-cyber-yellow">
          <a
            href="https://github.com/xMANUX21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-pink transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-cubillos/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-pink transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* NOMBRE Y LEMA */}
      <div>
        <h2 className="text-4xl font-bold text-cyber-yellow">MANUEL CUBILLOS</h2>
        <p className="text-lg text-cyber-pink mt-2">Me gusta implementar soluciones reales a punta de código</p>
      </div>

      {/* CORREO + ICONOS */}
      <div className="flex justify-center items-center gap-2 text-cyber-pink text-sm">
        <span>{email}</span>
        <button onClick={handleCopy} title="Copiar correo">
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-400" />
          ) : (
            <ClipboardIcon className="h-5 w-5 hover:text-white transition" />
          )}
        </button>
        <a href={`mailto:${email}`} title="Enviar correo">
          <EnvelopeIcon className="h-5 w-5 hover:text-white transition" />
        </a>
      </div>

      {/* SECCIÓN DE DESCRIPCIÓN */}
      <div className="text-left space-y-6">
        {/* acerca de mi */}
        <div>
          <h3 className="text-xl font-semibold text-cyber-yellow mb-1">Sobre mí</h3>
          <p className="text-gray-300">
            Soy un desarrollador backend junior apasionado por resolver problemas reales con soluciones prácticas. Me
            gusta trabajar en equipo, liderar iniciativas técnicas y aprender constantemente. Disfruto
            automatizando procesos y optimizando sistemas.
          </p>
        </div>
          <div className="mt-4">
        <a
          href="https://drive.google.com/file/d/1GYgQ_yo0EJHXO14aQ83HHYI_uCjs8DBp/view?usp=drive_link" // URL CV
          target="_blank"
           rel="noopener noreferrer"
           className="inline-block px-4 py-2 text-sm font-medium border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black rounded-full transition"
          >
             Ver CV
           </a>
          </div>

        {/* ROLES Y HABILIDADES BLANDAS */}
        <div>
          <h3 className="text-xl font-semibold text-cyber-yellow mb-1">Roles desempeñados</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Desarrollador Backend</li>
    
            <li>Facilitador de talleres</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyber-yellow mb-1">Habilidades blandas</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Comunicación efectiva</li>
            <li>Resolución de conflictos</li>
            <li>Trabajo colaborativo</li>
            <li>Aprendizaje autónomo</li>
          </ul>
        </div>

        {/* EDUCACIÓN */}
        <div>
          <h3 className="text-xl font-semibold text-cyber-yellow mb-1 flex items-center gap-2">
            <AcademicCapIcon className="h-5 w-5" />
            Educación
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Técnico en desarrollo de software – Campuslands (2025)</li>
            <li>Ingeniería en sistemas – Universidad EAN (en curso)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
