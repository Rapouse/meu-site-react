import { logos } from "../constants";

const LogoCarousel = () => {
  return (
    <section className="my-20 border-t-2 border-slate-100">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 font-bold bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC] text-transparent bg-clip-text tracking-wide">
        A Ouviden possui os Principais Aparelhos Auditivos Premiados
      </h1>
      <div className="relative overflow-hidden mt-12">
        <div className="flex animate-scroll space-x-6 md:space-x-12 lg:space-x-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 md:w-40 lg:w-48">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 lg:h-28 object-contain mx-auto"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 md:w-40 lg:w-48">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 lg:h-28 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;