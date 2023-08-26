import React from "react";
import Title from "../layouts/Title";
import { GiMilkCarton, GiArtificialIntelligence } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { AiTwotoneSetting } from "react-icons/ai";
import Card from "./Card";
import { IoLeafOutline } from "react-icons/io5";
import { FaSliders } from "react-icons/fa6";

function Features() {
  const icons = [
    <GiMilkCarton />,
    <SiHappycow />,
    <GiArtificialIntelligence />,
    <AiTwotoneSetting />,
    <FaSliders />,
    <IoLeafOutline />,
  ];

  const iconColors = [
    "#f5f0ef",
    "#b75d34cc",
    "#327f95",
    "#105d3d",
    "#9C27B0",
    "#8BC34A",
  ];

  return (
    <section
      id="features"
      className="w-full py-30 border-b-[1px] border-b-black"
    >
      <Title des="Atividades envolvidas" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Qualidade do leite"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text of the printing and typesetting industry. "
          icons={[icons[0]]}
          iconColors={[iconColors[0]]}
        />
        <Card
          title="Inseminação em vacas leiteiras"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text  "
          icons={[icons[1]]}
          iconColors={[iconColors[1]]}
        />
        <Card
          title="Inteligência Artificial"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text  "
          icons={[icons[2]]}
          iconColors={[iconColors[2]]}
        />
        <Card
          title="Engenharia"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text  "
          icons={[icons[3]]}
          iconColors={[iconColors[3]]}
        />
        <Card
          title="Teste"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text  "
          icons={[icons[4]]}
          iconColors={[iconColors[4]]}
        />
        <Card
          title="Sustentabilidade"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. is simply dummy text  "
          icons={[icons[5]]}
          iconColors={[iconColors[5]]}
        />
      </div>
    </section>
  );
}

export default Features;
