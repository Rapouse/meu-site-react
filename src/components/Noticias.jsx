import { MoveRight } from 'lucide-react';

const Noticias = () => {
  return (
    <section className="relative mt-16 md:mt-32 min-h-[800px] px-4 md:px-8 lg:px-12">
      <header className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC] text-transparent bg-clip-text my-8 tracking-wide">
          Notícias sobre Moema
        </h1>
      </header>

      <div className="flex justify-center flex-wrap xl:flex-nowrap mt-10 gap-6">
        {/* Artigo 1 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col justify-between">
          <img
            src="/meu-site-react/assets/Ouviden-Aparelhos-Auditivos.jpg"
            alt="Ouviden no ABC, Santo André / SP"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl"
          />
          <div className="p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col flex-grow">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 text-center">
              Ouviden Aparelhos Auditivos: Um novo jeito de cuidar da saúde auditiva
            </h2>
            <div className="mt-auto flex flex-col items-center space-y-2">
              <a
                href="https://www.ouviden.com.br/ouviden-aparelhos-auditivos-um-novo-jeito-de-cuidar-da-saude-auditiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-bold overpass py-2 px-4 text-[#127aba] rounded-full hover:bg-[#239ddb] hover:text-white transition duration-300">
                LEIA MAIS <MoveRight className="ml-2 text-sm sm:text-base lg:text-base xl:text-lg" />
              </a>
            </div>
          </div>
        </article>

        {/* Artigo 2 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col justify-between">
          <img
            src="/meu-site-react/assets/Ouviden-Zumbido-no-Ouvido.jpg"
            alt="Zumbido no ouvido tem cura?"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl"
          />
          <div className="p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col flex-grow">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 text-center">
              Zumbido no ouvido tem cura?
            </h2>
            <div className="mt-auto flex flex-col items-center space-y-2">
              <a
                href="https://www.ouviden.com.br/zumbido-no-ouvido/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-bold overpass py-2 px-4 text-[#127aba] rounded-full hover:bg-[#239ddb] hover:text-white transition duration-300">
                LEIA MAIS <MoveRight className="ml-2 text-sm sm:text-base lg:text-base xl:text-lg" />
              </a>
            </div>
          </div>
        </article>

        {/* Artigo 3 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col justify-between">
          <img
            src="/meu-site-react/assets/Ouviden-Dicas-Aparelhos-Auditivos.jpg"
            alt="Dicas sobre pilhas para aparelhos auditivos"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl"
          />
          <div className="p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col flex-grow">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2 text-center">
              Dicas sobre pilhas para aparelhos auditivos
            </h2>
            <div className="mt-auto flex flex-col items-center space-y-2">
              <a
                href="https://www.ouviden.com.br/dicas-sobre-pilhas-para-aparelhos-auditivos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base lg:text-base xl:text-lg font-bold overpass py-2 px-4 text-[#127aba] rounded-full hover:bg-[#239ddb] hover:text-white transition duration-300">
                LEIA MAIS <MoveRight className="ml-2 text-sm sm:text-base lg:text-base xl:text-lg" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Noticias;
