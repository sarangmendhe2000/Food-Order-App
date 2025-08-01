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
    <div className="flex justify-between items-center text-center h-[15vh] w-full bg-[rgba(240,240,240,0.9)] sticky top-0 z-20 shadow-md">
      <div className="logo">
        <img className="w-24 rounded-full" src={LOGO_URL} alt="Food Delivery Logo" />
      </div>

      <div className="flex-[1] text-center text-3xl font-bold font-['Segoe UI' , 'Helvetica Neue' , 'sans-serif'] text-[#e67e22] tracking-[1px] animate-popIn ">
        <p>Order Your Food Now</p>
      </div>

      <div className="navbar">
        <ul className="flex mr-6">
          <li className="p-2 text-2xl text-[rgb(0,0,0)] ">
             <Link to ="/">Home</Link>
            </li>
          <li className="p-2 text-2xl text-[rgb(0,0,0)] ">
            <Link to = "/about">About</Link>
            </li>
          <li className="p-2 text-2xl text-[rgb(0,0,0)] ">
            <Link to = "/contact">Contact</Link>
          </li>
           <li className="p-2 text-2xl text-[rgb(0,0,0)] ">
            <Link to = "/instamart">Instamart</Link>
          </li>
          <li className="p-2 text-2xl text-[rgb(0,0,0)] ">Cart</li>
          
          <li className="p-2 text-2xl text-[rgb(0,0,0)] ">
            <button
              className="px-1.5  rounded-xl cursor-pointer hover:px-[8px] hover:font-bold"
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
          <li className="p-2.5" style={{fontSize: "16px"}} > {onlineStatus ? "🟢 Online" : "🔴 Offline" } </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
