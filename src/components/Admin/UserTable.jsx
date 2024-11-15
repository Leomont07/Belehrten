import UserItem from './UserItem.jsx';

const UserTable = ({ users, onUpdateUser}) => {
  // Filtrar usuarios con status diferente de 0
  const filteredUsers = users.filter((user) => user.status !== 0);

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Edad</th>
          <th>Correo</th>
          <th>Fecha Registro</th>
          <th>Contraseña</th>
          <th>Verificado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <UserItem key={user.id_usuario} user={user} onUpdateUser={onUpdateUser} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
