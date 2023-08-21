import React from "react";
import Title from "../layouts/Title";
import { GiMilkCarton, GiArtificialIntelligence } from "react-icons/gi"
import { SiHappycow} from "react-icons/si"
import { AiTwotoneSetting} from "react-icons/ai";

import Card from "./Card";
import {IoLeafOutline } from "react-icons/io5";
import { FaSliders } from "react-icons/fa6";
function Features() {
  return (
    <section id="features" className="w-full py-30 border-b-[1px] border-b-black"
    >
      <Title  des= "Atividades envolvidas"/>
      <div className="grid grid-cols-3 gap-20" >
       <Card title="Qualidade do leite" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text of the printing and typesetting industry. " icon={<GiMilkCarton />}/>
       <Card title="Inseminação em vacas leiteiras" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text  " icon={<SiHappycow/>}/>
       <Card title="Inteligência Artificial" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text of the printing and typesetting industry. " icon={<GiArtificialIntelligence/>}/>
       <Card title="Engenharia" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text of the printing and typesetting industry." icon={<AiTwotoneSetting/>}/>
       <Card title="Teste1" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text of the printing and typesetting industry. " icon={<FaSliders/>}/>
       <Card title="Sustentabilidade" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text of the printing and typesetting industry." icon={<IoLeafOutline/>}/>


      </div>
    </section>
  );
}

export default Features;
