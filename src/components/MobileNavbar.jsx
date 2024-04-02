import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton, DarkModeToggle } from "./";

const MobileNavbar = ({ isOpen, toggleNavbar }) => {
  const { address, connect } = useStateContext();

  return (
    <div className="block xl:hidden">
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-10 flex justify-center items-center transition-transform duration-1000  ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`bg-grey-50 dark:bg-grey-900 rounded-lg p-20 w-[75%] transition-transform duration-1000 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="h-full">
            <ul className="flex flex-col h-full space-between items-center justify-center gap-10">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
                >
                  <p className="text-nowrap">Home</p>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/campaigns"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
                >
                  <p className="text-nowrap">Campaigns</p>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
                >
                  <p className="text-nowrap">How to donate</p>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
                >
                  <p className="text-nowrap">How it works</p>
                </Link>
              </li>
              {address && (
                <li className="mb-3">
                  <Link
                    to="/dashboard"
                    className="text-gray-700 dark:text-gray-300 font-semibold text-lg hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              <li>
                <DarkModeToggle></DarkModeToggle>
              </li>
              <li>
                <CustomButton
                  btnType="button"
                  title={address ? "Create a campaign" : "Connect"}
                  handleClick={() => {
                    if (address) navigate("/dashboard/create-campaign");
                    else connect();
                  }}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
