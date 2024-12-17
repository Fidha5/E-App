import React from 'react'

function Navbar() {
  return (
    <div className='flex w-screen p-4 shadow-lg bg-slate-200 h-auto md:h-[60px] items-center justify-between'>
       <div className='flex'>
                <img src='	https://cdn-icons-png.flaticon.com/512/3737/3737151.png' alt='logo' className='w-10 h-10 '/>
                <p className='font-bold text-blue-300 text-lg'>MOB-BUDDY</p>
       </div>
        <ul className='hidden md:flex space-x-4 text-xl font-semiboldvmt-2 md:mt-0'>
            <li>Home</li>
            <li>Cart</li>
            <li>Orders</li>
        </ul>
        <div className='w-full md:w-auto mt-2 md:mt-0'>
             <input type='text' placeholder='Search here...' className='w-full md:w-[300px] lg:w-[400px] p-2 rounded-lg' />
        </div>
        <ul className='flex items-center space-x-4 mt-2 md:mt-0'>
          <li className='hidden  font-medium text-gray-500'>Username</li>
          <button className='bg-slate-300 rounded-xl p-1 hover:bg-slate-500 font-medium' >Logout</button>
        </ul>
        <div className="md:hidden flex items-center mt-2">
          <button className="p-2 m-2"> ☰ </button>
        </div>
    </div>
  )
}

export default Navbar
