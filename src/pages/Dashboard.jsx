import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { DisplayCampaigns, Sidebar } from "../components";
import { useStateContext } from "../context";
import { CampaignDetails, CreateCampaign, Profile } from "../pages";
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <Sidebar />
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
      <Routes>
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/create-campaign"
          element={<CreateCampaign />}
        />
        <Route
          path="/campaign-details/:id"
          element={<CampaignDetails />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
