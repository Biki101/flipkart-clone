import React from "react";
import { WiStars } from "react-icons/wi";
import { ImSearch } from "react-icons/im";
import { MdOutlineExpandMore } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className=" bg-[var(--primary)] text-white">
      <div className="container flex items-center justify-between px-3">
        <span className="flex flex-col items-center">
          <h1 className="text-[20px] font-extrabold italic">Flipkart</h1>
          <span className="flex items-center text-[12px] italic">
            <p>Explore</p>
            <p className="text-[#b8d182]">Plus</p>
            <WiStars className="text-[#b8d182]" />
          </span>
        </span>
        <div className="flex items-center flex-grow p-3">
          <input
            type="text"
            className="p-2 no-underline outline-none w-full text-gray-600"
          />
          <span className="bg-white p-3 text-[var(--primary)]">
            <ImSearch />
          </span>
        </div>
        <div className="flex items-center gap-[20px]">
          <span className="bg-white text-[var(--primary)] p-1 px-10">
            Login
          </span>
          <h4>Become a Seller</h4>
          <span className="flex items-center gap-1">
            <p>More</p>
            <p>{<MdOutlineExpandMore />}</p>
          </span>
          <span className="flex items-center gap-1">
            <RiShoppingCart2Fill />
            Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
