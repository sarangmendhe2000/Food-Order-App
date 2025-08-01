import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () =>{
  return(
      <div className="h-[6vh] w-full flex items-center justify-center bg-linear-to-r from-[#d6d6d6] to-[#eaeaea] text-[#333]"> 
          <a className="p-[10px] text-[15px] text-[rgb(234,222,245)]" href="https://facebook.com">  <FaFacebook className="text-[#333] text-2xl transition-colors duration-300 ease-in-out hover:text-[#e67e22]" /> 
          </a>

          <a className="p-[10px] text-[15px] text-[rgb(234,222,245)]" href="https://twitter.com">  <FaTwitter className="text-[#333] text-2xl transition-colors duration-300 ease-in-out hover:text-[#e67e22]" /> 
          </a>

          <a className="p-[10px] text-[15px] text-[rgb(234,222,245)]" href="https://instagram.com">  <FaInstagram className="text-[#333] text-2xl transition-colors duration-300 ease-in-out hover:text-[#e67e22]" /> 
          </a>

      </div>

  );
};  

export default Footer ;