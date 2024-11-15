import React from 'react';

const DeleteUserModal = ({ user, isOpen, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(user); // Llama a la función para eliminar el usuario
    onClose(); // Cierra el modal después de la eliminación
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Eliminar Usuario</h2>
        <p className="mb-4">¿Estás seguro de que deseas eliminar al usuario <strong>{user.nombre} {user.apellido_pat} {user.apellido_mat}</strong>?</p>
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
          <button
            onClick={onClose}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
