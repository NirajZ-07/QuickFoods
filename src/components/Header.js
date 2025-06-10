import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
  
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"> About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button onClick={() =>{
              loginBtnName === "Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login");
            }} className="login">{loginBtnName}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;