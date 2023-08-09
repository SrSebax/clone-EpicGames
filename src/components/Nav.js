import React, { useState, useRef } from "react";
import Logo from "./../assets/Epic_Games_logo.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMenu(false);
    }, 200);
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMenuMouseLeave = () => {
    setShowMenu(false);
  };

  const handleListMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMenu(false);
    }, 200);
  };

  const handleLanguageMouseEnter = () => {
    setShowLanguageMenu(true);
  };

  const handleLanguageMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowLanguageMenu(false);
    }, 200);
  };

  const handleLanguageListMouseLeave = () => {
    setShowLanguageMenu(false);
  };

  const menuItems = [
    { title: "Tienda" },
    { title: "Noticias" },
    { title: "Preguntas Frecuentes" },
    { title: "Ayuda" },
    { title: "Unreal Engine" },
  ];

  const aboutMenuItems = [
    { title: "Compañía" },
    { title: "Epic Newroom" },
    { title: "Empleo" },
    { title: "Empleos" },
    { title: "Estudiantes" },
  ];

  const languageItems = [
    "العربية",
    "ENGLISH",
    "ESPAÑOL",
    "FRANÇAIS",
    "ITALIANO",
    "PORTUGUÊS",
    "日本語",
    "한국어",
    "POLSKI",
    "РУССКИЙ",
    "ไทย",
    "TÜRKÇE",
    "简体中文",
    "繁體中文",
  ];

  return (
    <nav className="w-full h-[50px] bg-primary flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Epic Games Logo" className="h-10 w-auto pl-2" />
        <div className="flex space-x-7">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                hoveredIndex === index ? "border-b-4 border-blue-600" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h1 className="title-nav">{item.title}</h1>
            </div>
          ))}
        </div>
        <div className="h-6 w-[1px] bg-gray-100"></div>
        <div
          className="flex items-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="title-nav focus:outline-none">
            Acerca de Epic Games
          </div>
          {showMenu && (
            <ul
              className="min-w-[180px] absolute top-full left-1/2 transform -translate-x-1/2 bg-primary mt-1 p-6 space-y-5 z-50"
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              onMouseLeaveCapture={handleListMouseLeave}
            >
              {aboutMenuItems.map((item, index) => (
                <li key={index}>
                  <h1 className="title-nav">{item.title}</h1>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className="flex items-center relative"
          onMouseEnter={handleLanguageMouseEnter}
          onMouseLeave={handleLanguageMouseLeave}
        >
          <AiOutlineGlobal className="text-gray-200 text-xl" />
          {showLanguageMenu && (
            <ul
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-primary p-6 space-y-5 z-50"
              onMouseEnter={handleLanguageMouseEnter}
              onMouseLeave={handleLanguageMouseLeave}
              onMouseLeaveCapture={handleLanguageListMouseLeave}
            >
              {languageItems.map((item, index) => (
                <li key={index} className="flex justify-center">
                  <h1 className="title-nav">{item}</h1>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="title-nav flex items-center">
          <BsPersonFillAdd className="text-gray-200 text-xl mr-3" />
          Iniciar Sesión
        </button>
        <div className="bg-blue-600 text-white p-4 uppercase text-xs cursor-pointer tracking-[0.1em] font-extrabold">
          Consigue Epic Games
        </div>
      </div>
    </nav>
  );
};

export default Nav;
