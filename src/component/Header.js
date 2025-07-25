import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log("Header render")

  const onlineStatus = useOnlineStatus();

  useEffect(()=>{
    console.log("useEffect called")
  }, [loginBtn])
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Food Delivery Logo" />
      </div>

      <div className="tagline">
        <p>Order Your Food Now</p>
      </div>

      <div className="navbar">
        <ul>
          <li>
             <Link to ="/">Home</Link>
            </li>
          <li>
            <Link to = "/about">About</Link>
            </li>
          <li>
            <Link to = "/contact">Contact</Link>
          </li>
           <li>
            <Link to = "/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
          
          <li>
            <button
              className="login"
              onClick={() => {
                if(loginBtn === "Login")
                {
                   setLoginBtn("Logout");
                   console.log("Logout");
                }
                else
                {
                  setLoginBtn("Login")
                }
               
              }}
            >
              {loginBtn}

            </button>
          </li>
          <li style={{fontSize: "16px"}} > {onlineStatus ? "🟢 Online" : "🔴 Offline" } </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
