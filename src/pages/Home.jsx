import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethereumDonation, questionMark } from "../assets";
import { useStateContext } from "../context";
import { CustomButton, Footer, Section, DisplayCampaigns } from "../components";

import { Navbar } from "../components";
const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data.reverse().slice(0, 4));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCampaigns();
  }, [getCampaigns]);

  return (
    <div className="w-full pt-[90px] pb-[350px]">
      <Navbar />

      <Section
        title="Decentralised Fundraising"
        subtitle="Raise or Donate Ethereum to Causes That Matter"
        buttonText="See Campaigns"
        btnUrl="/campaigns"
        btnType="button"
        styles="bg-grey-50 dark:bg-grey-700"
        flexDirection="md:flex-row"
        imageUrl={ethereumDonation}
      />

      <Section
        title="How It Works"
        subtitle="Transparency, Trust, and Impact: Our Platform in Action"
        buttonText="Learn More"
        btnUrl="/how-it-works"
        btnType="button"
        styles="bg-grey-100 dark:bg-grey-800"
        flexDirection="md:flex-row-reverse"
        imageUrl={questionMark}
      />

      <div className={`bg-grey-50 dark:bg-grey-700 dark:text-grey-50 w-full`}>
        <h2
          className={`container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 `}
        >
          Latest Campaigns
        </h2>
      </div>

      <div className="px-5 lg:px-10">
        <DisplayCampaigns
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>

      <div className="justify-center flex container mx-auto p-10">
        <CustomButton
          btnType="button"
          title="See Campaigns"
          handleClick={() => {
            navigate("./campaigns");
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
