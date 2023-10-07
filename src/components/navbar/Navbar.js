import React, { useState } from "react";
import { logo } from "../../assets/index"; //retorna o logo
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-48 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img
          src={logo}
          className="object-fill mx-auto h-32 lg:h-45 w-45"
          alt="logo"
        />{" "}
        {/* Adjust image size for different screen sizes */}
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
          {" "}
          {/* Use md instead of mdl for medium screens */}
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-bold text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
              onClick={()=> setShowMenu(false)}
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
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide ">
            <div className="flex flex-col gap-8 py-2 relative">
              <img
                src={logo}
                className="object-fill mx-auto h-32 lg:h-45 w-45 max-w-full"
                alt="logo"
              />
              <ul className="flex flex-col gap-6">
                {navLinksdata.map((item) => (
                  <li  key={item._id} onClick={()=>setShowMenu(false)} 
                  className="text-base font-bold text-white tracking-wide cursor-pointer hover:text-designColor duration-300">
                    <Link activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
