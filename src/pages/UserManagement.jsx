import AdminLayout from '../components/Admin/AdminLayout';
import UserList from '../components/Admin/UserList';

function UserManagement() {
  return (
    <AdminLayout>
      <UserList />
    </AdminLayout>
  );
}

export default UserManagement;