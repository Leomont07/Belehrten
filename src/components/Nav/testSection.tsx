import React from 'react';

const TestSection: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0756c2b297f0ca09d3d06ffce91dbad4de5198c084633c76e1edbcefd489305b?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
      title: "Prueba tu inglés en línea, rápido y preciso",
      description: "Realiza el test en línea en cualquier momento y lugar."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62c1026a9812dbc0cf5d9d1e20cfb306eb5cbd2658c035b0259c37953f6ef338?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
      title: "Certifica tu nivel de inglés",
      description: "Obtén tu certificado de competencia en inglés de forma inmediata."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3da013347b6f22fc48bf5c6b81d4edf328fd3416767115de91ffd882d1c3fa7a?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
      title: "Presenta tu nivel en tu currículum",
      description: "Destaca tu dominio del inglés en tu currículum."
    }
  ];

  return (
    <section className="flex flex-col pt-1.5 pb-6 mt-28 w-full font-bold bg-white max-md:mt-10 max-md:max-w-full">
      <h2 className="gap-2.5 self-stretch p-2.5 text-8xl text-pink-900 max-md:max-w-full max-md:text-4xl">
        Test de prueba de nivel
      </h2>
      <p className="z-10 gap-2.5 self-stretch px-5 py-2.5 -mt-2.5 text-3xl text-center text-neutral-900 w-[1240px] max-md:max-w-full">
        El Test de Nivel de Inglés evalúa cómo utilizas el inglés, aplicas las reglas gramaticales, tu pronunciación, el uso de verbos irregulares, verbos compuestos y tiempos verbales, además de medir tu vocabulario en inglés basado en el diccionario de Cambridge. Este examen de inglés pondrá a prueba tus habilidades lingüísticas y te asignará una puntuación. Al finalizar, descubrirás rápidamente tu nivel de inglés.
      </p>
      <div className="flex gap-5 justify-between items-center px-10 py-5 text-2xl text-black max-md:px-5">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <img loading="lazy" src={feature.icon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[120px]" />
            <div className="my-auto w-[226px]">
              <strong>{feature.title}</strong>
              <span>{feature.description}</span>
            </div>
            {index < features.length - 1 && (
              <div className="shrink-0 self-stretch my-auto w-0 border-4 border-black border-solid h-[300px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TestSection;