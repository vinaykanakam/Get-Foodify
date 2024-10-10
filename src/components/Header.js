import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";
import { useSelector } from "react-redux";

const Header = ()=> {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    const OnlineStatus= useOnlineStatus();

    const {loggedInUser}= useContext(UserContext);
    //console.log("Header Render");

    const cartItems= useSelector((store)=>store.cart.items)
    console.log(cartItems);

    return(
    <div className="flex justify-between bg-pink-100 shadow-lg lg:bg-pink-50 sm:bg-blue-50">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status : {OnlineStatus? "🟢" : "🔴"}
                </li>
                <li className="px-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-2">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-2">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-2">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart- ({cartItems.length} items)</Link>
                </li> 
                
                <button className="login"
                    onClick={()=>{
                        btnNameReact==="Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login");
                    }}
                >{btnNameReact}
                </button>
                <li className="px-2 ">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    )
}

export default  Header;