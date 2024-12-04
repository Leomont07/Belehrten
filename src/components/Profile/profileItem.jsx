function ProfileItem({ icon, title, value, editable, name, onChange, type = 'text' }) {
  return (
    <div className="flex gap-8 items-center px-5 py-1.5 mt-6 w-full bg-gray-50 rounded-3xl shadow">
      <img src={icon} alt="" className="object-contain w-[30px]" />
      <div className="flex flex-col w-[280px]">
        <div>{title}</div>
        {editable ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-2 px-2 py-1 rounded-md border border-gray-300"
          />
        ) : (
          <div className="mt-2">{value}</div>
        )}
      </div>
    </div>
  );
}


export default ProfileItem;
