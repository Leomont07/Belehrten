import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    "Test de Nivel Personalizado",
    "Enfoque Adaptativo",
    "Acceso a Herramientas Interactivas",
    "Progreso Seguimiento"
  ];

  const icons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/96b096c23b498166326d9ff6da3e692c0565cf1370fca7705aaf13b2aae5066c?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cd1a3a7c29e958ef449e43f5036020ef73f6c35fbca638b9df5be413f5bdf7a8?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/63c028d4f3cc40cb940ce3241d3ad7427d933c926fe20201a92a932f33afb3c6?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0303d0f9ac667d26ede255f2aed586aadd86b5694e34f1a9717fd65d0284c016?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
  ];

  return (
    <section className="mt-32 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start ml-24 text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
        ¿Por qué elegirnos?
      </h2>
      <div className="flex flex-wrap items-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center self-stretch px-5 py-2.5 my-auto min-h-[406px] w-[140px]">
          {icons.map((src, index) => (
            <img key={index} loading="lazy" src={src} alt="" className="object-contain mt-6 aspect-square w-[90px]" />
          ))}
        </div>
        <div className="self-stretch px-10 py-4 my-auto text-6xl font-bold text-white min-h-[460px] min-w-[240px] w-[1110px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          {reasons.map((reason, index) => (
            <React.Fragment key={index}>
              {reason}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;