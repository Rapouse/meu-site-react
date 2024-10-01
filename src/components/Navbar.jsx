import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white backdrop-blur-lg border-b border-slate-300" aria-label="Main navigation">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">

          <div className="flex items-center flex-shrink-0">
            <a href="/" aria-label="Home">
              <img className="h-10 w-auto sm:h-12 md:h-14 lg:h-auto mr-2" src="/meu-site-react/assets/Logo-Ouviden.png" alt="Logotipo da Ouviden" />
            </a>
          </div>

          <ul className="hidden lg:flex space-x-6 xl:space-x-12 font-semibold text-sm sm:text-base">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setOpenDropdownIndex(index)}
                onMouseLeave={() => setOpenDropdownIndex(null)}
              >
                <a href={item.href} aria-label={item.label} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  {item.label}
                </a>
                {item.subItems && openDropdownIndex === index && (
                  <ul
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 z-10 transition-all duration-300 ease-in-out transform"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-4 xl:space-x-12 items-center">
            <a
              href="#"
              aria-label="Contato via WhatsApp"
              className="flex items-center py-2 px-4 sm:px-5 font-bold text-sm text-white rounded-2xl bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC]"
            >
              CONTATO <FaWhatsapp className="ml-2 text-base" />
            </a>
          </div>

          <div className="lg:hidden flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              aria-label={mobileDrawerOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed bg-white right-0 z-20 w-full p-8 sm:p-10 font-semibold text-base flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2 sm:py-4">
                  <button
                    className="text-base sm:text-lg md:text-xl flex justify-between w-full"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                  </button>
                  {item.subItems && openDropdownIndex === index && (
                    <ul className="mt-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.href} className="block py-2 text-sm sm:text-base md:text-lg">
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-4 sm:mt-6">
              <a
                href="#"
                aria-label="Contato via WhatsApp"
                className="flex items-center text-sm py-2 px-4 sm:px-5 text-white rounded-md bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC]"
              >
                CONTATO <FaWhatsapp className="ml-2 text-base" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
