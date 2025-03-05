import React from "react";

export const Blog = ({ date, title, image }) => {
  return (
    <div className=" w-[90%] max-w-[1400px] mx-auto bg-white rounded-2xl lg:w-auto">
      <div className="p-8 space-y-2">
        <p className=" font-primary text-gray-500">{date}</p>

        <h3 className=" font-primary font-semibold text-xl min-h-[50px]">
          {title}
        </h3>
      </div>

      <div className="">
        <img
          src={image}
          alt={title + "image"}
          width={"100%"}
          className=" h-[300px] rounded-b-2xl block object-cover"
        />
      </div>
    </div>
  );
};
