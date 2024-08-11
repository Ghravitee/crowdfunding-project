import { useState } from "react";
import logo from "../images/logo.svg";
import iconOpen from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close-menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="py-6 px-4 lg:px-20 xl:px-40">
      <nav className="hidden lg:flex justify-between items-center">
        <img
          src={logo}
          alt="This is the logo of the landing page called crowdfund"
        />
        <ul className="flex gap-8 items-center commissioner-500">
          <li>
            <a href="#" className="text-white text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* mobile view */}
      <nav className="lg:hidden flex items-center justify-between relative">
        <div>
          <img
            src={logo}
            alt="logo of the website named snap"
            width={140}
            height={140}
          />
        </div>
        <div>
          <img
            className="cursor-pointer"
            src={isOpen ? iconClose : iconOpen}
            alt="This is the icon that opens the mobile navigation"
            width={isOpen ? 20 : 25}
            height={25}
            onClick={toggleNavigation}
          />
        </div>

        {isOpen && (
          <div className="absolute lg:hidden bg-white top-[3rem] z-50 py-6 w-full mx-auto rounded-xl">
            <ul className="flex flex-col gap-4 items-start commissioner-500">
              <li className="border-b border-b-Dark-Gray/10 w-full pb-4">
                <a href="#" className="text-black text-lg pl-4">
                  About
                </a>
              </li>
              <li className="border-b border-b-Dark-Gray/10 w-full pb-4">
                <a href="#" className="text-black text-lg pl-4 ">
                  Discover
                </a>
              </li>
              <li className="">
                <a href="#" className="text-black text-lg pl-4">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
