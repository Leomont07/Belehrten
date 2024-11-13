

function ProfileButton() {
  return (
    <button className="flex gap-5 justify-center items-center self-stretch px-2.5 py-2 my-auto bg-pink-900 rounded-3xl shadow-sm min-h-[40px] w-[200px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf774988e9f7e867596689a9dd755c53bf74fb8ed50790c9f10a9bb60cc04b0e?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square fill-white"
      />
      <span className="self-stretch my-auto">Mi perfil</span>
    </button>
  );
}

export default ProfileButton;