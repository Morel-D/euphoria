import bannerImg from "../../assets/home/banner.jpg";
import EI1 from  "../../assets/home/EI1.jpg";
import EI2 from  "../../assets/home/EI2.jpg";

// Banner Page .........................

const homeBanner = 
{
    firstPath: "T-shirt/Tops",
    bgImage : bannerImg,
    title: "Summer Value Pack",
    secondPath: "cool/colorful/comfy",
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


export {homeBanner, firstSection}