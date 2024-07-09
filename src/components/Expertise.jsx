import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <div className="mt-2">
      <h1 className="mb-16 text-3xl md:text-5xl font-bold underline text-center">
        Our Expertise
      </h1>
      {/* box section */}

      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="box-container flex flex-col md:flex-row items-center py-16"
      >
        <div
        data-aos="fade-right"
        className="flex text-white justify-center w-full md:w-1/2 mb-8 md:mb-0">
          {/* text container */}
          <div className="w-11/12 md:w-2/3 text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              We work on all these things here
            </h1>
            <p>
              Address - Nai Sadak, Kailash Talkies, Lashkar, Gwalior (district of M.P.)
              If you have any work to do, contact on the number given below.
            </p>
            <button className="text-xl md:text-2xl px-4 py-2 bg-orange-400 rounded-full shadow-lg">
              9826279576
            </button>
          </div>
        </div>
        <div
        data-aos="fade-left"
        className="flex justify-center w-full md:w-1/2">
          {/* skills container */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-11/12 md:w-2/3">
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Flex Banner
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Iron Stand
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Vinyl Printing
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Folding Standy
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              One Way Vision
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Glowsign Board
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Canopy
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Visiting Card
            </p>
            <p className="bg-gray-300 px-3 py-2 rounded-full hover:bg-orange-400 cursor-pointer">
              Pamphlet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
