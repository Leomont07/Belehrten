import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState('');

  useEffect(() => {
    // Sincronizar datos iniciales cuando se abra el modal o el usuario cambie
    setFormData(user);
    setError(''); // Limpiar errores al abrir el modal
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => {
    if (formData.psw === password) return true;
    if (!password) return true; // Contraseña opcional, no validar si está vacía
    const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&./])[A-Za-z\d@$!%?&./]{8,}$/;
    const consecutiveNumbers = /(\d)\1/;
    if (!regex.test(password) || consecutiveNumbers.test(password)) {
      setError(
        'La contraseña debe tener al menos 8 caracteres, incluyendo letras, números, símbolos y no debe contener números consecutivos.'
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.psw)) return; // Validar contraseña
    onSave(formData); // Llama al servicio de edición
    onClose(); // Cierra el modal
  };

  const handleCancel = () => {
    setFormData(user); // Restablecer el formulario al estado original
    setError(''); // Limpiar errores
    onClose(); // Cerrar el modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Editar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="apellido_pat">Apellido Paterno</label>
            <input
              type="text"
              id="apellido_pat"
              name="apellido_pat"
              value={formData.apellido_pat || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="apellido_mat">Apellido Materno</label>
            <input
              type="text"
              id="apellido_mat"
              name="apellido_mat"
              value={formData.apellido_mat || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="edad">Edad</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="psw">Contraseña (opcional)</label>
            <input
              type="password"
              id="psw"
              name="psw"
              value={formData.psw || ''}
              onChange={(e) => {
                handleChange(e);
                setError(''); // Limpiar errores mientras se escribe
              }}
              className={`w-full px-4 py-2 border rounded ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Guardar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;