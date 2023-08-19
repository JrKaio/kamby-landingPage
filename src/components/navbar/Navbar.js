import React from "react";
import { logo } from "../../assets/index"; //retorna o logo
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="mx-auto flex justify-between items-center font-titleFont">
      <div>
        <img src={logo} className="object-fill h-50 w-80" alt="logo"></img>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-white-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
