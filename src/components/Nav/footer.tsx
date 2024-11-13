import React from 'react';

const Footer: React.FC = () => {
  const navItems = [
    {
      title: "Nosotros",
      items: ["Creadores", "Datos del sitio", "Eventos", "Usuarios", "Análisis", "Resultados"]
    },
    {
      title: "Explorar",
      items: ["Documentación", "Foros", "Documents"]
    },
    {
      title: "Belehrten",
      items: ["Acerca de nosotros", "Socios", "Clientes", "Contáctanos"]
    }
  ];

  const socialIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a6e56c10c5dd51210e361239c31f5a33cc50fbe8a0c2572db0f358e9bedf6d12?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4acb218516306d26d88d3dce6203fb3c2f7c2f09fe7a87308e5e9ecf9a581fed?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3dd669f125b2a6899a07a70a1829776ab59b39a31b2ee0b6c89e7dcc9794f104?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/292abf1d210398e83916a9f3e26eac16f3432ced3ba5a6113ad1e494c4010c42?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
  ];

  return (
    <footer className="flex flex-col pt-11 w-full mt-[1735px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center p-5 w-full text-white max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa52947be1d398e5db2287fd62f77e441d7de4f34cad559f665d8229071340e1?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Company logo" className="object-contain grow shrink self-stretch my-auto w-72 aspect-[1.48] min-w-[240px]" />
        <nav className="flex flex-wrap gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
          {navItems.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-3xl font-bold">{section.title}</h3>
              <ul className="flex flex-col mt-4 text-lg font-semibold capitalize">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mt-2.5 opacity-50">
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center px-10 py-9 w-full min-h-[134px] max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-9 items-start self-stretch my-auto text-lg font-semibold capitalize min-w-[240px] text-neutral-900 max-md:max-w-full">
          <a href="#terms">Términos y condiciones</a>
          <a href="#privacy">Privacidad</a>
          <a href="#cookies">Cookies</a>
        </nav>
        <div className="flex gap-4 items-start self-stretch my-auto min-w-[240px]">
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" aria-label={`Social media link ${index + 1}`}>
              <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-square w-[60px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;