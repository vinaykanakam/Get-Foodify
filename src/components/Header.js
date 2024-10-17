import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { HomeIcon, InformationCircleIcon, PhoneIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const OnlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="sticky top-0 flex justify-between items-center bg-purple-200 h-20 px-6 shadow-lg z-10"> 
            <div className="flex items-center h-full">
                <img className="w-20 h-auto" src={LOGO_URL} alt="Logo" /> 
            </div>
            <h1 className="text-2xl font-bold text-black text-center flex-grow">Foodify</h1>
            <div className="flex items-center space-x-6">
                <ul className="flex items-center space-x-4">
                    <li className="flex items-center text-black hover:text-gray-600 transition">
                        <HomeIcon className="h-5 w-5 mr-1" />
                        <Link to="/">Home</Link>
                    </li>
                    <li className="flex items-center text-black hover:text-gray-600 transition">
                        <InformationCircleIcon className="h-5 w-5 mr-1" />
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="flex items-center text-black hover:text-gray-600 transition">
                        <PhoneIcon className="h-5 w-5 mr-1" />
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="flex items-center text-black hover:text-gray-600 transition">
                        <ShoppingCartIcon className="h-5 w-5 mr-1" />
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                </ul>
                <button
                    className="ml-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-400 transition"
                    onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button>
            </div>
        </div>
    );
};

export default Header;