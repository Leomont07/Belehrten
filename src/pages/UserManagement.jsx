// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Admin/SideBar';
import UserTable from '../components/Admin/UserTable';
import { ENDPOINTS } from '../config/endpoint';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the backend
        fetch(ENDPOINTS.USERS + '/getUsers')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log("Usuarios obtenidos:", data);
            })
            .catch(error => console.error('Error al obtener los usuarios:', error)); // Cambiar `console.err` a `console.error`
    }, []);
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow bg-gray-100">
                <UserTable users={users} />
            </main>
        </div>
    );
};

export default UserManagement;
