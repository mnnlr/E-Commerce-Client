import React from "react";
import mainimg from "../assets/Cracker_Assets/Our-Products.jpg";
import OurTeam from "../components/OurTeam";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <img src={mainimg} alt="banner" className="w-full"></img>
      </div>
      <div className="flex flex-row space-x-2 mt-16">
        <div>
          <h2 className="text-3xl font-bold">What We Are?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatum ipsa
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">What We Are?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus 
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">What We Are?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatum ipsam
          </p>
        </div>
      </div>
        <OurTeam/>
    </div>
  );
};

export default AboutUs;
