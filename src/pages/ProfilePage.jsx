import { useState, useEffect } from 'react';
import ProfileItem from '../components/Profile/profileItem';
import Button from '../components/Profile/button';
import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import { ENDPOINTS } from '../config/endpoint';

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    nombre: '',
    apellido_pat: '',
    apellido_mat: '',
    edad: '',
    psw: '',
  });
  const [isEditable, setIsEditable] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem('session')) || {};
    console.log('Datos:' + JSON.stringify(storedProfileData));
    setProfileData({
      nombre: storedProfileData.nombre || '',
      correo: storedProfileData.correo || '',
      apellido_pat: storedProfileData.apellido_pat || '',
      apellido_mat: storedProfileData.apellido_mat || '',
      edad: storedProfileData.edad || '',
      psw: '', // Para cambiar la contraseña
    });

    // Suponiendo que el id del usuario está almacenado en el localStorage
    setUserId(storedProfileData.id_usuario || null);
  }, []);

  const handleEdit = () => {
    console.log("Estado editable:", true); 
    setIsEditable(true);
    // Confirmación de que se cambia el estado
  };

  const handleCancel = () => {
    setIsEditable(false);
    // Confirmación de que se cambia el estado
  };

  const validatePassword = (password) => {
    if (!password) return true; // Si está vacío, no valides, ya que es opcional
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&./])[A-Za-z\d@$!%?&./]{8,}$/;
    const consecutiveNumbers = /(\d)\1/;
    if (!regex.test(password) || consecutiveNumbers.test(password)) {
      alert(
        'La contraseña debe tener al menos 8 caracteres, incluyendo letras, números, símbolos y no debe contener números consecutivos.'
      );
      return false;
    }
    return true;
  };
  
  // Enviar los datos al backend para actualizar la base de datos

  const handleSave = async () => {
    if (!userId) {
      alert('No se ha encontrado el ID de usuario');
      return;
    }

    if (!validatePassword(profileData.psw)) {
      return; // Detener si la contraseña no es válida
    }

    setIsSaving(true); // Activar el estado de guardado

    try {
      const response = await fetch(`${ENDPOINTS.USERS}/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el perfil');
      }

      const data = await response.json();

      if (data.message === 'Usuario actualizado correctamente') {
        // Si la actualización es exitosa, guardar los datos en el localStorage
        localStorage.setItem('profileData', JSON.stringify(profileData));
        setIsEditable(false);
        alert('Perfil actualizado correctamente.');
      } else {
        alert('Hubo un problema al actualizar el perfil. Inténtalo nuevamente.');
      }
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      alert('Hubo un error al actualizar el perfil. Por favor, inténtalo más tarde.');
    }

    setIsSaving(false); // Desactivar el estado de guardado
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const profileItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dfecdeaf36ef2d93ddfa7c693b89bdf12f3985296d6fcb59163118878cba557",
      title: 'Nombre Completo',
      value: profileData.nombre,
      editable: isEditable,
      name: 'nombre', // Ajustado correctamente
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dfecdeaf36ef2d93ddfa7c693b89bdf12f3985296d6fcb59163118878cba557",
      title: 'Apellido Paterno',
      value: profileData.apellido_pat,
      editable: isEditable,
      name: 'apellido_pat', // Ajustado correctamente
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dfecdeaf36ef2d93ddfa7c693b89bdf12f3985296d6fcb59163118878cba557",
      title: 'Apellido Materno',
      value: profileData.apellido_mat,
      editable: isEditable,
      name: 'apellido_mat', // Ajustado correctamente
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e8aef443018211d164debe56de0d0dc91f0e9badec26a3333b50fd26493fbac",
      title: 'Contraseña',
      value: profileData.psw,
      editable: isEditable,
      name: 'psw',
      type: 'password',
    }
  ];


  return (
    <div>
      <Header />
      <main className="flex overflow-hidden flex-col items-center px-20 pt-36 pb-5 bg-white max-md:px-5 max-md:pt-24">
        <section className="flex flex-col items-center max-w-full w-[455px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3b3522566df1be588c6fc28ac3a7bc58b6e34f95d24ac33bba5ed0719399765?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="User profile" className="object-contain max-w-full rounded-full aspect-square w-[175px]" />
          <div className="flex z-10 flex-col mt-16 max-w-full text-base text-black w-[420px] max-md:mt-10">
            {profileItems.map((item, index) => (
              <ProfileItem
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                editable={item.editable}
                name={item.name}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="flex gap-4 items-center self-stretch py-5 text-lg font-semibold text-center text-white capitalize whitespace-nowrap">
            {!isEditable ? (
              <Button text="Editar" color="yellow" onClick={handleEdit} />
            ) :(
              <Button text="Cancelar" color="yellow" onClick={handleCancel} />
            )}
            
            <Button text="Guardar" color="indigo" onClick={handleSave} disabled={isSaving} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProfilePage;
