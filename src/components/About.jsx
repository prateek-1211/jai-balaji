import { useState } from "react";
import bannerImage from "../assets/gorav.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "15+ Years of Experience in Graphic Designing",
    desc1: `Hi, I am Gorav Mishra, founder of Jai Balaji Flex Printing. I started this business 15 years ago, beginning with a small shop. Since then, we have grown into a large-scale business, completing significant projects like banner designs for PVRs, shopping malls, markets, etc. Today, we have a vast number of satisfied customers who appreciate our work.`,
    desc2: `Our specialties include Flex Printing, Iron Stands, Vinyl Printing, Folding Standys, One-Way Vision, GlowSign Boards, Canopies, Visiting Cards, Pamphlets, etc.`,
  });

  return (
    <div className="main-container bg-gray-200 border py-16">
      <h1 
      data-aos="fade-up"
      className="text-center pb-16 text-3xl md:text-5xl underline font-bold">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5 md:px-15">
        {/* Image container */}
        <div
        data-aos="zoom-in" 
        className="flex justify-center">
          <img
            className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover"
            src={data.image}
            alt="Gorav Mishra"
          />
        </div>

        {/* Text container */}
        <div className="flex justify-center">
          <div className="space-y-5 w-full md:w-2/3">
            <h1
            data-aos="fade-left"
            data-aos-delay="200"
             className="text-3xl md:text-5xl font-semibold">{data.title}</h1>
            <p
             data-aos="fade-up"
             data-aos-delay="200"
             className="text-base md:text-lg">{data.desc1}</p>
            <p
             data-aos="fade-up"
             data-aos-delay="300"
             className="text-base md:text-lg">{data.desc2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
