import NavItem from './NavItem';

const navItems = [
  { label: 'Home', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0a75592b8d34557229f81744963ce092c6faec1206303de4ea8c8be44c588587?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' },
  { label: 'English test', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/030054c80cb3eabe8e2657b5a0324d943b1d318502cfceec8f542bc45b290720?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' },
  { label: 'Usuarios', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff64d72fa33a19f9492d0e648e5773a4881a8bc8281dd4256b227f5aaf7c30a7?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', active: true },
  { label: 'Reportes', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/711ddfe1e1e6ea3c22bfe95a798c4ea817a2e7fe469e4b25452dad9247f015ef?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' },
  { label: 'Configuración', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d230d36963721d11690bb2d0044377e6b2bab60ccc0cdff2e766e6a20abb1ef1?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' },
  { label: 'Logout', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/724a785caa54677b942da36cb69d0b1aa61722e0829a42b98b77d9396e01b5bc?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', iconPosition: 'right' }
];

function Sidebar() {
  return (
    <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-6 pt-3.5 pb-20 w-full text-sm font-medium bg-stone-400 text-neutral-900 max-md:px-5">
        <div className="flex gap-3 self-start text-xl font-bold text-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/482021ce7a804ff5ab75b72b48184a855e9336f0d247bddead55ed1cf431d570?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-start w-1 aspect-[0.17] fill-white stroke-[4px] stroke-pink-900" />
          <h1 className="border border-pink-900 border-solid basis-auto">CRUD Usuarios</h1>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf9af58224a03785e1b55fff56c76042ad0b6d756f9e4e4afdc2873a3b702be?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Admin avatar" className="object-contain self-center mt-14 w-32 max-w-full aspect-square max-md:mt-10" />
        <p className="self-center mt-12 text-white max-md:mt-10">Admin</p>
        <nav className="mt-11">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;