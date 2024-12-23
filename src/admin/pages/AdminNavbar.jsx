// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

// const AdminNavbar = () => {
//     const {handleLogout} =useUser()
//     const [menuOpen, setMenuOpen] = useState(false);
//     return(
//     <nav className="bg-gray-700 text-slate-200 shadow-lg">
//         <div className="container mx-auto p-1 flex items-center justify-center">
//             {/* <h2 className="text-5xl font-extrabold">ADMIN PANEL</h2>
//             Optional: You can add a logout button or other items here */}
//             <img src='	https://cdn-icons-png.flaticon.com/512/3737/3737151.png' alt='logo' className='w-10 h-10 '/>
//             <p className='font-bold text-blue-300 text-5xl'>MOB-BUDDY</p>
//         </div>
//         <button
//           className="text-slate-200 text-2xl md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//         <div className="flex flex-col-r gap-2 p-4 items-center justify-center">
//             <Link 
//                 to="/admin" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
//                 Dashboard
//             </Link>
//             <Link 
//                 to="/admin/manage-products" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
//                 Manage Products
//             </Link>
//             <Link 
//                 to="/admin/manage-users" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
//                 Manage Users
//             </Link>
//             <Link 
//                 to="/admin/manage-orders" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
//                 Manage Oders
//             </Link>
//             <Link 
//                 to="/Login" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium" onClick={ handleLogout }>
//               Logout
//             </Link>
//         </div>
//     </nav>
// )
// };

// export default AdminNavbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const AdminNavbar = () => {
  const { handleLogout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'menu-overlay') {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-700 text-slate-200 shadow-lg">
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png"
            alt="logo"
            className="w-10 h-10"
          />
          <p className="font-bold text-blue-300 text-2xl md:text-3xl">MOB-BUDDY</p>
        </div>
        {/* Hamburger Icon */}
        <button
          className="text-slate-200 text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/admin"
            className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/manage-products"
            className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
          >
            Manage Products
          </Link>
          <Link
            to="/admin/manage-users"
            className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
          >
            Manage Users
          </Link>
          <Link
            to="/admin/manage-orders"
            className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
          >
            Manage Orders
          </Link>
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium bg-blue-400"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
            id="menu-overlay"
            className="fixed inset-0 z-40 bg-black bg-opacity-50 top-[71px]"
            onClick={handleOutsideClick}
          >
            <div className="fixed right-0 w-full bg-gray-800 text-center space-y-4 p-4 md:hidden z-50">
            <Link
                to="/admin"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Dashboard
            </Link>
            <Link
                to="/admin/manage-products"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Manage Products
            </Link>
            <Link
                to="/admin/manage-users"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Manage Users
            </Link>
            <Link
                to="/admin/manage-orders"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Manage Orders
            </Link>
            <button
                className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium bg-blue-400"
                onClick={() => {
                handleLogout();
                setMenuOpen(false);
                }}
            >
                Logout
            </button>
            </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
