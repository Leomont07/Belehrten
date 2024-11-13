import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col px-5 pt-5 pb-3.5 mt-32 w-full font-bold text-center text-pink-900 min-h-[315px] max-md:mt-10 max-md:max-w-full">
      <h1 className="text-6xl max-md:max-w-full max-md:text-4xl">
        Conoce y mejora tu Inglés con un simple test
      </h1>
      <p className="mt-9 text-3xl max-md:max-w-full">
        Un enfoque personalizado para ayudarte a alcanzar un nivel en inglés, paso a paso.
      </p>
      <button className="flex gap-6 justify-center items-center self-center px-5 py-2.5 mt-9 max-w-full text-lg font-semibold text-white capitalize bg-pink-900 rounded-3xl min-h-[50px] w-[300px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3de7cddd759e9fd33ec0c0ce4137b179c7ff0c7fcbcc62f8262c3eb7439e5?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] fill-white w-[33px]" />
        <span className="self-stretch my-auto">Ir al test</span>
      </button>
    </section>
  );
};

export default HeroSection;