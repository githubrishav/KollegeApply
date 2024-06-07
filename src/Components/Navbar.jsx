import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "./../../pictures/search.png";
import logo from "./../../pictures/logo.png";
import arrow from "./../../pictures/arrow.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ fontFamily: "Roboto, sans-serif" }}
      className="w-full shadow-lg sticky z-10 bg-white"
    >
      <div className="flex justify-between items-center p-4 md:px-24 text-gray-700">
        <Link to="/">
          <img className="w-24" src={logo} alt="img" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/university" className="text-base  flex gap-2 items-center">
            University <img className="w-[1.3rem] hidden md:block" src={arrow} alt="" />
          </Link>
          <Link to="/colleges" className="text-base  flex gap-2 items-center">
            Colleges <img className="w-[1.3rem] hidden md:block" src={arrow} alt="" />
          </Link>
          <Link to="/exams" className="text-base  flex gap-2 items-center">
            Exams <img className="w-[1.3rem] hidden md:block" src={arrow} alt="" />
          </Link>
          <Link to="/courses" className="text-base  flex gap-2 items-center">
            Courses <img className="w-[1.3rem] hidden md:block" src={arrow} alt="" />
          </Link>
          <Link to="/news" className="text-base  flex gap-2 items-center">
            News <img className="w-[1.3rem] hidden md:block" src={arrow} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <img className="w-4" src={search} alt="img" />
          <input
            className="outline-none w-96 py-2 px-1 text-gray-500"
            type="text"
            placeholder="Search for Colleges, Exams, Courses and more.."
          />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Link to="/university" className="text-base">
            University
          </Link>
          <Link to="/colleges" className="text-base">
            Colleges
          </Link>
          <Link to="/exams" className="text-base">
            Exams
          </Link>
          <Link to="/courses" className="text-base">
            Courses
          </Link>
          <Link to="/news" className="text-base">
            News
          </Link>
          <div className="flex items-center gap-2">
            <img className="w-4" src={search} alt="img" />
            <input
              className="outline-none w-full py-2 px-1 text-gray-500"
              type="text"
              placeholder="Search for Colleges, Exams, Courses and more.."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
