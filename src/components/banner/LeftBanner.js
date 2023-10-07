import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Grupo de Pesquisa", "e", "Extensão."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
 
  <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">BEM VINDO!</h4>
        <h2 className="text-4xl font-bold text-white">
          SOMOS O <span className="text-designColor capitalize">PROJETO KAMBY</span>
          <span> {text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#253683"
          />
        </h2> 
           
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Iniciado em 2015, o programa Kamby tem como principal objetivo
            melhorar a produção leiteira na região de Tupã, tanto em quesitos
            quantidade quanto qualitativos do leite produzido, por meio da
            difusão do conhecimento e troca de experiências entre o seu
            público-alvo.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>);
};
export default LeftBanner;
