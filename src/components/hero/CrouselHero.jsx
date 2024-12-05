import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Custom styles
import GreetingCard from "../cardHolder/GreetingCard";
import navneet1t from "../../assets/navneet1template.png"
import navneet2t from "../../assets/navneet2template.png"
import navneet3t from "../../assets/navneet3template.png"
import navneet4t from "../../assets/navneet4template.png"
import navneet5t from "../../assets/navneet5template.png"
import navneet6t from "../../assets/navneet6template.png"
import navneet7t from "../../assets/navneet7template.png"
import navneet8t from "../../assets/navneet8template.png"
import navneet9t from "../../assets/navneet9template.png"
import navneet10t from "../../assets/navneet10template.png"
import navneet11t from "../../assets/navneet11template.png"


const HeroCarousel = () => {
  
  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true, // Enable autoplay for tablets
          autoplaySpeed: 3000, 
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // Enable autoplay for mobile
          autoplaySpeed: 3000, 
        },
      },
    ],
  };

 
  const cardData = [
    { image: navneet1t, title: "use this template", id: "navneet1"  },
    { image: navneet3t, title: "use this template", id: "navneet3"  },
    { image: navneet2t, title: "use this template", id: "navneet2"  },
    { image: navneet6t, title: "use this template", id: "navneet6"  },
    { image: navneet5t, title: "use this template", id: "navneet5"  },
    { image: navneet7t, title: "use this template", id: "navneet7"  },
    { image: navneet4t, title: "use this template", id: "navneet4"  },
    { image: navneet8t, title: "use this template", id: "navneet8"  },
    { image: navneet11t, title: "use this template", id: "navneet11" },
    { image: navneet9t, title: "use this template", id: "navneet9" },
    { image: navneet10t, title: "use this template", id: "navneet10" },
  ];

   return (

    <div className=" mx-auto px-4  md:mt-12 mb-8 w-5/6" >
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <div key={index} className="p-3">
            <GreetingCard image={data.image} title={data.title} id={data.id} />
            {/* {alert(data.id)} */}
          </div>
        ))}
      </Slider>
    </div>


  );
};

export default HeroCarousel;
