import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const {  user,handleLogout } = useUser();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const useName = localStorage.getItem("userName");

     const username = user?.username || "Guest"
  return (
    <div className='flex w-full p-4 shadow-lg bg-blue-500 h-auto md:h-[60px] items-center justify-between top-0 left-0'>
      <div className='flex items-center'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/3737/3737151.png'
          alt='logo'
          className='w-10 h-10'
        />
        <p className='font-bold text-blue-300 text-lg'>MOB-BUDDY</p>
      </div>
      <ul className='hidden md:flex space-x-4 text-xl font-semibold mt-2 md:mt-0'>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/cart'>
          <li className='relative'>
            Cart <span className='rounded-full  bg-blue-300'> {cart?.length || 0}</span>
          </li>
        </NavLink>
        <NavLink to='/order'>
          <li>Orders</li>
        </NavLink>
      </ul>
      <div className='w-[600px] md:w-auto mt-2 md:mt-0'>
        <input
          type='text'
          placeholder='Search here...'
          className='w-full md:w-[300px] lg:w-[400px] p-2 rounded-lg'
        />
      </div>
      <ul className='flex items-center space-x-4 mt-2 md:mt-0'>
        {useName? (
          <>
            <li className='font-medium text-black'>{useName}</li>
            <button
              className='bg-blue-300 rounded-xl p-1 hover:bg-slate-300 font-medium'
              onClick={handleLogout}
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <NavLink to='/Login'>
              <button className='bg-blue-300 rounded-xl p-2 hover:bg-slate-300 font-medium'>
                Login
              </button>
            </NavLink>
            {/* <NavLink to='/SignUp'>
              <button className='bg-slate-300 rounded-xl p-2 hover:bg-slate-500 font-medium'>
                SignUp
              </button>
            </NavLink>*/}
          </> 
        )}
      </ul>
      <div
        className='md:hidden flex items-center mt-2 relative'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <button className='p-2 m-2'>☰</button>
        {menuOpen && (
          <div className='absolute top-full right-0 h-50 w-[250px]  bg-slate-300 p-4 flex flex-col space-y-4 shadow-lg z-50'>
          <button
            className='text-black text-xl mb-4 self-end'
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <NavLink to='/' onClick={() => setMenuOpen(false)} className='text-black'>
            Home
          </NavLink>
          <NavLink
            to='/cart'
            onClick={() => setMenuOpen(false)}
            className='text-black'
          >
           Cart  <span className='rounded-full  bg-blue-300'>{cart?.length || 0}</span>
          </NavLink>
          <NavLink
            to='/order'
            onClick={() => setMenuOpen(false)}
            className='text-black'
          >
            Orders
          </NavLink>
        </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
