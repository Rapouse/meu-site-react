import { FaFacebookF, FaInstagram, FaYoutube, FaGooglePlay, FaApple } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { navItems } from "../constants";
import { Plus } from 'lucide-react';

const Footer = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar quando a tela é "mobile" ou "tablet"
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Telas até 768px são consideradas móveis
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownClick = (index) => {
    if (isMobile) {
      setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Toggle do dropdown em telas móveis
    }
  };

  return (
    <footer className="bg-gray-100 py-8 sm:py-10 lg:py-12 border-t border-neutral-300">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Distribuidor Autorizado */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-lg font-semibold">Distribuidor Autorizado</h2>
            <img src="/meu-site-react/assets/Starkey-Logo.svg" alt="Distribuidor Autorizado Starkey" className="h-20 sm:h-24 lg:h-28 mx-auto lg:mx-0 my-4" />
          </div>

          {/* Opções */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-lg font-semibold">Opções</h2>
            <ul className="space-y-2 my-4">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <div className="flex justify-between items-center">
                    <a href={item.href} className="hover:text-[#127aba] text-sm md:text-base lg:text-lg">
                      {item.label}
                    </a>
                    {/* Mostrar o ícone "+" apenas em telas móveis */}
                    {item.subItems && isMobile && (
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className="text-[#127aba] hover:text-[#239ddb] ml-2"
                        aria-label="Expandir submenu"
                      >
                        <Plus />
                      </button>
                    )}
                  </div>

                  {/* Submenu que abre com clique no "+" */}
                  {item.subItems && (
                    <ul
                      className={`bg-white shadow-lg rounded-lg py-2 w-48 z-10 transition-all duration-300 ease-in-out transform ${
                        openDropdownIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"
                      } ${isMobile ? 'mt-2' : 'absolute top-full left-0'}`}
                      style={{
                        display: openDropdownIndex === index || !isMobile ? 'block' : 'none',
                      }}
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
          </div>

          {/* App Ouviden */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg font-semibold">App Ouviden</h2>
            <p className="my-4 text-pretty text-sm md:text-base lg:text-lg">Baixe o App da Ouviden e aproveite descontos exclusivos! Disponível em Android e iOS.</p>

            <div className="flex justify-center space-x-4">
              <a href="#" aria-label="Google Play Store" className="hover:text-[#127aba]">
                <FaGooglePlay className="text-6xl sm:text-7xl lg:text-8xl" />
              </a>
              <a href="https://apps.apple.com/br/app/ouviden/id1541225843" className="hover:text-[#127aba]" aria-label="Apple App Store">
                <FaApple className="text-6xl sm:text-7xl lg:text-8xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-slate-300 my-4 sm:my-6"></div>

        {/* Informações Legais e Redes Sociais */}
        <div className="flex flex-wrap justify-between items-center">
          <img src="/meu-site-react/assets/Logo-Ouviden.png" alt="Ouviden Logo" className="h-12 sm:h-16 lg:h-20 mx-auto lg:mx-0 mb-4 lg:mb-0" />

          <div className="text-center flex-1">
            <p className="text-sm sm:text-base lg:text-lg font-medium">OUVIDEN SOLUÇÕES AUDITIVAS LTDA - CNPJ: 32.842.426/0002-60</p>
          </div>

          <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
            <a href="https://www.facebook.com/ouviden/" target="blank" aria-label="Facebook" className="hover:text-[#D6A000]"><FaFacebookF className="text-2xl sm:text-3xl lg:text-4xl" /></a>
            <a href="https://www.instagram.com/ouviden/?hl=pt-br" target="blank" aria-label="Instagram" className="hover:text-[#D6A000]"><FaInstagram className="text-2xl sm:text-3xl lg:text-4xl" /></a>
            <a href="https://www.youtube.com/channel/UCFlFImy1SD94m9ixZEeoprw" target="blank" aria-label="YouTube" className="hover:text-[#D6A000]"><FaYoutube className="text-2xl sm:text-3xl lg:text-4xl" /></a>
          </div>
        </div>

        {/* Política de Privacidade */}
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm overpass text-center mt-6">
          POLÍTICA DE PRIVACIDADE: A Política de Privacidade foi elaborada em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet), com a Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de Dados Pessoais) e com o Regulamento UE n. 2016/679 de 27 de abril de 2016 (Regulamento Geral Europeu de Proteção de Dados Pessoais – RGDP), pode ser lida na íntegra <a href="/privacidade" className="text-[#127aba] hover:underline"> clicando aqui</a>.
        </p>
        <p className="text-sm font-semibold overpass text-center my-6">
          Criação e Trafégo Pago por <a href="https://kangoo.digital/" target='blank' className="text-[#127aba] hover:underline">Kangoo.digital</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
