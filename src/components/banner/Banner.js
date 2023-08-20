import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section id="home" className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row justify-center items-center font-titleFont border-b-black"
    >
      <RightBanner />
      <LeftBanner/>
     
     
     
    </section>
  );
};

export default Banner;
