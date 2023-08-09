import React from "react";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { SiEpicgames, SiUnrealengine } from "react-icons/si";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary p-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4 pb-10 py-5">
            <button className="text-gray-300 hover:text-blue-epic transition duration-300">
              <FaFacebookSquare size={35} />
            </button>
            <button className="text-gray-300 hover:text-blue-epic transition duration-300">
              <FaTwitter size={35} />
            </button>
            <button className="text-gray-300 hover:text-blue-epic transition duration-300">
              <FaYoutube size={35} />
            </button>
          </div>
          <div className="ml-auto">
            <button
              className="flex text-gray-300 uppercase text-sm font-semibold tracking-widest"
              onClick={handleScrollToTop}
            >
              <AiOutlineArrowUp size={17} className="mr-2" />
              Volver al principio
            </button>
          </div>
        </div>

        <h4 className="pt-3 pb-2 text-gray-300 text-xs font-semibold mb-4 uppercase tracking-widest">
          Recursos
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[700px]">
          <div>
            <ul className="space-y-2">
              <li className="items-footer">
                <a href="#">Publicar en Epic Games</a>
              </li>
              <li className="items-footer">
                <a href="#">Empleo</a>
              </li>
              <li className="items-footer">
                <a href="#">Compañía</a>
              </li>
              <li className="items-footer">
                <a href="#">Política de contenido de fans</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="items-footer">
                <a href="#">Estado del servidor</a>
              </li>
              <li className="items-footer">
                <a href="#">Estudio de experiencias de usuarios</a>
              </li>
              <li className="items-footer">
                <a href="#">CLUF de la tienda</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="items-footer">
                <a href="#">Reglas de la comunidad</a>
              </li>
              <li className="items-footer">
                <a href="#">Servicios en línea</a>
              </li>
              <li className="items-footer">
                <a href="#">Epic Newsroom</a>
              </li>
            </ul>
          </div>
        </div>

        <h4 className="pt-10 pb-2 text-gray-300 text-xs font-semibold mb-4 uppercase tracking-widest">
          CREADO POR EPIC GAMES
        </h4>

        <div className="grid grid-cols-2 gap-4 w-[280px]">
          <div className="items-footer">
            <a href="#">Battle Breakers</a>
          </div>
          <div className="items-footer">
            <a href="#">Fall Guys</a>
          </div>
          <div className="items-footer">
            <a href="#">Fortnite</a>
          </div>
          <div className="items-footer">
            <a href="#">Infinity Blade</a>
          </div>
          <div className="items-footer">
            <a href="#">Robo Recall</a>
          </div>
          <div className="items-footer">
            <a href="#">Rocket League</a>
          </div>
          <div className="items-footer">
            <a href="#">Shadow Complex</a>
          </div>
          <div className="items-footer">
            <a href="#">Unreal Tournament</a>
          </div>
        </div>

        <div className="h-[2px] w-auto bg-stone-700 mt-[80px] mb-10"></div>

        <div className="w-[900px]">
          <div>
            <p className="text-xsm text-gray-300 w-auto">
              © 2023, Epic Games, Inc. Todos los derechos reservados. Epic, Epic
              Games, el logotipo de Epic Games, Fortnite, el logotipo de
              Fortnite, Unreal, Unreal Engine, el logotipo de Unreal Engine,
              Unreal Tournament y el logotipo de Unreal Tournament son marcas
              comerciales o marcas registradas de Epic Games, Inc. tanto en
              Estados Unidos de América como en el resto del mundo. Otras marcas
              o nombres de productos son marcas comerciales de sus respectivos
              propietarios.
            </p>
          </div>

          <div className="flex mt-4">
            <button className="items-footer mr-5">Términos de servicio</button>
            <button className="items-footer mr-5">
              Política de privacidad
            </button>
            <button className="items-footer mr-5">
              Política de reembolso de la tienda
            </button>
            <button className="items-footer">Seguridad de la cuenta</button>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-gray-300 hover:text-blue-epic transition duration-300 mx-5">
            <SiEpicgames size={35} />
          </button>
          <button className="text-gray-300 hover:text-blue-epic transition duration-300">
            <SiUnrealengine size={35} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
