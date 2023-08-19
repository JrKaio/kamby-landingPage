import React from "react";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-[800px] pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div>
        <div>
          <h4 className="text-lg font-normal">BEM VINDO!</h4>
          <h1 className="text-6x1 font-bold text-white">
            Olá, somos o {""}
            <span className="text-designColor capitalize">
              Grupo de Projeto e Extensão Kamby
            </span>
          </h1>
          <h2>
            a <span></span>
          </h2>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Banner;
