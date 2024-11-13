

function ProfileItem({ icon, title, subtitle }) {
  return (
    <div className="flex gap-8 items-center px-5 py-1.5 mt-6 w-full bg-gray-50 rounded-3xl min-h-[65px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
        <div>{title}</div>
        <div className="mt-2">{subtitle}</div>
      </div>
    </div>
  );
}

export default ProfileItem;