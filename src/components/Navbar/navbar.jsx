import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useGlobalContext } from "../../context/userContext";
import { CartContext } from "../../context/CartContext";
import { signOutUser } from "../../utils/firebase.config";

const Navbar = () => {
	const { currentUser } = useGlobalContext();
	const { cartCount } = useContext(CartContext);
	return (
		<nav className="h-24 w-screen border-b-2 border-black px-6">
			<div className="flex items-center justify-between pr-2">
				<Link to={"/"} className="cursor-pointer">
					<img src={Logo} alt={"logo"} className="h-24 w-24" />
				</Link>
				<div
					id="navbar-items"
					className="flex items-center justify-between gap-2 text-lg md:gap-6 md:text-2xl"
				>
					<Link to={"/shop"}>SHOP</Link>
					<Link to={"/about"}>ABOUT</Link>
					{currentUser ? (
						<Link
							className="border border-red-400 p-2 text-red-800  duration-300 hover:bg-white"
							to={"/"}
							onClick={signOutUser}
						>
							LOG OUT
						</Link>
					) : (
						<Link
							to={"/login"}
							className=" border border-black p-2 duration-300 hover:bg-black hover:text-white "
						>
							SIGN IN
						</Link>
					)}

					<div
						to={""}
						className="relative cursor-pointer"
						onClick={() => document.getElementById("my-drawer").click()}
					>
						<BsBag size={36} />
						<span className="absolute top-3 right-3 text-sm font-semibold">
							{cartCount}
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
