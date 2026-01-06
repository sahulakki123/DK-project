import React from 'react'
import logo from './assets/dklogo.jpeg'
import "./Tailwind.css"
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {


    
  return (
   <>
        <header className="w-full flex h-15 justify-around items-center bg-amber-50 text-gray-950 cursor-pointer">
            <img src={logo} alt="" className="h-14 rounded-2xl" />
               <nav>
                   <ul className=" hidden sm:flex gap-10 font-bold texT-2xl ">
                       <li className="hover:text-sky-400 cursor-pointer"><Link to="/home">HOME</Link></li>
                       <li className="hover:text-sky-400 cursor-pointer"><Link to="/products">PRODUCTS</Link></li>
                       <li className="hover:text-sky-400 cursor-pointer"><Link to="/contact">CONTACT</Link></li>
                       <li className="hover:text-sky-400 cursor-pointer"><Link to="/offers">OFFERS</Link></li>
                   </ul>
               </nav>
                <div className='hidden sm:flex gap-10 font-bold texT-2xl'>
                    <li className="hover:text-sky-400 font-bold cursor-pointer"><Link to="/login">LOG IN</Link></li>
                    <li className="hover:text-sky-400 font-bold cursor-pointer"><Link to="/signup">SIGN UP</Link></li>
                    <li className="hover:text-sky-400 font-bold cursor-pointer"><Link to="/profile">PROFILE</Link></li>
               </div> 
        </header>
        <Outlet/>

        <h1>footer</h1>
   </>
  )
}

export default Layout