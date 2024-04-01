import React from "react";

import { tagType, metamask } from "../assets";

import { ethereumCoin } from "../assets";
const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  return (
    <div
      className="rounded-lg w-full bg-grey-100 dark:bg-grey-900 cursor-pointer shadow-lg"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[250px] object-cover rounded-[15px]"
      />

      <div className="flex flex-col p-4">
        <div className="block">
          <h3 className="font-epilogue text-md lg:text-lg min-h-[54px] font-semibold text-grey-950 dark:text-grey-50 mb-2">
            {title}
          </h3>
          <p className="font-epilogue text-sm lg:text-md min-h-[110px] text-grey-950 dark:text-grey-50">
            {description.length > 250
              ? description.substring(0, 150) + "..."
              : description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <p className="mt-[3px] text-md lg:text-xl font-epilogue font-normal text-grey-950 dark:text-grey-50 sm:max-w-[120px] truncate">
              Raised
            </p>
            <h4 className="font-epilogue text-2xl lg:text-xl font-semibold text-grey-950 dark:text-grey-50">
              {amountCollected} / {target}
              <img
                src={ethereumCoin}
                alt="ethereum coin"
                className="relative bottom-1 w-[25px] h-[25px] object-contain inline-block"
              ></img>
            </h4>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={metamask}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            by <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
