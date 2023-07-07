import React from "react";
import HotDeals from "./HotDeals";
import TodaysHotDeals from "./TodaysHotDeals";
import SearchItem from "./SearchItem";
import DealFuture from "./DealFuture";
import HomeCarosul from "./HomeCarosul";

const Home = () => {
  return (
    <div>
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mx-auto my-4">
        <button className="bg-[#FFAE5D] rounded-3xl p-3 lg:mr-64">
          Dhaka, 1212
        </button>
        <input
          type="text"
          className="bg-transparent 
               border-[1px] border-[#808080] rounded-full lg:ml-96 py-3 px-20 lg:px-32  text-black"
          placeholder="Search"
        />
        <div className="flex mt-3 justify-between">
          <p>Fresh</p> <p>Today’s Deals</p> <p>Mobiles Gift Cards</p>
          <p> Women Clothing</p> <p>Men Clothing</p> <p>Kids Clothing</p>{" "}
          <p>Health</p>
          <p>Pet corner</p> <p>Books</p> <p>Beauty</p> <p>Kitchen</p>{" "}
          <p>Bed Room</p>
          <p>Sport</p>
          <p> Bags</p>
        </div>
      </div>
      <HotDeals />
      <HomeCarosul />
      <TodaysHotDeals />
      <SearchItem />
      <DealFuture />
    </div>
  );
};

export default Home;
