import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Dashboard, CampaignDetails, CreateCampaign } from "./pages";
import Campaigns from "./pages/Campaigns";

const App = () => {
  return (
    <div className="bg-grey-50 dark:bg-grey-700">
      <div className="relative sm:-8 min-h-screen flex flex-row">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/campaigns"
            element={<Campaigns />}
          />
          <Route
            path="/campaign-details/:id"
            element={<CampaignDetails />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard/create-campaign"
            element={<CreateCampaign />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
