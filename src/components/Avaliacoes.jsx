import TrustindexWidget from "./TrustindexWidget";

const Avaliacoes = () => {
  return (
    <section className="relative mt-16 md:mt-32 min-h-[600px] px-4 md:px-8 lg:px-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-[#0870AFCC]">
          Avaliações dos Clientes
        </h1>
      </div>
      {/* Widget deve aparecer logo abaixo do título */}
      <div className="flex justify-center">
        <TrustindexWidget />
      </div>
    </section>
  );
};

export default Avaliacoes;
