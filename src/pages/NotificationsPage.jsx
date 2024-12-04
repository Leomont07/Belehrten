import { useEffect, useState } from 'react';
import NotificationItem from '../components/General/NotificationItem';
import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import { ENDPOINTS } from '../config/endpoint';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem('session')) || {};
    setUserId(storedProfileData.id_usuario || null);
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(ENDPOINTS.NOTIFICACION + '/notificacion/getNotifications?id_usuario=' + userId);

        // Verificar si la respuesta es exitosa (status 200)
        if (!response.ok) {
          throw new Error('Error al obtener las notificaciones');
        }

        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
      }
    };

    fetchNotifications();
  }, [userId]); 

  return (
    <div>
      <Header />
      <section className="flex overflow-hidden flex-col items-center px-20 pt-52 pb-28 text-white bg-white max-md:px-5 max-md:py-24">
        <div className="flex flex-col px-5 pt-5 pb-24 w-full bg-gray-50 rounded-3xl max-w-[928px] min-h-[507px] max-md:max-w-full">
          <h1 className="text-3xl font-bold text-black max-md:max-w-full">Notificaciones</h1>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <NotificationItem
                key={index}
                type={notification.type || 'normal'} // Asegúrate de que el backend envíe un campo `type`
                content={notification.descripcion}
              />
            ))
          ) : (
            <p className="text-black">No hay notificaciones disponibles.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default NotificationsPage;
