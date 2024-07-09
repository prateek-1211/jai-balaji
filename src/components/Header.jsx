import { useState } from "react";
import { Link } from "react-scroll";
import logo from '../assets/logo.png';
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [brandName] = useState("Jai Balaji Flex-Printing");
  const [menuLinks] = useState([
    { title: "Home", link: "home", id: 1 },
    { title: "About", link: "about", id: 2 },
    { title: "Services", link: "services", id: 3 },
    { title: "Reviews", link: "reviews", id: 4 },
    { title: "Expertise", link: "expertise", id: 5 },
    { title: "Contact Us", link: "contact", id: 6 },
  ]);

  return (
    <div className="h-20 border main flex justify-between items-center px-4 sm:px-16 bg-gray-200 
    fixed top-0 left-0 right-0 z-10 m-auto ">
      <div
      data-aos="zoom-in" 
      className="flex items-center">
        <img src={logo} alt="Logo" className="rounded-full h-10 mr-4" />
        <h1 className="text-xl sm:text-2xl font-bold">{brandName}</h1>
      </div>
      <div className="hidden sm:flex space-x-6">
        {menuLinks.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-orange-600 cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div>
        { click && content }
      </div>
      <div className="sm:hidden"> 
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <IoMenu /> }
        </button>
        {/* Add a mobile menu dropdown if necessary */}
      </div>
    </div>
  );
};

export default Header;