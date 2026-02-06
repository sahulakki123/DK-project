import { useNavigate, Link, Outlet } from "react-router-dom";
import logo from "./assets/logo12.png";
import "./Tailwind.css";
import Foter from "./Foter";

const Layout = () => {
  const navigate = useNavigate();

  const isLoggedin = localStorage.getItem("isLoggedin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("currentuser");
    navigate("/home");
  };

  return (
    <>
      <header className="w-full bg-amber-200 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          <img src={logo} alt="logo" className="h-14 rounded-xl cursor-pointer" onClick={() => navigate("/home")} />

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8 font-serif text-lg font-semibold">

              <li className="hover:text-gray-500 transition"><Link to="/home">Home</Link></li>

              <li>
                <select onChange={(e) => navigate(e.target.value)} className="bg-amber-200 cursor-pointer outline-none font-serif font-semibold hover:text-gray-500 appearance-none transition " >
                  <option value="">Products</option>
                  <option value="/creatines">Creatine</option>
                  <option value="/Pre_Workout">Pre Workout</option>
                  <option value="/Peanut">Peanut</option>
                  <option value="/Multivitamins">Fish Oil</option>
                  <option value="/Mass_Gainer">Mass Gainer</option>
                </select>
              </li>

              <li className="hover:text-gray-500 transition"><Link to="/contact">Contact</Link></li>

              <li className="hover:text-gray-500 transition"><Link to="/offers">Offers</Link></li>
            </ul>
          </nav>



          <div className="flex items-center gap-4 font-serif font-semibold">

            {!isLoggedin ? (
              <>
                <Link to="/signup" className="px-4 py-1 rounded-lg border border-gray-700 hover:bg-gray-900 hover:text-white transition">Sign Up</Link>

                <Link to="/login" className="px-4 py-1 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition">Log In</Link>
              </>
            ) : (

              <div>
                <Link to="/profile" className="hover:text-gray-500 transition mr-10">Profile</Link>



                <button onClick={handleLogout} className="px-4 py-1 rounded-lg bg-red-600 text-white hover:bg-red-500 transition">Log Out</button>
              </div>

            )}

          </div>
        </div>
      </header>

      <Outlet />
      <Foter />
    </>
  );
};

export default Layout;
