import React, { useState, useEffect } from "react";
import { ethereumDonation, questionMark } from "../assets";
import { DisplayCampaigns, Section } from "../components";
import { useStateContext } from "../context";
const Home = () => {
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
      <Section
        title="Decentralised Fundraising"
        subtitle="Raise or Donate Ethereum to Causes That Matter"
        buttonText="See Campaigns"
        btnUrl="/campaigns"
        btnType="button"
        btnStyles="bg-orange-500"
        bgColor="bg-grey-50 dark:bg-grey-800"
        flexDirection="lg:flex-row"
        imageUrl={ethereumDonation}
      />

      <Section
        title="How It Works"
        subtitle="Transparency, Trust, and Impact: Our Platform in Action"
        buttonText="Learn More"
        btnUrl="/how-it-works"
        btnType="button"
        btnStyles="bg-orange-500"
        bgColor="bg-grey-100 dark:bg-grey-950"
        flexDirection="lg:flex-row-reverse"
        imageUrl={questionMark}
      />

      <div className={`bg-grey-50 dark:bg-grey-800 dark:text-grey-50 w-full`}>
        <h2
          className={`max-w-[500px] m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 lg:max-w-[1250px]`}
        >
          Featured Campaigns
        </h2>
      </div>

      <DisplayCampaigns
        isLoading={isLoading}
        campaigns={campaigns}
        bgColor="bg-grey-50 dark:bg-grey-800"
      />
    </div>
  );
};

export default Home;
