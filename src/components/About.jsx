import { useState } from "react";
import bannerImage from "../assets/gorav.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "15+ Above Experience in Graphic Designing",
    desc1: `Hi, I am Gorav Mishra, founder of Jai Balaji.
    Flex Printing I started this business 15 years ago, starting with a small shop. During this, we started a big-scale business.
    and complete a big project like banner design in a pvr, shopping mall, market, etc., and today they are huge.
    amount of happy customers satisfaction with my work..`,
    desc2: ` Our Specialties in Flex Printing, Iron Stand, Vinyl Printing, Folding Standy,
    One-Way Vision, GlowSign Board, Canopy, Visiting Card, Pamplets, etc..
`,
    // actionButton: {
    //   title: "Read More..",
    //   link: "/readmore",
    // },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full h-[450px] flex justify-center ">
            <img
              className="w-fit rounded-full"
              src={data.image}
              alt="Gorav Mishra"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              {/* <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
