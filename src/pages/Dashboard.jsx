import React, { useState, useEffect } from "react";

import { DisplayCampaigns, Sidebar } from "../components";
import { useStateContext } from "../context";

const Dashboard = () => {
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
    <div className="container mx-auto">
      <div className="px-5 lg:px-10 mt-10 lg:mt-20">
        <Sidebar />
        <h1 className="container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 ">
          Your campaigns
        </h1>
        <DisplayCampaigns
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
    </div>
  );
};

export default Dashboard;
