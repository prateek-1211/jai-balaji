import bannerImage from "../assets/logo.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Founder of Jai Balaji Flex Printing"], // Strings to display
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container grid grid-cols-1 md:grid-cols-2 items-center py-10  px-5"
    >
      {/* first dabba */}
      <div className="flex items-center justify-center text-white order-2 md:order-1 py-11">
        <div className="w-full md:w-2/3 space-y-4 md:ms-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Hi, I am</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Gorav Mishra</h1>
          <h2 className="text-2xl md:text-3xl">
            & I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <div className="icons-container flex space-x-5 mt-5">
            <a href="https://www.facebook.com/profile.php?id=100075630856373&sk=about" className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-3xl md:text-4xl fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sharmaprateek18/?igsh=MTFic2tvNnVzZ3Q2bw%3D%3D" className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-3xl md:text-4xl fa-instagram"></i>
            </a>
          </div>
          <a href="https://www.linkedin.com/in/sharmaprateek38/" className="text-xl md:text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg mt-5 inline-block">
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}
      <div
      data-aos="zoom-in" 
      className="flex justify-center order-1 md:order-2 mb-10 md:mb-0">
        <img className="rounded-full h-40 w-40 md:h-56 md:w-56 shadow-lg" src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
