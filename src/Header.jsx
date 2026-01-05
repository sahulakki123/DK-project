import React from 'react'
import logo from './assets/dklogo.jpeg'
import "./Tailwind.css"

const Header = () => {
  return (
    <>
             <header className="w-full flex h-15 justify-around items-center  bg-amber-50 text-gray-950 cursor-pointer">
            <img src={logo} alt="" className="h-14 rounded-2xl" />
            <nav>
                <ul className=" hidden sm:flex gap-10 font-bold texT-2xl ">
                    <li className="hover:text-sky-400 cursor-pointer">HOME</li>
                    <li className="hover:text-sky-400 cursor-pointer">PRODUCTS</li>
                    <li className="hover:text-sky-400 cursor-pointer">CONTACT</li>
                    <li className="hover:text-sky-400 cursor-pointer">OFFERS</li>
                </ul>
            </nav>
                <div className='hidden sm:flex gap-10 font-bold texT-2xl'>
            <li className="hover:text-sky-400 font-bold cursor-pointer">SIGN UP</li>
            <li className="hover:text-sky-400 font-bold cursor-pointer">PROFILE</li>
            </div>
        
        </header>
    </>
  )
}

export default Header