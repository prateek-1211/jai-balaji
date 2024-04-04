import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
      title: "",
      link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
        <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            {/* <i class=" text-5xl fa-brands fa-aws"></i> */}
            <h1 className="text-4xl"> Flex Banner </h1>
            <p>
            Banner and banner printing for promotional or advertising purposes. Wall covering or decoration works.
             Totem printing type. Flex Banner digital printing used in facade and building stretching.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <h1 className="text-4xl">Iron Stand</h1>
            <p>
            Iron stand stands are commonly used for custom-printed display banner stands at events, exhibitions, sales,
             marketing, and product display. They can also be used to sell LIC insurance policies.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            {/* <i class=" text-5xl fa-solid fa-server"></i> */}
            <h1 className="text-4xl">Vinyl Printing</h1>
            <p>
            advertising, such as product or service advertising,
            campaign advertisements, or establishing company brands. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
