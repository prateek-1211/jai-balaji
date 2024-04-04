import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          Our Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">We work on all these things here It happens</h1>
              <p>
                Address - Nai Sadak, kailash Talkies, Lashkar, Gwalior(district of M.P.)
                if you have any work to do Contact on the number given below
              </p>
              <button className=" text-2xl px-4 py-2 bg-orange-400 rounded-full shadow-lg">
                9826279576
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointer">
                Flex Banner
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Iron Stand
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                VinyL Printing
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Folding Standy
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                One Way Vision
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Glowsign Board
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Canopy
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Visiting Card
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">
                Pamphlet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
