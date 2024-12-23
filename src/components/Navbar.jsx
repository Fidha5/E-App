
import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { handleLogout } = useUser();
  const { cart } = useCart();
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const useName = localStorage.getItem("userName");

  return (
    <nav className="flex w-full p-4 shadow-lg bg-blue-500 items-center justify-between top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png"
          alt="logo"
          className="w-10 h-10"
        />
        <p className="font-bold text-blue-300 text-lg">MOB-BUDDY</p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-white text-lg font-medium">
        <NavLink to="/" className="hover:text-blue-300">
          Home
        </NavLink>
        <NavLink to="/cart" className="hover:text-blue-300">
          Cart <span className="rounded-full bg-blue-300 px-2"> {cart?.length || 0}</span>
        </NavLink>
        <NavLink to="/orders" className="hover:text-blue-300">
          Orders
        </NavLink>
      </ul>

      {/* Search Bar */}
      <div className=" md:block w-[300px] lg:w-[400px]">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full p-2 outline-none border-gray-700 border-b-2 bg-transparent text-white placeholder-white"
        />
      </div>

      {/* User Actions */}
      <div className=" md:flex items-center space-x-4">
        {useName ? (
          <>
            <span className="font-medium text-white">{useName}</span>
            <button
              className=" bg-blue-300 text-black rounded-xl p-1 hover:bg-slate-300 font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/Login">
            <button className="bg-blue-300 text-black rounded-xl p-2 hover:bg-slate-300 font-medium">
              Login
            </button>
          </NavLink>
        )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center relative">
        <button
          className="p-2 text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute top-full right-0 w-[250px] bg-blue-600 p-4 flex flex-col space-y-4 shadow-lg">
            <button
              className="text-white text-xl self-end"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-blue-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-blue-300"
            >
              Cart <span className="rounded-full bg-blue-300 px-2">{cart.length || 0}</span>
            </NavLink>
            <NavLink
              to="/orders"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-blue-300"
            >
              Orders
            </NavLink>
            {useName ? (
              <button
                onClick={handleLogout}
                className="text-white bg-blue-300 p-2 rounded hover:bg-slate-400"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/Login"
                onClick={() => setMenuOpen(false)}
                className="text-white bg-blue-300 p-2 rounded hover:bg-blue-400"
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
