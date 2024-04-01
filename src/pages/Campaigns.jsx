import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DisplayCampaigns,
  SearchCampaigns,
  Navbar,
  Footer,
} from "../components";
import { useStateContext } from "../context";

const Campaigns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data.reverse());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCampaigns();
  }, [getCampaigns]);

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full pt-[90px]">
      <Navbar />

      <div className="container mx-auto">
        <ol
          className="relative left-[45px] top-[130px] flex items-center whitespace-nowrap"
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <Link to="/">
              <a className="flex items-center text-sm cursor-pointer text-grey-950 dark:text-grey-50 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">
                Home
              </a>
            </Link>
            <svg
              className="flex-shrink-0 mx-2 overflow-visible size-4 text-grey-950 dark:text-grey-50"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>

          <li
            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
            aria-current="page"
          >
            All Campaigns
          </li>
        </ol>

        <h2
          className={`max-w-[500px] text-center m-auto text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 lg:max-w-[1250px]`}
        >
          All Campaigns
        </h2>

        <div className="px-5 pb-5 lg:px-10">
          <SearchCampaigns setSearchQuery={setSearchQuery} />
        </div>

        <div className="px-5 pb-5 lg:px-10 lg:pb-10">
          <DisplayCampaigns
            isLoading={isLoading}
            campaigns={filteredCampaigns}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Campaigns;
