import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';
import { ENDPOINTS } from '../../config/endpoint';

const UserItem = ({ user, onUpdateUser, onDeleteUser }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEdit = (updatedUser) => {
    fetch(`${ENDPOINTS.USERS}/${updatedUser.id_usuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: updatedUser.nombre,
        apellido_pat: updatedUser.apellido_pat,
        apellido_mat: updatedUser.apellido_mat,
        edad: updatedUser.edad,
        psw: updatedUser.psw, // Enviar solo si hay un cambio en la contraseña
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Usuario actualizado:', data);
        onUpdateUser(data.user); 
        alert('Usuario actualizado correctamente')
      })
      .catch((error) => {
        console.error('Error al actualizar usuario:', error);
        alert('Ocurrió un error al modificar el usuario. Por favor, intenta nuevamente.');
      });
  };

  const handleDelete = (deleteUser) => {
    // Cambiar el estado del usuario a 0 (eliminado)
    fetch(`${ENDPOINTS.USERS}/delete/${deleteUser.id_usuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 0, // Establecer el estado del usuario a 0 (eliminado)
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Usuario actualizado (status cambiado a 0):', data);
        onUpdateUser(data.user); 
        alert('Usuario eliminado correctamente')
      })
      .catch((error) => {
        console.error('Error al eliminar al usuario:', error);
        alert('Ocurrió un error al cambiar el status del usuario. Por favor, intenta nuevamente.');
      });
  };

  return (
    <>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-4 text-gray-800">{user.id_usuario}</td>
        <td className="py-3 px-4 text-gray-800">{user.nombre}</td>
        <td className="py-3 px-4 text-gray-800">{user.apellido_pat}</td>
        <td className="py-3 px-4 text-gray-800">{user.apellido_mat}</td>
        <td className="py-3 px-4 text-gray-800">{user.edad}</td>
        <td className="py-3 px-4 text-gray-800">{user.correo}</td>
        <td className="py-3 px-4 text-gray-800">{user.fecha_registro}</td>
        <td className="py-3 px-4 text-gray-800">********</td>
        <td className="py-3 px-4 text-gray-800">{user.isVerified ? 'Sí' : 'No'}</td>
        <td className="py-3 px-4 text-gray-800">
          <button
            className="text-blue-500 hover:text-blue-700 mx-1"
            onClick={() => setModalOpen(true)}
          >
            <FaEdit />
          </button>
          <button
            className="text-red-500 hover:text-red-700 mx-1"
            onClick={() => setDeleteModalOpen(true)}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
      <EditUserModal
        user={user}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleEdit}
      />
      <DeleteUserModal
        user={user}
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default UserItem;
