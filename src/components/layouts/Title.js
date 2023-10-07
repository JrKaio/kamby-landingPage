import React from "react";

function Title({ title, des }) {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h2 className="text-2xl uppercase font-bold text-designColor tracking-wide">
        {title}
      </h2>
      <h1 className="text-3xl text text-gray-300 font-bold capitalize ">
        {des}
      </h1>
    </div>
  );
}

export default Title;
