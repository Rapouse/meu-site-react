import TrustindexWidget from "./TrustindexWidget";

const Avaliacoes = () => {
  return (
    <section
      className="relative mt-16 md:mt-32 min-h-[600px] px-4 md:px-8 lg:px-12"
      role="region"
      aria-labelledby="avaliacoes-title"
    >
      <div className="text-center mb-8">
        <h1
          id="avaliacoes-title"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-[#0870AFCC]"
        >
          Avaliações dos Clientes
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
          Veja o que nossos clientes estão dizendo sobre a Ouviden em Moema.
        </p>
      </div>

      <div
        className="flex justify-center"
        aria-label="Seção de avaliações de clientes"
      >
        <TrustindexWidget />
      </div>
    </section>
  );
};

export default Avaliacoes;
