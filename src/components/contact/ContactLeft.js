import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";



const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg} 
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Oi</h3>
        <p className="text-lg font-normal text-gray-400">
          TESTE
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+550000-000</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">teste@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Nos Contate</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" >
 
          
          <span className="bannerIcon">
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
             </span>
          		
          </span>
          <span className="bannerIcon">
          <a href="https://www.instagram.com/kamby.unesp/">
              <FaInstagram />
            </a> 
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
