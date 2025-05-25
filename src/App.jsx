import React, { useState } from "react";
import { motion } from "framer-motion";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ParticlesBackground from "./components/ParticlesBackground";
import Certifications from "./components/Certifications";
import Navbar from "./components/Navbar"; // Nuevo

import "@fontsource/orbitron";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative bg-[#0a0a0f] min-h-screen text-cyber-pink overflow-hidden scroll-smooth">
      {!started ? (
        <Hero onEnter={() => setStarted(true)} />
      ) : (
        <>
        
          <ParticlesBackground />
         
          <Navbar /> {/* Índice de navegación */}
          <br></br>
        <br />
        <br />
          <main className="relative z-10 container mx-auto px-4 py-8 space-y-20">

            {/* SOBRE MÍ */}
            <section id="about">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <AboutMe />
              </motion.div>
            </section>

              {/* HABILIDADES */}
            <section id="skills">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <Skills />
              </motion.div>
            </section>

            {/* CERTIFICACIONES */}
            <section id="certifications">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <Certifications />
              </motion.div>
            </section>

            {/* PROYECTOS */}
            <section id="projects">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Projects />
              </motion.div>
            </section>

          

          </main>

          {/* FOOTER */}
          <section id="contact">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <Footer />
            </motion.div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
