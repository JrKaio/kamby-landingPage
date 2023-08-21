import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

function Projects() {
  return (
    <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title
        
        des="Projetos desenvolvidos atualmente"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectCard
        title="Projeto 1"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectOne}
      />
      <ProjectCard
        title="Projeto 2"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectTwo}
      />
      <ProjectCard
        title="Projeto 3"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectThree}
      />
      
      
    </div>
  </section>
  );
}

export default Projects;
