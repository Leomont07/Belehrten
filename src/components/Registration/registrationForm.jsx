import React, { useState } from 'react';
import InputField from './InputField';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../config/endpoint';

function RegistrationForm() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellidoPat, setApellidoPat] = useState('');
  const [apellidoMat, setApellidoMat] = useState('');
  const [edad, setEdad] = useState(0);
  const [correo, setCorreo] = useState('');
  const [psw, setPsw] = useState('');
  const [confirmarPsw, setConfirmarPsw] = useState('');
  const inputFields = [
    { label: 'Nombre', type: 'text', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: nombre, onChange: (e) => setNombre(e.target.value) },
    { label: 'Apellido Paterno', type: 'text', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: apellidoPat, onChange: (e) => setApellidoPat(e.target.value) },
    { label: 'Apellido Materno', type: 'text', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: apellidoMat, onChange: (e) => setApellidoMat(e.target.value) },
    { label: 'Edad', type: 'number', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: edad, onChange: (e) => setEdad(e.target.value) },
    { label: 'Ingresa tu correo', type: 'email', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: correo, onChange: (e) => setCorreo(e.target.value) },
    { label: 'Contraseña', type: 'password', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2eb5fd240fff749c8811197127fc3dbca66619f1cfdd3ac20db01485728a0510?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: psw, onChange: (e) => setPsw(e.target.value) },
    { label: 'Confirmar Contraseña', type: 'password', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/76bf149691e2c22f245c2a208cd2ef53a917bb2661086f0457cce712521a921d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa', value: confirmarPsw, onChange: (e) => setConfirmarPsw(e.target.value) }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (psw !== confirmarPsw) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&./])[A-Za-z\d@$!%*?&./]{8,}$/.test(psw) || /(\d)\1/.test(psw)) {
      alert('La contraseña debe tener al menos 8 caracteres, incluyendo letras, números, símbolos y no debe contener números consecutivos.');
      return;
    }

    const userData = {
      nombre,
      apellido_pat: apellidoPat,
      apellido_mat: apellidoMat,
      edad,
      psw,
      correo,
      fecha_registro: new Date().toISOString()
    };

    try {
      const response = await fetch(ENDPOINTS.USERS + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log(userData);

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.error || 'Error al registrar usuario');
      }
    } catch (error) {
      alert('Hubo un error: ' + error.message);
    }
  };

  return (
    <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
      <form onSubmit={handleSubmit} className="flex flex-col w-full text-lg font-semibold text-gray-400 max-md:mt-10">
        <h1 className="text-6xl font-bold text-center text-black max-md:text-4xl">Registrarse</h1>
        
        {inputFields.map((field, index) => (
          <InputField key={index} {...field} />
        ))}

        <button type="submit" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize bg-indigo-600 rounded-3xl shadow-sm min-h-[40px]">
          Regístrate
        </button>
        <Link to="/" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize whitespace-nowrap bg-red-500 rounded-3xl shadow-sm min-h-[40px]">
          Cancelar
        </Link>

        <p className="mt-8 text-center text-indigo-600 underline decoration-auto decoration-solid underline-offset-auto">
          <span className="text-2xl leading-10">¿Ya tienes una cuenta? </span>
          <Link to="/login" className="text-2xl font-bold leading-10 text-indigo-600 underline">Iniciar sesión</Link>
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
