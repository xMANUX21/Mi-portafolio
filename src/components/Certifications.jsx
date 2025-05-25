import React from "react";
import Slider from "react-slick";

const certifications = [
  {
    title: "Programming in Python",
   
    link: "https://www.coursera.org/account/accomplishments/verify/G3BUC3A04HBT",
  },
  {
    title: "Python para Data Science",
    link: "https://app.aluracursos.com/certificate/6f177b50-dee3-458a-a7ac-d8900e7345ed?lang",
  },
  // aqui se van agregando
];

export default function CertificationsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="certifications" className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-cyber-yellow mb-6">
        Certificaciones
      </h2>
      <Slider {...settings}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border-2 border-green-400 p-6 rounded-xl flex flex-col items-center bg-[#0a0a0f] shadow-lg"
          >
            <img
             
              alt={cert.title}
              className="w-64 h-auto mb-4 rounded-md"
            />
            <h3 className="text-cyber-pink text-lg font-semibold mb-2">
             
            </h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-4 py-2 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition rounded"
            >
              Ver credencial
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}
