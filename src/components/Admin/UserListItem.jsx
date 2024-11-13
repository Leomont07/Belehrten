
function UserListItem({ user }) {
  return (
    <div className="flex flex-wrap gap-2.5 items-center self-stretch my-auto min-h-[80px] min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col self-stretch py-2.5 my-auto w-6 whitespace-nowrap">
        <div className="text-xs font-bold text-neutral-900">Id</div>
        <div className="mt-5 text-sm text-black">{user.id}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-20 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Nombre</div>
        <div className="mt-5 text-sm text-black">{user.nombre}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28">
        <div className="text-xs font-semibold text-neutral-400">Apellido Paterno</div>
        <div className="mt-5 text-sm text-black">{user.apellidoPaterno}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28">
        <div className="text-xs font-semibold text-neutral-400">Apellido Materno</div>
        <div className="mt-5 text-sm text-black">{user.apellidoMaterno}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto whitespace-nowrap w-[51px]">
        <div className="text-xs font-semibold text-neutral-400">Edad</div>
        <div className="mt-5 text-sm text-black">{user.edad}</div>
      </div>
      <div className="flex overflow-hidden flex-col self-stretch py-2.5 my-auto whitespace-nowrap w-[132px]">
        <div className="text-xs font-semibold text-neutral-400">Correo</div>
        <div className="mt-5 text-sm text-black">{user.correo}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28">
        <div className="text-xs font-semibold text-neutral-400">Fecha registro</div>
        <div className="mt-5 text-sm text-black">{user.fechaRegistro}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Contraseña</div>
        <div className="mt-5 text-sm text-black">{user.contrasena}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Verificación</div>
        <div className="mt-5 text-sm text-black">{user.verificacion}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Token</div>
        <div className="mt-5 text-sm text-black">{user.token}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/009b3408bb979f3fd9c6986e382e12aedd55d5a5a7f60f4de46bc29dc653fdbf?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Edit user" className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] w-[15px]" />
    </div>
  );
}

export default UserListItem;