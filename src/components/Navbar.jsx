import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { navItems } from "../constants";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const desktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    setOpenDropdownIndex(null); // Fecha qualquer submenu aberto ao abrir/fechar o menu móvel
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  // Fechar submenus ao clicar fora no menu Desktop
  useEffect(() => {
    const handleClickOutsideDesktop = (event) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDesktop);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDesktop);
    };
  }, []);

  // Fechar submenus ao clicar fora no menu Mobile
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (mobileDrawerOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileDrawerOpen(false);
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-lg border-b border-slate-300" aria-label="Main navigation">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center py-4 sm:py-6 lg:py-8">
        {/* Logotipo */}
        <div className="flex items-center flex-shrink-0">
          <a href="/" aria-label="Home">
            <img
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto object-contain mr-4 max-w-[250px]"
              src="/meu-site-react/assets/Logo-Ouviden.png"
              alt="Logotipo da Ouviden"
            />
          </a>
        </div>

        {/* Menu Desktop e Tablet */}
        <ul
          className="hidden lg:flex space-x-4 xl:space-x-6 font-semibold"
          ref={desktopMenuRef} // Referência para o menu Desktop
        >
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                className="flex items-center text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-black hover:text-[#239ddb] focus:outline-none"
                onClick={() => toggleDropdown(index)}
                aria-haspopup={item.subItems ? "true" : "false"}
                aria-expanded={openDropdownIndex === index ? "true" : "false"}
              >
                {item.label}
                {item.subItems && (
                  <span className="ml-1">
                    {openDropdownIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                )}
              </button>
              {item.subItems && openDropdownIndex === index && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 z-20">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#239ddb]"
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

        {/* Botão "CONTATO" no Desktop */}
        <div className="hidden lg:flex justify-center space-x-4 xl:space-x-6 items-center">
          <a
            href="#"
            aria-label="Contato via WhatsApp"
            className="flex items-center py-2 px-5 font-bold text-sm lg:text-base xl:text-base text-white rounded-2xl bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC] hover:opacity-75 transition-colors duration-200"
          >
            CONTATO <FaWhatsapp className="ml-2 text-lg" />
          </a>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            aria-label={mobileDrawerOpen ? "Fechar menu" : "Abrir menu"}
            className="p-2"
          >
            {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Overlay de Fundo */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
      )}

      {/* Menu Mobile Overlay */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col h-screen bg-white"
          ref={mobileMenuRef} // Referência para o menu Mobile
        >
          {/* Cabeçalho do Menu Mobile com Logotipo e Botão Fechar */}
          <div className="flex items-center justify-between p-6 sm:p-8 bg-white border-b border-gray-200">
            <a href="/" aria-label="Home">
              <img
                className="h-12 sm:h-14 lg:h-auto w-auto object-contain max-w-[250px]"
                src="/meu-site-react/assets/Logo-Ouviden.png"
                alt="Logotipo da Ouviden"
              />
            </a>
            <button
              onClick={toggleNavbar}
              aria-label="Fechar menu"
              className="p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Itens do Menu Mobile */}
          <div className="flex-1 overflow-y-auto bg-white">
            <ul className="w-full p-6 sm:p-8">
              {navItems.map((item, index) => (
                <li key={index} className="py-3 sm:py-4 border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full text-lg sm:text-base md:text-base text-black hover:text-[#239ddb] focus:outline-none"
                    onClick={() => toggleDropdown(index)}
                    aria-haspopup={item.subItems ? "true" : "false"}
                    aria-expanded={openDropdownIndex === index ? "true" : "false"}
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <span className="ml-2">
                        {openDropdownIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    )}
                  </button>
                  {item.subItems && openDropdownIndex === index && (
                    <ul className="mt-2 bg-gray-100 rounded-md">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className="block py-2 px-4 text-sm sm:text-base text-black hover:bg-gray-200 hover:text-[#239ddb]"
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

            {/* Botão "CONTATO" no Menu Mobile */}
            <div className="w-full px-6 sm:px-8 pb-6 sm:pb-8">
              <a
                href="#"
                aria-label="Contato via WhatsApp"
                className="flex justify-center items-center w-full text-base sm:text-lg py-3 px-6 sm:px-8 text-white rounded-md bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC] hover:opacity-75 transition-colors duration-200"
              >
                CONTATO <FaWhatsapp className="ml-2 text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
