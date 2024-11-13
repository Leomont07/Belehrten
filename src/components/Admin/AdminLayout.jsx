import Sidebar from './Sidebar';
import Header from './Header';

function AdminLayout({ children }) {
  return (
    <div className="overflow-hidden bg-stone-50">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;