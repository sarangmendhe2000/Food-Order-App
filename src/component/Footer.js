import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () =>{
  return(
      <div className="footer">
          <a className="icon" href="https://facebook.com">  <FaFacebook className="social-icon" /> 
          </a>

          <a className="icon" href="https://twitter.com">  <FaTwitter className="social-icon" /> 
          </a>

          <a className="icon" href="https://instagram.com">  <FaInstagram className="social-icon" /> 
          </a>

      </div>

  );
};  

export default Footer ;