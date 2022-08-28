import "./header.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import {Link} from "react-router-dom";
import { useRef } from "react";

const Header = () => {
    return ( <div className="header">
        <div className="left-header">
            <Link to={'/'}><h1>STORE</h1></Link>
        </div>
        <div className="right-header">           
            <Link to={"/"}><button id="login-button" ><i className="fa-solid fa-house"></i>Home</button></Link>
            <Link to={"/cart"}><button id="cart-button"><i className="fa-solid fa-cart-shopping"></i>Cart</button></Link>
           
            <Link to={"/login"}><button id="login-button" ><i className="fa-solid fa-user"></i>Login</button></Link>
        </div>
        
    </div> );
}
 
export default Header;