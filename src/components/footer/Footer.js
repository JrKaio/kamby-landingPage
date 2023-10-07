import React from "react";
import { logo } from "../../assets/index";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="absolute inset-x-0 w-full mx-auto  border-t-[1px] border-t-gray-600">
      <div className="bg-bodyColor flex flex-col md:flex-row sm:gap-8 justify-around py-8 items-center">
        <div>
          <img
            src={logo}
            className="object-fill mx-auto h-20 w-29"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <span>Desenvolvido por Kaio Júnior</span>
          <div className="flex flex-row justify-center gap-3 text-2xl ">
            <a className="hover:text-sky-700" href="https://github.com/JrKaio">
              <AiFillGithub />
            </a>

            <a className="hover:text-sky-700" href="https://www.linkedin.com/in/kaio-junior-45477719b/?originalSubdomain=br">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] flex justify-center">
        <span>Copyright © 2023. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
