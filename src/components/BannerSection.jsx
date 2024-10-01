const BannerSection = () => {
  return (
    <section
      className="relative bg-[url('public/assets/Ouviden-Espaco-Relaxante-e-Confortavel-em-Moema.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen md:min-h-[500px] lg:min-h-[600px]"
      role="banner"
      aria-label="Seção de banner sobre serviços e aparelhos auditivos da Ouviden em Moema"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#127abacc]" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center flex flex-col items-center px-4 py-16 sm:py-24 md:py-28 lg:py-32">
        {/* Título */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 sm:leading-8 md:leading-10 lg:leading-12 font-medium mb-6">
          Conte com a Ouviden na Cidade de Moema - São Paulo, para exames e serviços de audiologia. <br />
          Além de trabalhar apenas com <strong>aparelhos premiados no Mercado.</strong>
        </h1>

        {/* Botões */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="https://www.ouviden.com.br/servicos-e-exames-audiologicos/"
            className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-white text-[#127aba] rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
            title="Conheça os exames e serviços de audiologia da Ouviden"
            aria-label="Link para exames e serviços audiológicos"
          >
            EXAMES E SERVIÇOS
          </a>
          <a
            href="https://www.ouviden.com.br/aparelhos-auditivos-moema-2/#precos"
            className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-[#D6A000] text-white rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
            title="Confira os aparelhos auditivos disponíveis"
            aria-label="Link para aparelhos auditivos"
          >
            APARELHOS AUDITIVOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;