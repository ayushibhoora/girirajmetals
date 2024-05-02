import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Category.css"; // Import your custom CSS file for styling
import Image1 from "../../assets/category/glass1.png";
import Image2 from "../../assets/category/glass2.png";
import Image3 from "../../assets/category/glass3.png";
import Image4 from "../../assets/category/glass4.png";
import Image5 from "../../assets/category/glass5.png";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5.5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5
  }
};

const Category = () => {
  return (
    <div>
      <div style={{marginBottom: "40px"}}>
      <Heading className="heading" title="Brassware" subtitle={""} />
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={1500} > 
          <div className="image-container">
            <img src={Image1} alt="Item 1" />
            <div className="hover-content">
              <Button text="Shop Now" />
            </div>
          </div>
          <div className="image-container">
            <img src={Image2} alt="Item 2" />
            <div className="hover-content">
              <Button text="Shop Now" />
            </div>
          </div>
          <div className="image-container">
            <img src={Image3} alt="Item 3" />
            <div className="hover-content">
              <Button text="Shop Now" />
            </div>
          </div>
          <div className="image-container">
            <img src={Image3} alt="Item 3" />
            <div className="hover-content">
              <Button text="Shop Now" />
            </div>
          </div>
          <div className="image-container">
            <img src={Image3} alt="Item 3" />
            <div className="hover-content">
              <Button text="Shop Now" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
