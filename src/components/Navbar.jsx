import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeToggle } from "../components";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { menu, metamask } from "../assets";
import { navlinks } from "../constants";
import { logoHorizontal } from "../assets";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div>
      <div className="flex justify-between items-center fixed z-10 w-full p-[10px] gap-[20px]">
        <AlignJustify
          size={45}
          color="#262626"
          className="cursor-pointer dark:hidden xl:hidden"
        />
        <AlignJustify
          size={45}
          color="#e7e7e7"
          className="hidden cursor-pointer dark:block dark:xl:hidden"
        />
        <Link
          to="/"
          className="hidden xl:block"
        >
          <img
            src={logoHorizontal}
            alt="logo"
            className="h-[85px] py-2 pl-4 pr-2 rounded-[10px] cursor-pointer"
          />
        </Link>

        <nav className="hidden xl:block">
          <ul className="flex justify-between py-2 pl-4 pr-2 rounded-[10px] bg-grey-200 dark:bg-grey-950 h-[52px] shadow-lg">
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

            <li className="flex items-center">
              <Link
                to="/"
                className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
              >
                <p className="text-nowrap">Dashboard</p>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-row justify-end gap-4">
          <DarkModeToggle></DarkModeToggle>
          <CustomButton
            btnType="button"
            title={address ? "Create a campaign" : "Connect"}
            styles={address ? "bg-[#1dc071]" : "bg-orange-500"}
            handleClick={() => {
              if (address) navigate("create-campaign");
              else connect();
            }}
          />

          <Link to="/profile">
            <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
              <img
                src={metamask}
                alt="user"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
