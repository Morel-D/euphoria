import bannerImg from "../../assets/home/banner.jpg";
import EI1 from  "../../assets/home/EI1.jpg";
import EI2 from  "../../assets/home/EI2.jpg";

import NA1 from "../../assets/home/NA1.png";
import NA2 from "../../assets/home/NA2.png";
import NA3 from "../../assets/home/NA3.png";
import NA4 from "../../assets/home/NA4.png";

import SZ1 from "../../assets/home/SZ1.png";
import SZ2 from "../../assets/home/SZ2.png";
import SZ3 from "../../assets/home/SZ3.png";
import SZ4 from "../../assets/home/SZ4.png";
import SZ5 from "../../assets/home/SZ5.png";

import FM1 from "../../assets/home/FM1.png";
import FM2 from "../../assets/home/FM2.png";
import FM3 from "../../assets/home/FM3.png";
import FM4 from "../../assets/home/FM4.png";
import FM5 from "../../assets/home/FM5.png";
import FM6 from "../../assets/home/FM6.png";
import FM7 from "../../assets/home/FM7.png";
import FM8 from "../../assets/home/FM8.png";

import FW1 from "../../assets/home/FW1.png";
import FW2 from "../../assets/home/FW2.png";
import FW3 from "../../assets/home/FW3.png";
import FW4 from "../../assets/home/FW4.png";






// Banner Page .........................

const homeBanner = 
{
    firstPath: "T-shirt / Tops",
    bgImage : bannerImg,
    title: "Summer Value Pack",
    secondPath: "cool / colorful / comfy",
    btnTitle: "Shop Now",
}

const firstSection = 
[
    {
        id: 1,
        bgImage: EI1,
        smallTitle: "Low Price",
        title: "High Coziness",
        label: "UPTO 50% OFF",
        link: "Explore Items",
        bgSize: "98%",
        bottom: "0px"
    },

    {
        id: 2,
        bgImage: EI2,
        smallTitle: "Beyoung Presents",
        title: "Breezy Summer Style",
        label: "UPTO 50% OFF",
        link: "Explore Items",
        bgSize: "100%",
        bottom: "5px"
    }
    
]

const secondSection = 
[
    {
        id: 1,
        bgImage: NA1,
        title: "Knitted Joggers"
    },
    {
        id: 2,
        bgImage: NA2,
        title: "Full Sleeve"
    },
    {
        id: 3,
        bgImage: NA3,
        title: "Active T-Shirts"
    },    {
        id: 4,
        bgImage: NA4,
        title: "Urban Shirts"
    }
]

const thirdSectionFirstPart = 
[
    {
        id: 1,
        bgImage: SZ1,
        title: "Hawaiian Shirts",
        smallTitle: "Dress up in summer vibe",
        label: "UP TO 50% OFF",
        btnTitle: "SHOP NOW",
        notice: ""
        
    },

    {
        id: 2,
        bgImage: SZ2,
        title: "Printed T-Shirt",
        smallTitle: "New Designs Every Week",
        label: "UP TO 40% OFF",
        btnTitle: "SHOP NOW",
        notice: "Limited Stock"
        
    },

    {
        id: 3,
        bgImage: SZ3,
        title: "Cargo Joggers",
        smallTitle: "Move with style & comfort",
        label: "UP TO 50% OFF",
        btnTitle: "SHOP NOW",
        notice: ""
        
    }
]


const thirdSectionSecondPart = 
[
    {
        id: 1,
        bgImage: SZ4,
        title: "Urban Shirts",
        smallTitle: "Live In Confort",
        label: "UP TO 60% OFF",
        btnTitle: "SHOP NOW",
        
    },

    {
        id: 2,
        bgImage: SZ5,
        title: "Oversized T-Shirts",
        smallTitle: "Street Style Icon",
        label: "UP TO 60% OFF",
        btnTitle: "SHOP NOW",
        
    },

]


const fifthSection = 
[
    {
        id: 1,
        bgImage: FM1,
        title: "Shirts",
        link: "Explore Now!",
    },

    {
        id: 2,
        bgImage: FM2,
        title: "Printed T-Shirts",
        link: "Explore Now!",
    },

    {
        id: 3,
        bgImage: FM3,
        title: "Plain T-Shirt",
        link: "Explore Now!",
    },

    {
        id: 4,
        bgImage: FM4,
        title: "Polo T-Shirt",
        link: "Explore Now!",
    },

    {
        id: 5,
        bgImage: FM5,
        title: "Hoodies & Sweetshirt",
        link: "Explore Now!",
    },

    {
        id: 6,
        bgImage: FM6,
        title: "Jeans",
        link: "Explore Now!",
    },

    {
        id: 7,
        bgImage: FM7,
        title: "Activewear",
        link: "Explore Now!",
    },

    {
        id: 8,
        bgImage: FM8,
        title: "Boxers",
        link: "Explore Now!",
    },
]

const sixthSection = 
[
    

    {
        id: 1,
        bgImage: FW1,
        title: "Hoodies & Sweetshirt",
        link: "Explore Now!",
    },

    {
        id: 2,
        bgImage: FW2,
        title: "Coats & Parkas",
        link: "Explore Now!",
    },

    {
        id: 3,
        bgImage: FW3,
        title: "Tees & T-Shirt",
        link: "Explore Now!",
    },

    {
        id: 4,
        bgImage: FW4,
        title: "Boxers",
        link: "Explore Now!",
    },

]

export {homeBanner, firstSection, secondSection, thirdSectionFirstPart, thirdSectionSecondPart, fifthSection, sixthSection}