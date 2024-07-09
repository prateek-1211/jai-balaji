import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlexMachineImage from '../Product/Flex-machine.png';
import IronStandImage from '../Product/IronStand.png';
import VinylPrintingImage from '../Product/VinylPrinting.png';
import FlodingStandImage from '../Product/FlodingStand.png';
import OneWayVisionImage from '../Product/OneWayVision.png';
import GlowsingBoradImage from '../Product/GlowsingBorad.png';
import CanopyImage from '../Product/Canopy.png';
import VisitingCardImage from '../Product/VisitingCard.png';
import pampletImage from '../Product/pamplet.png';

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="main-container py-11">
      <h1
      data-aos="fade-up"
      className="text-3xl md:text-5xl font-bold text-center underline">
        My Services
      </h1>
      <div
      data-aos="zoom-in" 
      className='w-11/12 md:w-3/4 mx-auto mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="h-[350px] text-black rounded-xl cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg space-y-4">
              <div className='h-56  flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div> 
  );
}

const data = [
  {
    name: `Flex Banner`,
    img: FlexMachineImage,
  },
  {
    name: `Iron Stand`,
    img: IronStandImage,
  },
  {
    name: `Vinyl Printing`,
    img: VinylPrintingImage,
  },
  {
    name: `Folding Standy`,
    img: FlodingStandImage,
  },
  {
    name: `One Way Vision`,
    img: OneWayVisionImage,
  },
  {
    name: `Glowsign Board`,
    img: GlowsingBoradImage,
  },
  {
    name: `Canopy`,
    img: CanopyImage,
  },
  {
    name: `Visiting Card`,
    img: VisitingCardImage,
  },
  {
    name: `Pamphlet`,
    img: pampletImage,
  },
]

export default Services;