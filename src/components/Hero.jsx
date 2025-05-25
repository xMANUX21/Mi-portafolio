import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero({ onEnter }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onEnter]);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white font-orbitron cursor-pointer"
      onClick={onEnter}
    >
      <ParticlesBackground />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold glitch">Manuel Cubillos</h1>
        <p className="mt-4 text-lg md:text-2xl text-cyan-400">Backend Developer | Cyberpunk vibes</p>
        <p className="mt-8 text-sm uppercase tracking-widest text-gray-400 animate-pulse">Press ENTER or click to start</p>
      </motion.div>
    </section>
  );
}
