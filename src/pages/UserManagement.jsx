import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Admin/SideBar';
import UserTable from '../components/Admin/UserTable';
import { ENDPOINTS } from '../config/endpoint';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch(`${ENDPOINTS.USERS}/getUsers`) // Construimos la URL completa
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log("Usuarios obtenidos:", data);
      })
      .catch((error) =>
        console.error('Error al obtener los usuarios:', error)
      );
  }, []);

  // Función para actualizar un usuario en la lista
  const onUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id_usuario === updatedUser.id_usuario ? updatedUser : user
      )
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-gray-100 overflow-x-auto">
        <div className="p-4 w-full max-w-full">
          <UserTable users={users} onUpdateUser={onUpdateUser}/>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
