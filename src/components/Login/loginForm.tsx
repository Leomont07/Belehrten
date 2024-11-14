import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../config/endpoint';

const LoginForm = () => {
  const [correo, setCorreo] = useState('');
  const [psw, setPsw] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!correo || !psw) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const userData = {
      psw,
      correo
    };

    try {
      // Enviar solicitud al servidor para verificar las credenciales
      const response = await fetch(ENDPOINTS.USERS + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inicio de sesión exitoso');
        navigate('/');
      } else {
        alert(data.error || 'Error al iniciar sesión. Verifica tus credenciales.');
      }
    } catch (error) {
      alert('Hubo un error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col w-full text-lg font-semibold max-md:mt-10">
      <h1 className="text-6xl font-bold text-center text-black max-md:text-4xl">Ingresar</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-10 justify-between items-center px-5 py-2 mt-8 w-full text-base text-gray-400 bg-gray-50 rounded-3xl shadow-sm min-h-[40px]">
          <label htmlFor="correo" className="sr-only">Ingresa tu correo</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            className="bg-transparent w-full outline-none"
            aria-label="Ingresa tu correo"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ed97444bca9c125dc08c718597c6f286a3120476cce53685784c91b71bfc15?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
        <div className="flex gap-10 justify-between items-center px-5 py-2.5 mt-8 w-full text-base text-gray-400 whitespace-nowrap bg-gray-50 rounded-3xl shadow-sm min-h-[40px]">
          <label htmlFor="psw" className="sr-only">Contraseña</label>
          <input
            type="password"
            id="psw"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            placeholder="Contraseña"
            className="bg-transparent w-full outline-none"
            aria-label="Contraseña"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eb5fd240fff749c8811197127fc3dbca66619f1cfdd3ac20db01485728a0510?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[0.76] fill-gray-400" />
        </div>
        <button type="submit" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize bg-indigo-600 rounded-3xl shadow-sm min-h-[40px]">
          Iniciar Sesión
        </button>
        <Link to={'/'}>
          <button type="button" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize whitespace-nowrap bg-red-500 rounded-3xl shadow-sm min-h-[40px]">
            Cancelar
          </button>
        </Link>
      </form>
      <p className="mt-8 text-center text-indigo-600 underline decoration-auto decoration-solid underline-offset-auto">
        <span className="text-2xl leading-10">¿No tienes una cuenta? </span>
        <Link to="/registration" className="text-2xl font-bold leading-10 text-indigo-600 underline">
          Registrarme
        </Link>
      </p>
      <button className="flex gap-5 justify-center items-center px-2.5 py-2 mt-8 w-full text-center capitalize bg-gray-50 rounded-3xl border border-black border-solid shadow-sm min-h-[40px] text-neutral-900">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e663a39143a0eaf4c68b5ca49566fa6b4d4bca4610dc9ff433e9ba0a74a89f3d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <span className="self-stretch my-auto">Continuar con Google</span>
      </button>
    </div>
  );
};

export default LoginForm;
