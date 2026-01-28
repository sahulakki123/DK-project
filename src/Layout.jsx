import { useNavigate } from "react-router-dom";
import logo from './assets/logo12.png'
import "./Tailwind.css"
import { Link, Outlet } from 'react-router-dom'
import Foter from './Foter'




const Layout = () => {



const navigate = useNavigate();
  return (
   <>
        <header className="w-full flex h-15 justify-around items-center bg-amber-200 text-gray-950 cursor-pointer list-none">
            <img src={logo} alt="" className="h-14 rounded-2xl" />
               <nav>
                   <ul className=" hidden sm:flex gap-10 font-serif texT-2xl font-bold">


                       <li className="hover:text-gray-400 cursor-pointer"><Link to="/home">HOME</Link></li>
                        <li className="hover:text-gray-400 cursor-pointer"><Link to="/products">
                        <select onChange={(e) => navigate(e.target.value)} className="bg-amber-200 appearance-none duration-300 ease-in-out outline-none  cursor-pointer">
                        <option >PRODUCTS</option>
                        <option >WHEY PROTEIN</option>
                        <option value="creatines">CREATINE</option>
                        <option value="Pre_Workout">PRE WORKOUT</option>
                        <option value="Peanut">PEANUT</option>
                        <option value="Multivitamins">FISH OIL</option>
                        <option value="Mass_Gainer">MASS GAINER</option>
                        </select>
                        </Link></li>
                       <li className="hover:text-gray-400 cursor-pointer"><Link to="/contact">CONTACT</Link></li>
                       <li className="hover:text-gray-400 cursor-pointer"><Link to="/offers">OFFERS</Link></li>
                   </ul>
               </nav>
                <div className='hidden sm:flex gap-10 font-serif texT-2xl font-bold'> 

                    <li className="hover:text-gray-400  cursor-pointer"><Link to="/profile">
                    <select onChange={(e) => navigate(e.target.value)} className="bg-amber-200 appearance-none border-none outline-none ring-0 focus:outline-none focus:ring-0 shadow-none px-4 py-1 rounded-xl cursor-pointer ">
                        <option >PROFILE</option>
                        <option value="/login">LOG IN</option>
                        <option value="/signup">SIGN UP</option>
                        <option value="/myData">MY DATA</option>
                        </select>
                    </Link></li>
               </div> 
        </header>
        <Outlet/>

        <Foter/>
   </>
  )
}

export default Layout