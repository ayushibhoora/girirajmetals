import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Image1 from "../../assets/hero/carouselcropped.png";
import Image2 from "../../assets/hero/carouselcropped.png";
import Image3 from "../../assets/hero/carouselcropped.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = ({ handleOrderPopup }) => {
  return (
    <div className="container" style={{marginBottom: "40px" }}>
      <div className="w-full h-64 sm:h-auto object-cover">
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-full h-64 sm:h-auto object-cover"
                      />
                    </div>                 
                </div>
              </div>
            ))}
          </Carousel>
        </div>
    </div>
  );
};

export default Hero;
