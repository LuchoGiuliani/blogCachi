import React from "react";

function GridVideo() {
  return (
    <div className="main bg-[rgb(15, 10, 10)]">
      <div className="main_grid  ">
        <div className="grid_link">
          <img
            className="grid_image"
            src="./EL_CORTE.jpg"
            alt="Imagen El Corte"
          />
          <span className="hover_text">
            El Corte <br /> <h2 className="text-center font-thin">2018</h2>
          </span>
        </div>
        <div className="grid_link">
          <img
            className="grid_image"
            src="./SALON_ROJO.jpg"
            alt=" Imagen Salon rojo"
          />
          <span className="hover_text">
            Salón Rojo <br /> <h2 className="text-center font-thin">2023</h2>
          </span>
        </div>
        <div className="grid_link">
          <img
            className="grid_image"
            src="./CORPORE.jpg"
            alt="Imagen Corpore"
          />
          <span className="hover_text">
            Corpórea <br /> <h2 className="text-center font-thin">2024</h2>
          </span>
        </div>
        <div className="grid_link">
          <img className="grid_image" src="./PAJARO.jpg" alt=" Imagen Pajaro" />
          <span className="hover_text text-center">
            {" "}
            Pájaro de Hierro <br />{" "}
            <h2 className="text-center font-thin">Postproducción</h2>
          </span>
        </div>
        <div className="grid_link">
          <img className="grid_image" src="./NOVENA.png" alt=" Imagen Novena" />
          <span className="hover_text">
            Novena <br /> <h2 className="text-center font-thin">2013</h2>
          </span>
        </div>
        <div className="grid_link">
          <img
            className="grid_image"
            src="./MEMORIA.jpg"
            alt=" Imagen Memoria"
          />
          <span className="hover_text text-center">
            Memoria de un atardecer <br />{" "}
            <h2 className="text-center font-thin">2022</h2>
          </span>
        </div>
        <div className="grid_link">
          <img
            className="grid_image"
            src="./ECDISIS.png"
            alt="Imagen Ecdisis"
          />
          <span className="hover_text text-center">
            Ecdisis Corpórea <br />{" "}
            <h2 className="text-center font-thin">2022</h2>
          </span>
        </div>
        <div className="grid_link">
          <img
            className="grid_image"
            src="./COMPLEJO.jpg"
            alt=" Imagen Complejo"
          />
          <span className="hover_text text-center">
            Complejo de algo <br />{" "}
            <h2 className="text-center font-thin">2023</h2>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GridVideo;
