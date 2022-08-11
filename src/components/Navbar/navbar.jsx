import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen h-24 px-6">
      <div className="flex items-center justify-between pr-2">
        <Link to={"/"} className="cursor-pointer">
          <img src={Logo} alt={"logo"} className="w-24 h-24" />
        </Link>

        <Link
          to={"/shop"}
          className="text-2xl underline-offset-8 hover:underline "
        >
          SHOP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
