import { useState } from "react";

const Feedback = () => {
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
          Our Customer Reviews
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <h1 className="text-4xl">*****</h1>
            <p>
              Hi, I am Anand Sharma I had a wallpaper made for my house which is very well made
               and their service is very good.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <h1 className="text-4xl">***</h1>
            <p>
            Hi, I am Pushpa Mishra I had a Flex for my Shop which is very fantastic and well made
             and their service is very good.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <h1 className="text-4xl">****</h1>
            <p>
            Hi, I am Nidhi Mishra I had a Visiting Card made for my Profession which is very well
             made and their service is very good.
            </p>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <h1 className="text-4xl">***</h1>
            <p>
            Hi, I am Vaishnavi Sharma I had a wallpaper made for my room they are so pretty which 
            is very well made and their service is very good.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
