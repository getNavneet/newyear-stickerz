import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Custom styles
import HeroCarousel from "./CrouselHero";



const HeroSection = () => {
  
  return (
    <div
      className="bg-gradient-to-b from-red-400  to-green-500  flex flex-wrap flex-col md:justify-around items-center w-full  md:flex-row"
    >
      {/* Left Section */}
      
      <div className="flex items-center justify-center md:w-[40%] pt-8 pb-4 p-6  ">
  <p className="text-xl md:text-3xl text-gray-700  font-bold leading-[1.5rem] text-left">
    New Year, New Energy! <br />
   
    <span
  className=" text-gray-100 bg-clip-text   animate-pulse "
>
 Create Your Personalized New Year Wish Card! 🎉🎉
</span>
  </p>
  </div>

      {/* right Section */}
      <div className="flex w-[100vw] md:w-[55%]">
          <div className="w-full">
          <HeroCarousel/>
          </div> 
      </div>

    </div>
  );
};

export default HeroSection;