import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

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
            <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"> About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
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