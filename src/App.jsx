import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { Home, Dashboard } from "./pages";
import Campaigns from "./pages/Campaigns";

const App = () => {
  return (
    <div className="bg-grey-50 dark:bg-grey-800">
      <Navbar />
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
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
