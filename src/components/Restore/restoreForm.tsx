import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../config/endpoint';

const RestoreForm = () => {

  const [correo, setCorreo] = useState('');

  const handleRestore = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const userData = { correo };

      const response = await fetch(ENDPOINTS.USERS + '/restore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if(response.ok) {
        alert('Se te envió un correo para reestablecer tu contraseña.');
      } else {
        alert('Hubo un prblema. Intentalo más tarde.' + data.error);
      }  
    } catch (error: any) {
      alert('Hubo un problema. Inténtalo más tarde. ' + error);
    }
  };

  return (
    <div className="flex flex-col w-full text-lg font-semibold max-md:mt-10">
      <h1 className="text-6xl font-bold text-center text-black max-md:text-4xl">Olvide mi Contraseña</h1>
      <form onSubmit={handleRestore}>
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
        <button type="submit" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize bg-indigo-600 rounded-3xl shadow-sm min-h-[40px]">
          Reestablecer contraseña
        </button>
        <Link to={'/login'}>
          <button type="button" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize whitespace-nowrap bg-red-500 rounded-3xl shadow-sm min-h-[40px]">
            Cancelar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default RestoreForm;
