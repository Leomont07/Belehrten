import React from 'react';

const Footer = () => {
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
    <footer className="flex flex-col mt-20 items-center pt-10 w-full bg-gradient-to-b from-[#870053] to-[#F8F9FA] text-white">
      <div className="flex flex-wrap gap-10 justify-center items-center p-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa52947be1d398e5db2287fd62f77e441d7de4f34cad559f665d8229071340e1?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
          alt="Company logo"
          className="w-28"
        />
        <nav className="flex flex-wrap gap-10">
          {navItems.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm opacity-70">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex flex-wrap justify-between items-center px-10 py-6 w-full bg-[#F8F9FA] text-black text-sm">
        <nav className="flex gap-6">
          <a href="#terms" className="hover:underline">Términos y condiciones</a>
          <a href="#privacy" className="hover:underline">Privacidad</a>
          <a href="#cookies" className="hover:underline">Cookies</a>
        </nav>
        <div className="flex gap-4">
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" aria-label={`Social media link ${index + 1}`}>
              <img loading="lazy" src={icon} alt="" className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
