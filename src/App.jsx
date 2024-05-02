import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Category3 from "./components/Category/Category3";
import Category4 from "./components/Category/Category4";

// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";

import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUnderline } from "react-icons/fa6";

// const BannerData = {
//   discount: "30% OFF",
//   title: "Fine Smile",
//   date: "10 Jan to 28 Jan",
//   image: headphone,
//   title2: "Air Solo Bass",
//   title3: "Winter Sale",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#f42c37",
// };

// const BannerData2 = {
//   discount: "30% OFF",
//   title: "Happy Hours",
//   date: "14 Jan to 28 Jan",
//   image: smartwatch2,
//   title2: "Smart Solo",
//   title3: "Winter Sale",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#2dcc6f",
// };

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar/>
      <Hero handleOrderPopup={handleOrderPopup} />
      
      <Category />
      <Category2 />
      <Category3 />
      <Category4 />

      {/* <Products /> */}
      {/* <Services /> */}
      {/* <Banner data={BannerData} />
      <Banner data={BannerData2} /> */}
      {/* <Blogs />
      <Partners /> */}
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
