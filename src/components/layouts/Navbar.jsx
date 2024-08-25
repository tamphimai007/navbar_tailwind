// rafce
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import imgUser from "../../assets/user.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthen, setIsAuthen] = useState(false);

  const hdlToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const logIn = () => {
    setIsAuthen(true);
  };
  const logOut = () => {
    setIsAuthen(false);
  };

  return (
    <header className="bg-black text-white">
      <nav className="flex items-center justify-between px-12 h-16 lg:gap-6">
        <a href="#" className="text-2xl font-bold border-2 px-2 py-1">
          LOGO
        </a>

        <div
          className={`absolute left-0 ${
            isOpen ? "top-16" : "-top-full"
          } bg-black
                w-full flex flex-col items-center gap-6 py-2 font-bold text-lg
                lg:static lg:flex-row lg:justify-between
            `}
        >
          <ul
            className="flex flex-col  items-center gap-6
                lg:flex-row
                "
          >
            <li
              className="hover:text-green-500
                    hover:scale-110 hover:-translate-y-1 duration-200
                    "
            >
              Home
            </li>
            <li
              className="hover:text-green-500
                    hover:scale-110 hover:-translate-y-1 duration-200
                    "
            >
              About
            </li>
            <li
              className="hover:text-green-500
                    hover:scale-110 hover:-translate-y-1 duration-200
                    "
            >
              Contract
            </li>
          </ul>

          <div
            className="flex flex-col items-center gap-6
                lg:flex-row
                "
          >
            {isAuthen ? (
              <div className="relative group">
                <button
                  className="flex items-center justify-between gap-3
                    hover:text-green-500 hover:scale-110 hover:-translate-y-1 hover:duration-200
                    p-2 
                    "
                >
                  <img src={imgUser} className="w-8 h-8" />
                  Profile
                  <IoIosArrowDown />
                </button>
                <ul className="absolute bg-black rounded-lg w-full hidden group-hover:block">
                  <li
                    className="hover:text-green-500 py-2 px-3 cursor-pointer
                hover:scale-110 hover:-translate-y-1 hover:duration-200"
                  >
                    Username
                  </li>
                  <li
                    className="hover:text-green-500 py-2 px-3 cursor-pointer 
                hover:scale-110 hover:-translate-y-1 hover:duration-200"
                  >
                    Setting
                  </li>
                  <li
                    onClick={logOut}
                    className="hover:text-green-500 py-2 px-3 cursor-pointer
                hover:scale-110 hover:-translate-y-1 hover:duration-200"
                  >
                    LogOut
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <button
                  className="hover:text-green-500
                    hover:scale-110 hover:-translate-y-1 duration-200
                    "
                >
                  Register
                </button>
                <button
                  onClick={logIn}
                  className="border-2 px-2 py-1 rounded-lg
                    hover:text-green-500
                    hover:scale-110 hover:-translate-y-1 duration-200
                    "
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>

        <div className="lg:hidden hover:scale-110 hover:-translate-y-1 duration-200">
          <FaBars onClick={hdlToggle} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
