import { useState } from "react";
import menuIcon from "../assets/img/menuIcon.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto bg-customCoolgray text-customCobalt font-semibold text-2xl">
      <nav className="sm:hidden pt-3 pb-2">
        <ul className="flex justify-center gap-12">
          <li className="hover:text-customStone"><a href="#about">About</a></li>
          <li className="hover:text-customStone"><a href="#skills">Skills</a></li>
          <li className="hover:text-customStone"><a href="#projects">Projects</a></li>
          <li className="hover:text-customStone"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav className="sm:flex sm:justify-between items-center h-4 p-6 hidden text-lg relative">
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="sm: absolute left-[6%] top-[5%] w-8 h-8 cursor-pointer"
          onClick={handleMenu}
        />
        {isMenuOpen && (
            <div className=" grid grid-cols-2 gap-4 pl-12">
                <ul>
                    <li className="hover:text-customStone"><a href="/#about">About</a></li>
                    <li className="hover:text-customStone"><a href="#skills">Skills</a></li>
                </ul>
                <ul>
                    <li className="hover:text-customStone"><a href="#projects">Projects</a></li>
                    <li className="hover:text-customStone"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;