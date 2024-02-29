import React, { useState, useEffect } from "react";
import { ethereumDonation, questionMark } from "../assets";
import { DisplayCampaigns, Section } from "../components";
import { useStateContext } from "../context";
const Campaigns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="w-full py-[90px]">
      <h2
        className={`max-w-[500px] text-center m-auto text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 lg:max-w-[1250px]`}
      >
        Campaigns
      </h2>

      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
};

export default Campaigns;
