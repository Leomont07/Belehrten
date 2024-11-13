import { useEffect, useState } from 'react';
import UserListItem from './UserListItem';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch('http://localhost:3002/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al obtener los usuarios:', error));
  }, []);

  return (
    <section className="mx-8 mt-5 max-w-[1110px] max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full text-2xl font-bold text-black whitespace-nowrap">
        <h2>Usuarios</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/921cd920af2aa623465b457ab5f47fb76249cb0cafa56064e3edfda4daec2fa8?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
          alt=""
          className="object-contain shrink-0 my-auto w-3.5 aspect-[0.64]"
        />
      </div>
      <hr className="shrink-0 mt-5 max-w-full h-px border border-solid border-neutral-200 w-[1110px]" />
      <div className="flex flex-wrap gap-10 items-center mt-7 w-full">
        {users.map(user => (
          <UserListItem key={user.id_usuario} user={user} />
        ))}
      </div>
    </section>
  );
}

export default UserList;
