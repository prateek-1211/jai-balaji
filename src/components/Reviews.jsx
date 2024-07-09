import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Reviews(){
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return(
    <div className="main-container py-11">
        <h1
        data-aos="fade-up"
        className="text-5xl font-bold text-center underline">
        Our Reviews
        </h1>
    <div className='w-3/4 m-auto '>
      <div className="mt-10">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="h-[200px] text-black rounded-xl  cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg service1 space-y-4">

            <div
            data-aos="fade-up"
            data-aos-delay="200"
             className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <h2>{d.P}</h2>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    </div> 
  );
}
const data = [
  {
    name: `Anand Sharma`,
    P: `Hi, I am Anand Sharma I had a wallpaper made for my house which is very well made and their service is very good.`,
  },
  {
    name: `Pushpa Mishra`,
    P: `Hi, I am Pushpa Mishra I had a Flex for my Shop which is very fantastic and well made and their service is very good.`,
  },
  {
    name: `Nidhi Mishra`,
    P: `Hi, I am Nidhi Mishra I had a Visiting Card made for my Profession which is very well made and their service is very good.`,
  },
  {
    name: `Vaishnavi Sharma`,
    P:    `Hi, I am Vaishnavi Sharma I had a wallpaper made for my room they are so pretty which is very well made and their service is very good.`,
  },
]



export default Reviews;
