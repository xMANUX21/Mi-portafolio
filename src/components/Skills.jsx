import React from "react";

const skills = [
  { name: "JavaScript", image: "/skills/js.png" },
  { name: "Python", image: "/skills/piton.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "Node.js", image: "/skills/node.png" },
  { name: "MySQL", image: "/skills/mysql.png" },
  { name: "TailwindCSS", image: "/skills/tailwind.png" },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-4 bg-[#0a0a0f]">
      <h2 className="text-3xl font-bold text-center text-cyber-yellow mb-8">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#111] p-4 rounded-xl shadow-md hover:scale-105 transition"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-2 rounded-full"
            />
            <p className="text-white text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
