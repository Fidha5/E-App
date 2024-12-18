import React,{ useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { user, setUser } = useContext(UserContext)
  const { cart } = useCart();
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("username"); // Remove username from localStorage
    navigate("/");
  }
  return (
    <div className='flex w-screen p-4 shadow-lg bg-slate-200 h-auto md:h-[60px] items-center justify-between'>
       <div className='flex'>
                <img src='	https://cdn-icons-png.flaticon.com/512/3737/3737151.png' alt='logo' className='w-10 h-10 '/>
                <p className='font-bold text-blue-300 text-lg'>MOB-BUDDY</p>
       </div>
        <ul className='hidden md:flex space-x-4 text-xl font-semiboldvmt-2 md:mt-0'>
           <NavLink to ={'/'}><li>Home</li></NavLink>
           <NavLink to ={'/cart'}><li className="relative">Cart
           ({cart?.length || 0 }) 
            </li>
            </NavLink>
          <NavLink to ={'/order'}><li>Orders</li></NavLink>
        </ul>
        <div className='w-full md:w-auto mt-2 md:mt-0'>
             <input type='text' placeholder='Search here...' className='w-full md:w-[300px] lg:w-[400px] p-2 rounded-lg' />
        </div>
        <ul className='flex items-center space-x-4 mt-2 md:mt-0'>
          {user ?(
            <>
          <li className=' font-medium text-gray-500'>{user}</li>
          <button className='bg-slate-300 rounded-xl p-1 hover:bg-slate-500 font-medium'onClick={handleLogout} >
            LogOut</button>
          </>
          ):(
            <>
            <NavLink to='/Login'>
            <button className='bg-slate-300 rounded-xl p-2 hover:bg-slate-500 font-medium'>
              Login
            </button>
          </NavLink>
          <NavLink to="/SignUp">
              <button className="bg-slate-300 rounded-xl p-2 hover:bg-slate-500 font-medium">
                SignUp
              </button>
            </NavLink>
          </>
          )}

        </ul>
        <div className="md:hidden flex items-center mt-2">
          <button className="p-2 m-2"> ☰ </button>
        </div>
    </div>
  )
}

export default Navbar;
