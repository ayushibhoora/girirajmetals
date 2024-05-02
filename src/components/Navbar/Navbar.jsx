import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";


const Copperware = [
  {
    id: 1,
    name: "Copper ware",
    link: "/#copperware",
  }
]

const Brassware = [
  {
    id: 1,
    name: "Brassware",
    link: "/#brassware",
  }
]
const Bronzeware = [
  {
    id: 1,
    name: "Bronzeware",
    link: "/#bronzeware",
  }
]
const PoojaUtensils = [
  {
    id: 1,
    name: "Pooja Utensils",
    link: "/#poojautensils",
  }
]
const GodIdols = [
  {
    id: 1,
    name: "God Idols",
    link: "/#godidols",
  }
]


const DropdownLinks1 = [
  {
    id: 1,
    name: "Bottle",
    link: "/#",
  },
  {
    id: 2,
    name: "Container",
    link: "/#",
  },
  {
    id: 3,
    name: "Glass Set",
    link: "/#",
  },
  {
    id: 4,
    name: "Bedroom Pot",
    link: "/#",
  },
  {
    id: 5,
    name: "Beda",
    link: "/#",
  },
  {
    id: 6,
    name: "Jug Set",
    link: "/#",
  },
];

const DropdownLinks2 = [
  {
    id: 1,
    name: "Spice Box",
    link: "/#",
  },
  
  {
    id: 2,
    name: "Glass Set",
    link: "/#",
  },

  {
    id: 3,
    name: "Jug Set",
    link: "/#",
  },
  {
    id: 4,
    name: "Lota",
    link: "/#",
  },
  {
    id: 5,
    name: "Mukhwaas Set",
    link: "/#",
  },
  
];

const DropdownLinks3 = [
  {
    id: 1,
    name: "Bowl Set",
    link: "/#",
  },
  
  {
    id: 2,
    name: "Glass Set",
    link: "/#",
  },

  {
    id: 3,
    name: "Spoon Set",
    link: "/#",
  },
  {
    id: 4,
    name: "Jug Set",
    link: "/#",
  },
  {
    id: 5,
    name: "Dinner Set",
    link: "/#",
  },
  
];

const DropdownLinks4 = [
  {
    id: 1,
    name: "Diya",
    link: "/#",
  },
  
  {
    id: 2,
    name: "Raman Diya",
    link: "/#",
  },

  {
    id: 3,
    name: "Aarti Thali",
    link: "/#",
  },
  {
    id: 4,
    name: "Bell",
    link: "/#",
  },
  {
    id: 5,
    name: "Basket",
    link: "/#",
  },
  {
    id: 6,
    name: "Essence Stick Holder",
    link: "/#",
  },
  
];

const DropdownLinks5 = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
   
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center ">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            
            {/* Menu Items */}
            <div className="hidden xl:flex items-center gap-5">
              <ul className="flex items-center gap-5">
                {/* {MenuLinks.map((data, index) => ( */}
                  <li className="relative cursor-pointer group">
                    <a
                      href="#"
                      className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                    >
                      {" "}
                      {/* Dropdown */}
                      Copperware       
                      <span>
                          <FaCaretDown className="group-hover:rotate-180 duration-400" />
                      </span>

                    </a>

                    {/* Dropdown links */}
                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-4">
                      {DropdownLinks1.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    </div>
                      
                  </li>

                  <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Brassware
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks2.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Bronzeware
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks3.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Puja Utensils
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks4.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    God Idols
                  </a>

                </li>
                {/* ))} */}
                

                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Others
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks5.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">

            <section id="mobile-menu" className="absolute top-0 bg-white w-full text-5xl
             flex flex-col justify-content-center">
              <button className="text-8xl self-end px-6">
                        &times;
              </button>
              
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center