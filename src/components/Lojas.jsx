import { Map } from 'lucide-react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Lojas = () => {
  return (
    <section className="relative mt-16 md:mt-32 min-h-[800px] px-4 md:px-8 lg:px-12">
      <header className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC] text-transparent bg-clip-text my-8 tracking-wide">
          Lojas de Aparelhos Auditivos Ouviden
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium mt-6 mx-auto max-w-4xl text-pretty">
          A <strong>Ouviden</strong> possui lojas de <strong>serviços e aparelhos auditivos</strong> em São Paulo - Moema, Atibaia e no ABC, na cidade de Santo André. Todas as lojas possuem <strong>fonaudiólogas capacitadas</strong> para realizar <strong>testes e exames auditivos</strong>, tanto na loja quanto em domicílio.
        </p>
      </header>

      <div className="flex flex-wrap xl:flex-nowrap mt-10 gap-6 justify-center">
        {/* Loja 1 - Santo André */}
        <article className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col">
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200 flex-grow">
            <img
              src="/meu-site-react/assets/Ouviden-Unidade-SantoAndre.jpg"
              alt="Ouviden no ABC, Santo André / SP"
              className="w-full h-48 sm:h-56 lg:h-64 max-h-[300px] object-cover"
            />
            <div className="p-4 sm:p-5 lg:p-5 xl:p-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 text-center">Ouviden no ABC, Santo André</h2>
              <address className="not-italic mb-4 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-center">
                Av. João Ramalho, 335, Vila Assunção <br />
                Santo André, SP - CEP: 09030-320 <br />
                E-mail: <a href="mailto:ouviden@ouviden.com.br" className="text-[#0870AFCC] hover:underline">ouviden@ouviden.com.br</a>
              </address>
              <div className="flex flex-col items-center space-y-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.%20Jo%C3%A3o%20Ramalho,%20335%20-%20Centro,%20Santo%20Andr%C3%A9%20-%20SP,%2009030-320,%20Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver a localização da Ouviden no ABC, Santo André / SP no Google Maps"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-[#D6A000] hover:text-white transition duration-300">
                  <Map className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Localização
                </a>
                <a
                  href="tel:+551144364256"
                  title="Ligar para a Ouviden no ABC, Santo André"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-[#0870AFCC] hover:text-white transition duration-300">
                  <Phone className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Ligar (11) 4436-4256
                </a>
                <a
                  href="https://wa.me/5511945185253"
                  title="Conversar via WhatsApp com a Ouviden no ABC, Santo André"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300">
                  <FaWhatsapp className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Loja 2 - Atibaia */}
        <article className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col">
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200 flex-grow">
            <img
              src="/meu-site-react/assets/Ouviden-Unidade-Atibaia.jpg"
              alt="Ouviden em Atibaia, São Paulo"
              className="w-full h-48 sm:h-56 lg:h-64 max-h-[300px] object-cover"
            />
            <div className="p-4 sm:p-5 lg:p-5 xl:p-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 text-center">Ouviden em Atibaia, São Paulo</h2>
              <address className="not-italic mb-4 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-center">
                Rua José Lucas, 60, Centro <br />
                Atibaia, SP - CEP: 12940-700 <br />
                E-mail: <a href="mailto:atibaia@ouviden.com.br" className="text-[#0870AFCC] hover:underline">atibaia@ouviden.com.br</a>
              </address>
              <div className="flex flex-col items-center space-y-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=R.%20Jos%C3%A9%20Lucas,%2060%20-%20Centro,%20Atibaia%20-%20SP,%2012940-700,%20Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver a localização da Ouviden Atibaia, São Paulo no Google Maps"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-[#D6A000] hover:text-white transition duration-300">
                  <Map className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Localização
                </a>
                <a
                  href="tel:+551124271623"
                  title="Ligar para a Ouviden em Atibaia, São Paulo"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-[#0870AFCC] hover:text-white transition duration-300">
                  <Phone className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Ligar (11) 2427-1623
                </a>
                <a
                  href="https://wa.me/5511945185253"
                  title="Conversar via WhatsApp com a Ouviden em Atibaia, São Paulo"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300">
                  <FaWhatsapp className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Loja 3 - Moema */}
        <article className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col">
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200 flex-grow">
            <img
              src="/meu-site-react/assets/Ouviden-Unidade-Moema-Fachada.jpg"
              alt="Ouviden em Moema, São Paulo"
              className="w-full h-48 sm:h-56 lg:h-64 max-h-[300px] object-cover"
            />
            <div className="p-4 sm:p-5 lg:p-5 xl:p-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 text-center">Ouviden em Moema, São Paulo</h2>
              <address className="not-italic mb-4 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-center">
                Alameda dos Nhambiquaras, 1254, Moema,
                São Paulo, SP - CEP: 04090-002 <br />
                E-mail: <a href="mailto:moema@ouviden.com.br" className="text-[#0870AFCC] hover:underline">moema@ouviden.com.br</a>
              </address>
              <div className="flex flex-col items-center space-y-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Alameda%20dos%20Nhambiquaras,%201254%20-%20Moema,%20S%C3%A3o%20Paulo%20-%20SP,%2004090-002,%20Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver a localização da Ouviden em Moema, São Paulo no Google Maps"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 md:py-1 md:px-3 rounded-lg hover:bg-[#D6A000] hover:text-white transition duration-300">
                  <Map className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Localização
                </a>
                <a
                  href="tel:+551128944202"
                  title="Ligar para a Ouviden em Moema, São Paulo"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 rounded-lg hover:bg-[#0870AFCC] hover:text-white transition duration-300">
                  <Phone className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Ligar (11) 2894-4202
                </a>
                <a
                  href="https://wa.me/#"
                  title="Conversar via WhatsApp com a Ouviden em Moema, São Paulo"
                  className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-medium py-2 px-4 rounded-lg hover:bg-green-700 hover:text-white transition duration-300">
                  <FaWhatsapp className="mr-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <footer className="my-10 text-center">
        <p className="text-sm sm:text-base lg:text-base xl:text-lg font-medium">
          Se você não puder se deslocar até uma de nossas lojas, nossa equipe poderá realizar o atendimento em domicílio. <a href="https://www.ouviden.com.br/contato/" target="blank" title="Agendar atendimento em domicílio pela Ouviden" rel="noopener noreferrer" className="text-[#0870AFCC] hover:underline">Basta agendar aqui.</a>
        </p>
      </footer>
    </section>
  );
};

export default Lojas;
