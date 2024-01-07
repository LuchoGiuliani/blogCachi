import React, { useEffect, useRef } from "react";
import { preloadImages } from "./../../utils"; // Asegúrate de ajustar la ruta correcta a tu archivo de utilidades
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";

const NewHero = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const text = new SplitType(".cursor-title");
    SplitType.revert(text);

    gsap.to(".char", {
      rotate: 360, // Rotación aleatoria
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
     // Añade el nuevo Tween para animar el ancho del borde de izquierda a derecha
  gsap.to(".cursor-title", {
    borderBottomWidth: "1px", // Establece el ancho inicial del borde
    duration: 1, // Ajusta la duración según tu preferencia
    ease: "power2.out", // Ajusta la curva de animación según tu preferencia
  });

  ScrollTrigger.create({
   
    trigger: ".main",
    start: "top top",
    end: "bottom middle",
    onUpdate: (self) => {
      gsap.to(".cursor-title", {
        opacity: 1 - self.progress,
        borderBottomWidth: `${1 + 16 * self.progress}px`, // Anima el ancho del borde de izquierda a derecha
      });
      console.log(self.progress);
    },
  });
    
  }, []);

  return (
    <div>
      <main className="main h-screen flex justify-center ">
        <div className="">
          <h1 className=" border-b text-[#faf2f2] opacity-75 text-lg cursor-title z-[9999] fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4  sm:text-8xl ">
            CARLA GIULIANI
          </h1>
        </div>
        <video
          className="w-[100vw] object-cover"
          muted
          autoPlay
          loop
          src="reel.mp4"
        ></video>
      </main>
    </div>
  );
};

export default NewHero;
