import React from 'react'
import logo from './assets/dklogo.jpeg'
import "./Tailwind.css"
import im from './assets/Eveay.jpg'


const Header = () => {



  
  return (
    <>
             <header className="w-full flex h-15 justify-around items-center  bg-amber-50 text-gray-950 cursor-pointer list-none">
            <img src={logo} alt="" className="h-14 rounded-2xl" />
            <nav>
                <ul className=" hidden sm:flex gap-10 font-bold texT-2x">
                </ul>
            </nav>
                <div className='hidden sm:flex gap-10 font-bold texT-2xl'>
            <li className="hover:text-sky-400 font-bold cursor-pointer">SIGN UP</li>
            <li className="hover:text-sky-400 font-bold cursor-pointer">LOG IN</li>
            </div>
        </header>
        <img src={im} alt="" height="100%" width="100%"/>

    </>
  )
}

export default Header