import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Siga-nos nas redes sociais!
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>

          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
