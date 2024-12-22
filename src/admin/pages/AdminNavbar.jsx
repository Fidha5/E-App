import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return(
    <nav className="bg-gray-700 text-slate-200 shadow-lg">
        <div className="container mx-auto p-1 flex items-center justify-center">
            {/* <h2 className="text-5xl font-extrabold">ADMIN PANEL</h2>
            Optional: You can add a logout button or other items here */}
            <img src='	https://cdn-icons-png.flaticon.com/512/3737/3737151.png' alt='logo' className='w-10 h-10 '/>
            <p className='font-bold text-blue-300 text-5xl'>MOB-BUDDY</p>
        </div>
        <div className="flex flex-col-r gap-2 p-4 items-center justify-center">
            <Link 
                to="/admin" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
                Dashboard
            </Link>
            <Link 
                to="/admin/manage-products" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
                Manage Products
            </Link>
            <Link 
                to="/admin/manage-users" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
                Manage Users
            </Link>
            <Link 
                to="/admin/manage-orders" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
                Manage Oders
            </Link>
            <Link 
                to="/admin/reports" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium">
                Reports
            </Link>
        </div>
    </nav>
)
};

export default AdminNavbar;