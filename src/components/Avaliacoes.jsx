import { FaStar } from "react-icons/fa";
import { reviews } from "../constants";

const Avaliacoes = () => {
  return (
    <section className="relative mt-16 md:mt-32 min-h-[600px] px-4 md:px-8 lg:px-12">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-[#0870AFCC]">
          Avaliações dos Clientes
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-14">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              {/* Ícone do Google */}
              <div className="rounded-full w-16 h-16 overflow-hidden">
                <img
                  src={`https://via.placeholder.com/64`}
                  alt={`Foto de ${review.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mt-4">{review.name}</h3>
              <span className="text-sm text-neutral-600">{review.date}</span>
            </div>
            {/* Avaliação */}
            <div className="flex justify-center mt-4">
              {[...Array(review.rating)].map((star, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-center text-sm sm:text-md font-normal mt-4">
              {review.review}
            </p>
          </div>
        ))}
      </div>

      {/* Nota geral e número de avaliações */}
      <div className="text-center mt-16">
        <p className="text-lg sm:text-xl font-medium">
          Avaliação totalizada
          <strong> Google 4.8</strong> de 5, com
          base em <strong>33 avaliações</strong>.
        </p>
      </div>
    </section>
  );
};

export default Avaliacoes;
