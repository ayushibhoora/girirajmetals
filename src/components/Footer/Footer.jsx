import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import logo from "../../assets/SVG/logo.svg";
const FooterLinks = [
  {
    title: "Copperware",
    link: "/#",
  },
  {
    title: "Brassware",
    link: "/#about",
  },
  {
    title: "Bronzeware",
    link: "/#contact",
  },
  {
    title: "Puja Utensils",
    link: "/#blog",
  },
  {
    title: "God Idols",
    link: "/#blog",
  }
];

const Footer = () => {
  return (
    <div className="bg-red-900 mt-8">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
          <a
              href="#"
              className="text-white font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <img src={logo} alt="" style={{ width: "120px", height: "auto" }}/>
            </a>
            <p className="text-white dark:text-white/70  lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-white mt-4">
              Made with 💖 by The Coding Journey
            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-white text-2xl font-bold sm:text-left mb-3">
                Categories
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-300 dark:text-white hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-white text-2xl font-bold sm:text-left mb-3">
                Contact
              </h1>
              <ul className="text-gray-300 space-y-3">
                <li>
                <FaLocationArrow /> Shop 1
                   <br />
                  Address
                </li>
                <li>
                <FaLocationArrow /> Shop 2
                   <br />
                  Address
                </li>
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-white text-2xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="text-gray-300 flex items-center gap-3">
                  <p>Connect Socials</p>
                </div>
                <div className="text-gray-300 flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 1234567890</p>
                </div>

                {/* social links */}
                <div className="text-gray-300 flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-black duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-black duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-black duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
