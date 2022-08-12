import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
const Navbar = () => {
   return (
      <nav className="w-screen h-24 px-6 border-b-2 border-black">
         <div className="flex items-center justify-between pr-2">
            <Link to={"/"} className="cursor-pointer">
               <img src={Logo} alt={"logo"} className="w-24 h-24" />
            </Link>
            <div id="navbar-items" className="flex items-center justify-between gap-6 text-2xl">
               <Link to={"/shop"}>SHOP</Link>
               <Link to={"/about"}>ABOUT</Link>
               <Link to={"/login"} className=" border border-black p-2 hover:text-white hover:bg-black duration-300 ">
                  SIGN IN
               </Link>
               <Link to={"/"} className="relative">
                  <BsBag size={36} />
                  <span className="absolute top-3 right-3 text-sm"> 12 </span>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
