import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {

    
         const navigate=useNavigate()
  
            const NextPage = () => {
      navigate("/Signup");

    };
    return (
        <footer className="w-full bg-white border-t mt-15">
            <div className="max-w-7xl mx-auto px-10 py-14 flex flex-col md:flex-row justify-between gap-10 ">


                <div>
                    <h2 className="text-3xl font-bold mb-6">Products</h2>

                    <ul className="space-y-3 text-lg">
                        <li className=" cursor-pointer">Whey Protein</li>
                        <li className=" cursor-pointer">Creatine</li>
                        <li className=" cursor-pointer">Pre Workout</li>
                        <li className="cursor-pointer">Mass Gainer</li>
                        <li className="cursor-pointer">Multivitamins | Fish Oil</li>
                        <li className="cursor-pointer">Others</li>
                    </ul>
                </div>


                <div className="flex  flex-col gap-4 w-full md:w-100">
                    <div className="flex gap-0.5">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="border rounded-2xl px-6 py-4 text-lg outline-none"
                        />
                        <button className="bg-black text-white rounded-full px-8 py-4 text-lg w-fit hover:bg-red-600 transition-colors cursor-pointer" onClick={NextPage}>
                            Sign up
                        </button>
                    </div>

                </div>
            </div>


            <div className="flex justify-center gap-6 py-6">
                <FaInstagram className="text-2xl cursor-pointer" />
                <FaFacebookF className="text-2xl cursor-pointer" />
                <FaWhatsapp className="text-2xl cursor-pointer" />
                <FaYoutube className="text-2xl cursor-pointer" />
            </div>


            <div className="border-t px-6 py-4 flex justify-between text-sm">
                <p>© 2026 Body Energy - Workout Supplements</p>
                <p className="cursor-pointer">Terms and Policies</p>
            </div>
        </footer>
    );
};

export default Footer;