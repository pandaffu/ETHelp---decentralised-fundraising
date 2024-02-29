import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import { loader } from "../assets";

const DisplayCampaigns = ({ title, isLoading, campaigns, bgColor }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div className={`${bgColor}`}>
      <div className="max-w-[500px] m-auto lg:max-w-[1250px] px-10 pb-10 lg:px-20 lg:pb-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {isLoading && (
            <img
              src={loader}
              alt="loader"
              className="w-[100px] h-[100px] object-contain"
            />
          )}

          {!isLoading && campaigns.length === 0 && (
            <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
              You have not created any campaigns yet
            </p>
          )}

          {!isLoading &&
            campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <FundCard
                key={uuidv4()}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayCampaigns;
