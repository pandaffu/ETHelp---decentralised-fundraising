import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
const DisplayCampaigns = ({ isLoading, campaigns, styles }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div className={`${styles}`}>
      {isLoading && (
        <div className="flex justify-center items-center w-full">
          <div
            class="animate-spin inline-block size-10 border-[5px] border-current border-t-transparent text-orange-500 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className="container m-auto">
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
