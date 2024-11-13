import NotificationItem from '../components/General/NotificationItem';

const notificationData = [
  { type: 'important', content: 'Este contenido podría interesarte' },
  { type: 'normal', content: 'Este contenido podría interesarte' },
  { type: 'important', content: 'Este contenido podría interesarte' },
  { type: 'normal', content: 'Este contenido podría interesarte' },
];

function NotificationsPage() {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-52 pb-28 text-white bg-white max-md:px-5 max-md:py-24">
      <div className="flex flex-col px-5 pt-5 pb-24 w-full bg-gray-50 rounded-3xl max-w-[928px] min-h-[507px] max-md:max-w-full">
        <h1 className="text-3xl font-bold text-black max-md:max-w-full">
          Notificaciones
        </h1>
        {notificationData.map((notification, index) => (
          <NotificationItem
            key={index}
            type={notification.type}
            content={notification.content}
          />
        ))}
      </div>
    </section>
  );
}

export default NotificationsPage;