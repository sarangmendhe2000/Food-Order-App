import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="Food Delivery Logo"
        />
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
        </ul>
      </div>
    </div>
  );
};

export default Header ; 