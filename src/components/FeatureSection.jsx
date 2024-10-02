const FeatureSection = () => {
  return (
    <section className="relative mt-16 md:mt-32 min-h-[800px] px-4 md:px-8 lg:px-12">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 lg:mt-20 tracking-wide bg-gradient-to-b from-[#32A0E4] to-[#0870AFCC] text-transparent bg-clip-text">
          Ouviden em Moema - São Paulo
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-6 mx-auto max-w-4xl text-pretty">
          Visite a nossa unidade Ouviden no Bairro de Moema em São Paulo. Encontre soluções completas em
          <strong> aparelhos auditivos</strong>,
          <strong> acessórios para aparelhos de audição</strong>,
          <strong> manutenção de aparelhos auditivos</strong>,
          <strong> pilhas e baterias para aparelhos auditivos</strong>,
          <strong> exames audiológicos</strong> e
          <strong> audiometria</strong>.
        </p>
      </div>

      {/* Seção de Imagens */}
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 justify-center items-center">
        <figure className="w-full lg:w-1/2 p-2 max-w-lg">
          <img
            src="/meu-site-react/assets/Ouviden-Unidade-Moema.jpg"
            alt="Fachada da clínica Ouviden em Moema"
            className="w-full h-full object-cover rounded-lg shadow-lg aspect-square"
            loading="lazy"
          />
        </figure>

        <div className="grid grid-cols-2 gap-4 lg:w-1/2 p-2 max-w-lg">
          <figure>
            <img
              src="/meu-site-react/assets/Ouviden-Moema-Exame-Auditivo.jpg"
              alt="Área de exames auditivos"
              className="w-full h-full object-cover rounded-lg shadow-lg aspect-square"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src="/meu-site-react/assets/Ouviden-Exames-e-Servicos-Audiologicos-em-Moema.jpg"
              alt="Serviços audiológicos da Ouviden"
              className="w-full h-full object-cover rounded-lg shadow-lg aspect-square"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src="/meu-site-react/assets/Ouviden-Espaco-Relaxante-e-Confortavel-em-Moema.jpg"
              alt="Espaço relaxante da Ouviden"
              className="w-full h-full object-cover rounded-lg shadow-lg aspect-square"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src="/meu-site-react/assets/Ouviden-Atendimento-Audiologico-em-Moema.jpg"
              alt="Atendimento audiológico da Ouviden"
              className="w-full h-full object-cover rounded-lg shadow-lg aspect-square"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
