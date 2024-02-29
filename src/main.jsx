import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { Sepolia } from "@thirdweb-dev/chains";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    clientId="059682f48527cdc449ca9586987477b0"
    activeChain={Sepolia}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
