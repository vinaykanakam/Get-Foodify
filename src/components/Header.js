import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=> {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    const OnlineStatus= useOnlineStatus();


    console.log("Header Render");

    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    Online Status : {OnlineStatus? "🟢" : "🔴"}
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                
                <button className="Login"
                    onClick={()=>{
                        btnNameReact==="Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button>
            </ul>
        </div>
    </div>
    )
}

export default  Header;