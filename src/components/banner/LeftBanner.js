import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Grupo de Pesquisa", "e", "Extensão."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full h-[800px] pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">BEM VINDO!</h4>
          <h1 className="text-4xl font-bold text-white">
            Olá, somos o {""}
            <span className="text-designColor capitalize">Projeto Kamby </span>
            <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="blue" />
          </h1>
          <p className="text-base font-bodyFont" leading-6 tracking-wide>
            Iniciado em 2015, o programa Kamby tem como principal objetivo
            melhorar a produção leiteira na região de Tupã, tanto em quesitos
            quantidade quanto qualitativos do leite produzido, por meio da
            difusão do conhecimento e troca de experiências entre o seu
            público-alvo.
          </p>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            SIGA-NOS NAS REDES SOCIAIS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebook />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};
export default LeftBanner;
