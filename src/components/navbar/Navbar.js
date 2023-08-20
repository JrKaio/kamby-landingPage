import React from "react";
import { logo } from "../../assets/index"; //retorna o logo
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="w-full h-48 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} className="object-fill  justify-between mx-auto h-32 w-45" alt="logo"></img>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-bold-600 text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
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
