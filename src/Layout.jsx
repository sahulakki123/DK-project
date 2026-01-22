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
                        <select onChange={(e) => navigate(e.target.value)}>
                        <option >PRODUCTS</option>
                        <option >Whey Protein</option>
                        <option value="creatines">Creatine</option>
                        <option value="Pre_Workout">Pre Workout</option>
                        <option value="Peanut">Peanut</option>
                        <option value="Multivitamins">Fish Oil</option>
                        <option value="Mass_Gainer">Mass Gainer</option>
                        </select>
                        </Link></li>
                       <li className="hover:text-gray-400 cursor-pointer"><Link to="/contact">CONTACT</Link></li>
                       <li className="hover:text-gray-400 cursor-pointer"><Link to="/offers">OFFERS</Link></li>
                   </ul>
               </nav>
                <div className='hidden sm:flex gap-10 font-serif texT-2xl font-bold'>
                    <li className="hover:text-gray-400 cursor-pointer"><Link to="/login">LOG IN</Link></li>
                    <li className="hover:text-gray-400  cursor-pointer"><Link to="/signup">SIGN UP</Link></li>
                    <li className="hover:text-gray-400  cursor-pointer"><Link to="/profile">PROFILE</Link></li>
               </div> 
        </header>
        <Outlet/>

        <Foter/>
   </>
  )
}

export default Layout