import React from "react";

 
function Header () {
  return (
    <div className="container mx-auto bg-blue-400" >
            <nav className="sm:hidden pt-3 pb-2">
                <ul className="flex justify-center gap-12">
                    <li className="hover:text-purple-500"><a href="#about">About</a></li>
                    <li className="hover:text-purple-500"><a href="#services">Background</a></li>
                    <li className="hover:text-purple-500"><a href="#portfolio">Portfolio</a></li>
                    <li className="hover:text-purple-500"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav className="justify-between items-center h-10 p-10 hidden sm:flex sm:flex-col">
                                              
                <ul className="flex gap-7">
                    <li className="hover:text-gray-500"><a href="#about">About</a></li>
                    <li className="hover:text-gray-500"><a href="#services">Background</a></li>
                    <li className="hover:text-gray-500"><a href="#portfolio">Portfolio</a></li>
                    <li className="hover:text-gray-500"><a href="#contact">Contact</a></li>
                </ul>

            </nav>
    </div>
)}
export default Header