
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
        <div className="mt-5 text-sm text-black">{user.apellido_pat}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28">
        <div className="text-xs font-semibold text-neutral-400">Apellido Materno</div>
        <div className="mt-5 text-sm text-black">{user.apellido_mat}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28">
        <div className="text-xs font-semibold text-neutral-400">Tipo</div>
        <div className="mt-5 text-sm text-black">{user.tipo}</div>
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
        <div className="mt-5 text-sm text-black">{user.fecha_registro}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Contraseña</div>
        <div className="mt-5 text-sm text-black">{user.psw}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Verificación</div>
        <div className="mt-5 text-sm text-black">{user.isVerified}</div>
      </div>
      <div className="flex flex-col self-stretch py-2.5 my-auto w-28 whitespace-nowrap">
        <div className="text-xs font-semibold text-neutral-400">Token</div>
        <div className="mt-5 text-sm text-black">{user.verificationToken}</div>
      </div></div>
  );
}

export default UserListItem;