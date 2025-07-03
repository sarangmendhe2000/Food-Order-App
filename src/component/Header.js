import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Food Delivery Logo" />
      </div>

      <div>
        <p>Order Your Food Now</p>
      </div>

      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Know us</li>
          <li>Contact</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
