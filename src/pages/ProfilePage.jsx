import ProfileItem from '../components/Profile/profileItem';
import Button from '../components/Profile/button';

const profileItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0dfecdeaf36ef2d93ddfa7c693b89bdf12f3985296d6fcb59163118878cba557?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    title: "Nombre Completo",
    subtitle: "Edita tu nombre o apellido"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/77384110823e8b4c086e06027083adbb7870641f5ac49f5b409d0bfb14c26112?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    title: "tucorreo@gmail.com",
    subtitle: "Edita o cambia tu email"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc1d5c589e72b46c973ff4851bdb4271b209c6a8f12a71a42ad3fd1281bba36d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    title: "Verifica tu cuenta",
    subtitle: "Confirma tu cuenta email"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e8aef443018211d164debe56de0d0dc91f0e9badec26a3333b50fd26493fbac?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa",
    title: "Cambia tu contraseña",
    subtitle: "Edita la contraseña de tu email"
  }
];

function ProfilePage() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-36 pb-5 bg-white max-md:px-5 max-md:pt-24">
      <section className="flex flex-col items-center max-w-full w-[455px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3b3522566df1be588c6fc28ac3a7bc58b6e34f95d24ac33bba5ed0719399765?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="User profile" className="object-contain max-w-full rounded-full aspect-square w-[175px]" />
        <div className="flex z-10 flex-col mt-16 max-w-full text-base text-black w-[420px] max-md:mt-10">
          {profileItems.map((item, index) => (
            <ProfileItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
        <div className="flex gap-4 items-center self-stretch py-5 text-lg font-semibold text-center text-white capitalize whitespace-nowrap">
          <Button text="Editar" color="yellow" />
          <Button text="Guardar" color="indigo" />
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;