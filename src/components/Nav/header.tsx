import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../config/endpoint';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('session');
    setIsLoggedIn(!!session);
  }, []);

  const handleLogout = async () => {
    try {
      const session = localStorage.getItem('session');
      if (!session) throw new Error('No hay una sesión activa.');

      const parsedSession = JSON.parse(session); // Parsea el JSON.
      const { id_usuario } = parsedSession; // Extrae `id_usuario`.

      const userData = {
        id_usuario
      }

      const response = await fetch(ENDPOINTS.USERS + '/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      localStorage.removeItem('session');
      setIsLoggedIn(false);

      if (response.ok) {
        alert('Sesión cerrada correctamente');
        navigate('/');
      } else {
        alert('No se pudo cerrar sesion. ' + data.error)
      }

    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un problema al cerrar la sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <header className="flex flex-col w-full text-white max-md:max-w-full" style={{ backgroundImage: 'linear-gradient(to right, #4b0082, #800020)' }}>
      <div className="flex flex-wrap gap-10 justify-between items-center px-10 w-full min-h-[100px] max-md:px-5 max-md:max-w-full">
        <Link to={'/'}><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/852aa22bf5bc866857c31059f6b2cb998982a466c4b77635b76977bcd697e100?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.48] w-[138px]" /></Link>
        <nav className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto text-sm font-extrabold min-w-[240px] w-[519px] max-md:max-w-full">
          <Link to="/teststart" className="self-stretch my-auto">English test</Link>
          <Link to="#study-plan" className="self-stretch my-auto">Plan de estudio</Link>
          <Link to="#tools" className="self-stretch my-auto">Notificaciones</Link>
        </nav>
        <div className="flex gap-5 justify-center items-center self-stretch my-auto text-lg font-semibold text-center capitalize min-w-[240px] w-[418px]">
        {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="gap-5 self-stretch px-2.5 py-2 my-auto bg-indigo-600 rounded-3xl shadow-sm min-h-[40px] w-[200px] text-center"
              >
                Perfil
              </Link>
              <button
                onClick={handleLogout}
                className="gap-5 self-stretch px-2.5 py-2 my-auto bg-red-600 rounded-3xl shadow-sm min-h-[40px] w-[200px] text-center"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="gap-5 self-stretch px-2.5 py-2 my-auto bg-indigo-600 rounded-3xl shadow-sm min-h-[40px] w-[200px] text-center"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/registration"
                className="gap-5 self-stretch px-2.5 py-2 my-auto whitespace-nowrap bg-indigo-600 rounded-3xl shadow-sm min-h-[40px] w-[200px] text-center"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
