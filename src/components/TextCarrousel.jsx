import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TextCarrousel = () => {
  const app = useRef(null);

  useGSAP(
    () => {
      gsap
        .to(".marquee_part", {
          xPercent: -100,
          repeat: -1,
          duration: 12,
          ease: "linear",
        })
        .totalProgress(0.5);
    },
    { scope: app }
  );
  return (
    <div ref={app}>
      {" "}
      <section className="marquee">
        <div className="marquee_inner">
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>
          <div className="marquee_part"><img className="videoTape" src="videoTapeFilm.png" alt="" /></div>         
        </div>
      </section>
    </div>
  );
};

export default TextCarrousel;