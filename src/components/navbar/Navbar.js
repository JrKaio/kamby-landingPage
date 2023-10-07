import React, {useState} from "react";
import { logo } from "../../assets/index"; //retorna o logo
import{ FiMenu } from "react-icons/fi";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  return (
    <div className="w-full h-48 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
    <div>
      <img src={logo} className="object-fill mx-auto h-32 lg:h-45 w-45" alt="logo" /> {/* Adjust image size for different screen sizes */}
    </div>
    <div>
      <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10"> {/* Use md instead of mdl for medium screens */}
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-bold text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
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
      <span className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"><FiMenu/></span>
    </div>
  </div>
  ); }  

export default Navbar;
