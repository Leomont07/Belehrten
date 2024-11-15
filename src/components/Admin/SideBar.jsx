import { Link } from 'react-router-dom';

const Sidebar = () => {
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
        <Link to="/logout" className="flex items-center gap-2 p-2 hover:bg-purple-800 rounded">
          <span>🚪</span> Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
