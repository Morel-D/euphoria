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

export {homeBanner, firstSection, secondSection, thirdSectionFirstPart, thirdSectionSecondPart}