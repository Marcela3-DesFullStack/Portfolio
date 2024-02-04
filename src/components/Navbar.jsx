import { useState } from "react";
import menuIcon from "../assets/img/menuIcon.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto bg-customCoolgray text-customCobalt font-semibold">
      <nav className="sm:hidden pt-3 pb-2">
        <ul className="flex justify-center gap-12">
          <li className="hover:text-customStone"><a href="#about">About</a></li>
          <li className="hover:text-customStone"><a href="#services">Background</a></li>
          <li className="hover:text-customStone"><a href="#portfolio">Portfolio</a></li>
          <li className="hover:text-customStone"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav className="sm:flex sm:justify-between items-center h-5 p-6 hidden text-sm relative">
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="sm: absolute left-[6%] top-[5%] w-9 h-9 cursor-pointer"
          onClick={handleMenu}
        />
        {isMenuOpen && (
            <div className=" grid grid-cols-2 gap-4 pl-12">
                <ul>
                    <li className="hover:text-customStone"><a href="/#about">About</a></li>
                    <li className="hover:text-customStone"><a href="#services">Services</a></li>
                </ul>
                <ul>
                    <li className="hover:text-customStone"><a href="#portfolio">Portfolio</a></li>
                    <li className="hover:text-customStone"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
