import UserItem from './UserItem.jsx';

const UserTable = ({ users }) => {
  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Usuarios</h2>
      <hr className="border-gray-300 mb-6" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Id</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Nombre</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Apellido Paterno</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Apellido Materno</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Edad</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Correo</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Fecha registro</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Contraseña</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Verificación</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Token</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserItem key={user.id_usuario} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
