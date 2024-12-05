import React from 'react';
import GreetingCard from './GreetingCard';
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




function AllCardsGrid() {

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
    <div className='w-4/5 mx-auto'>
        
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
       {cardData.map((data, index) => (
          <div key={index} className="">
            <GreetingCard image={data.image} title={data.title} id={data.id}/>
          </div>
        ))}

    </div>
    </div>
    
  );
}

export default AllCardsGrid;
