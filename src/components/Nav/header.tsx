import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col w-full text-white max-md:max-w-full" style={{ backgroundImage: 'linear-gradient(to right, #4b0082, #800020)' }}>
      <div className="flex flex-wrap gap-10 justify-between items-center px-10 w-full min-h-[100px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/852aa22bf5bc866857c31059f6b2cb998982a466c4b77635b76977bcd697e100?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.48] w-[138px]" />
        <nav className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto text-sm font-extrabold min-w-[240px] w-[519px] max-md:max-w-full">
          <a href="#english-test" className="self-stretch my-auto">English test</a>
          <a href="#study-plan" className="self-stretch my-auto">Plan de estudio</a>
          <a href="#tools" className="self-stretch my-auto">Herramientas</a>
        </nav>
        <div className="flex gap-5 justify-center items-center self-stretch my-auto text-lg font-semibold text-center capitalize min-w-[240px] w-[418px]">
          <button className="gap-5 self-stretch px-2.5 py-2 my-auto bg-indigo-600 rounded-3xl shadow-sm min-h-[40px] w-[200px]">
            Iniciar Sesión
          </button>
          <button className="gap-5 self-stretch px-2.5 py-2 my-auto whitespace-nowrap bg-indigo-600 rounded-3xl shadow-sm min-h-[40px] w-[200px]">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
