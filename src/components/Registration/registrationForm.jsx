import InputField from './InputField';

function RegistrationForm() {
  const inputFields = [
    { label: 'Ingresa tu correo', type: 'email', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' },
    { label: 'Contraseña', type: 'password', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2eb5fd240fff749c8811197127fc3dbca66619f1cfdd3ac20db01485728a0510?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' },
    { label: 'Confirmar Contraseña', type: 'password', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/76bf149691e2c22f245c2a208cd2ef53a917bb2661086f0457cce712521a921d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa' }
  ];

  return (
    <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
      <form className="flex flex-col w-full text-lg font-semibold text-gray-400 max-md:mt-10">
        <h1 className="text-6xl font-bold text-center text-black max-md:text-4xl">Registrarse</h1>
        
        {inputFields.map((field, index) => (
          <InputField key={index} {...field} />
        ))}

        <button type="submit" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize bg-indigo-600 rounded-3xl shadow-sm min-h-[40px]">
          Iniciar Sesión
        </button>
        <button type="button" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize whitespace-nowrap bg-red-500 rounded-3xl shadow-sm min-h-[40px]">
          Cancelar
        </button>

        <p className="mt-8 text-center text-indigo-600 underline decoration-auto decoration-solid underline-offset-auto">
          <span className="text-2xl leading-10">¿Ya tienes una cuenta? </span>
          <a href="#" className="text-2xl font-bold leading-10 text-indigo-600 underline">Iniciar sesión</a>
        </p>

        <button type="button" className="flex gap-5 justify-center items-center px-2.5 py-2 mt-8 w-full text-center capitalize bg-gray-50 rounded-3xl border border-black border-solid shadow-sm min-h-[40px] text-neutral-900">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/952fb8441c66902e33c7af6914413dbb3547c54cad26c41436aa2506b7a5b269?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[15px]" />
          <span className="self-stretch my-auto">Continuar con google</span>
        </button>
      </form>
    </section>
  );
}

export default RegistrationForm;