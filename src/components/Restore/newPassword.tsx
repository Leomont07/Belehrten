import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ENDPOINTS } from '../../config/endpoint';


const NewPassword = () => {
  const [psw, setPsw] = useState('');
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!psw) {
      alert('Ingresa una contraseña.');
      return;
    }

    if (!token) {
      alert('Token no válido.');
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&./])[A-Za-z\d@$!%*?&./]{8,}$/.test(psw) || /(\d)\1/.test(psw)) {
      alert('La contraseña debe tener al menos 8 caracteres, incluyendo letras, números, símbolos y no debe contener números consecutivos.');
      return;
    }

    try {
      
      const userData = { 
        psw,
        token
      };

      const response = await fetch(ENDPOINTS.USERS + '/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log('token: ' + token);

      const data = await response.json();

      if (response.ok) {
        alert('Contraseña restablecida correctamente.');
        navigate('/login');
      } else {
        alert('Hubo un problema. Inténtalo más tarde.' + data.error);
      }
      
    } catch (error: any) {
      alert('Hubo un problema. Inténtalo más tarde.' + error);
    }
  };

  return (
    <div className="flex flex-col w-full text-lg font-semibold max-md:mt-10">
      <h1 className="text-6xl font-bold text-center text-black max-md:text-4xl">Ingresar Nueva Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-10 justify-between items-center px-5 py-2 mt-8 w-full text-base text-gray-400 bg-gray-50 rounded-3xl shadow-sm min-h-[40px]">
          <label htmlFor="psw" className="sr-only">Ingresa tu psw</label>
          <input
            type="password"
            id="psw"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            placeholder="Ingresa tu nueva contraseña"
            className="bg-transparent w-full outline-none"
            aria-label="Ingresa tu nueva contraseña"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eb5fd240fff749c8811197127fc3dbca66619f1cfdd3ac20db01485728a0510?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[0.76] fill-gray-400" />
        </div>
        <button type="submit" className="gap-5 self-stretch px-2.5 py-2 mt-8 w-full text-center text-white capitalize bg-indigo-600 rounded-3xl shadow-sm min-h-[40px]">
          Confrimar
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
