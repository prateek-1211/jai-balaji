import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Jai Balaji Flex-Printing");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Services",
      link: "/services",
      id: 3,
    },

  ]);



  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
