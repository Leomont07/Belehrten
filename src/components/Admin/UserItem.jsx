// src/components/UserItem.js
import React from 'react';

const UserItem = ({ user }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4 text-gray-800">{user.id_usuario}</td>
      <td className="py-3 px-4 text-gray-800">{user.nombre}</td>
      <td className="py-3 px-4 text-gray-800">{user.apellido_pat}</td>
      <td className="py-3 px-4 text-gray-800">{user.apellido_mat}</td>
      <td className="py-3 px-4 text-gray-800">{user.edad}</td>
      <td className="py-3 px-4 text-gray-800">{user.correo}</td>
      <td className="py-3 px-4 text-gray-800">{user.fecha_registro}</td>
      <td className="py-3 px-4 text-gray-800">{user.psw}</td>
      <td className="py-3 px-4 text-gray-800">{user.isVerified ? 'Sí' : 'No'}</td>
      <td className="py-3 px-4 text-gray-800">{user.verificationToken}</td>
    </tr>
  );
};

export default UserItem;
