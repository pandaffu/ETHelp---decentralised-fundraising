import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { useStateContext } from "../context";
import { CustomButton, Loader, Footer } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { ethereumCoin } from "../assets";
import { Navbar } from "../components";
const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address, connect } =
    useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/");
    setIsLoading(false);
  };

  return (
    <div className="w-full">
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
          <li className="inline-flex items-center">
            <Link to="/campaigns">
              <a className="flex items-center text-sm cursor-pointer text-grey-950 dark:text-grey-50 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">
                Campaigns
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
              </a>
            </Link>
          </li>
          <li
            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
            aria-current="page"
          >
            Campaign Details
          </li>
        </ol>

        <div className="flex flex-col pt-40 px-5 pb-5 lg:px-10 lg:pb-10 xl:grid xl:grid-cols-3 xl:gap-7">
          {isLoading && <Loader />}

          <header className="bg-grey-100 dark:bg-grey-900 rounded-[10px] relative shadow-lg p-3 md:p-6 xl:col-span-2">
            <img
              src={state.image}
              alt="campaign image"
              className="rounded-[10px] shadow-lg h-[300px] object-cover lg:h-[400px] w-full"
            />

            <h1 className="font-epilogue font-bold text-[30px] pt-3 md:pt- md:text-[40px] lg:text-[55px] text-grey-950 dark:text-grey-50">
              {state.title}
            </h1>
          </header>

          <div className="xl:row-span-2">
            <aside className="bg-grey-100 dark:bg-grey-900 rounded-[10px] mt-5 md:mt-10 p-3 md:p-6 shadow-lg xl:mt-0 xl:sticky xl:top-[110px]">
              <div className="flex justify-between xl:flex-col xl:gap-5">
                <div className="flex flex-col order-2 xl:order-none items-center gap-1 w-[33%] xl:w-full xl:items-baseline">
                  <p className="font-epilogue text-lg md:text-3xl font-semibold text-grey-950 dark:text-grey-50">
                    {state.amountCollected} / {state.target}
                    <img
                      src={ethereumCoin}
                      alt="ethereum coin"
                      className="relative bottom-1 w-[25px] h-[25px] object-contain inline-block"
                    ></img>
                  </p>

                  <div className=" xl:block relative w-full h-[6px] rounded-[10px] bg-grey-900 dark:bg-grey-100  mb-4">
                    <div
                      className="absolute h-full bg-jade-500 rounded-[10px]"
                      style={{
                        width: `${calculateBarPercentage(
                          state.target,
                          state.amountCollected
                        )}%`,
                        maxWidth: "100%",
                      }}
                    ></div>

                    <div className="flex justify-between relative top-2 text-grey-950 dark:text-grey-50">
                      <p>
                        {calculateBarPercentage(
                          state.target,
                          state.amountCollected
                        )}
                        %
                      </p>

                      <p>100%</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col order-2 items-center gap-1 w-[33%] xl:w-full xl:flex-row xl:items-baseline">
                  <p className="font-epilogue text-lg md:text-3xl font-semibold text-grey-950 dark:text-grey-50">
                    {donators.length}
                  </p>

                  <p className="font-epilogue text-md md:text-xl text-grey-950 dark:text-grey-50">
                    {donators.length === 1 ? "Donation" : `Donations`}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-[33%] xl:w-full xl:flex-row xl:items-baseline">
                  <p className="font-epilogue text-lg md:text-3xl font-semibold text-grey-950 dark:text-grey-50">
                    {remainingDays}
                  </p>

                  <p className="font-epilogue text-md md:text-xl text-grey-950 dark:text-grey-50">
                    Days Left
                  </p>
                </div>
              </div>

              <div className="mt-[20px] flex order-3 flex-col p-4 bg-grey-200 dark:bg-grey-950 rounded-[10px] shadow-lg">
                <div className="flex gap-3 xl:flex-col">
                  <input
                    type="number"
                    placeholder="0.1 ETH"
                    step="0.01"
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[2px] border-grey-900 dark:border-grey-100 bg-transparent font-epilogue text-grey-950 dark:text-grey-50 rounded-[10px]"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <CustomButton
                    btnType="button"
                    title={address ? "Donate" : "Connect"}
                    disabled={!amount}
                    handleClick={() => {
                      if (address && amount !== "") {
                        handleDonate();
                      } else {
                        if (!address) connect();
                      }
                    }}
                  />
                </div>
              </div>
            </aside>
          </div>

          <main className="bg-grey-100 dark:bg-grey-900 rounded-[10px] mt-5 md:mt-10 p-3 md:p-6 shadow-lg xl:mt-0 xl:col-span-2">
            <p className="font-epilogue text-md md:text-xl text-grey-950 dark:text-grey-50">
              {state.description}
            </p>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignDetails;
