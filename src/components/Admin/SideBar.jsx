import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../config/endpoint';

const Sidebar = () => {

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
    <aside className="bg-gradient-to-b from-purple-700 to-indigo-600 w-64 p-6 text-white min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <img
          className="rounded-full w-20 h-20 mb-4"
          src="https://via.placeholder.com/100"
          alt="Admin Avatar"
        />
        <h2 className="text-lg font-semibold">Karthi Madesh</h2>
        <p className="text-sm">Admin</p>
      </div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 p-2 hover:bg-purple-800 rounded">
          <span>🏠</span> Home
        </Link>
        <Link to="/teststart" className="flex items-center gap-2 p-2 hover:bg-purple-800 rounded">
          <span>📝</span> English test
        </Link>
        <Link to="/users" className="flex items-center gap-2 p-2 bg-white text-black rounded">
          <span>👤</span> Usuarios
        </Link>
        <Link to="/reports" className="flex items-center gap-2 p-2 hover:bg-purple-800 rounded">
          <span>📊</span> Reportes
        </Link>
        <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-purple-800 rounded">
          <span>⚙️</span> Configuración
        </Link>
        <button onClick={handleLogout} className="flex items-center gap-2 p-2 hover:bg-purple-800 rounded">
          <span>🚪</span> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
