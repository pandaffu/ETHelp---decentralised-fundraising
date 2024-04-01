import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { DarkModeToggle } from "../components";
import {
  ChevronRight,
  LogOut,
  PlusSquare,
  LayoutGrid,
  HandCoins,
} from "lucide-react";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex fixed left-0 h-full bottom-auto z-50 ${
        hovered ? "-translate-x-[auto]" : "-translate-x-[80%]"
      } transition-transform duration-300 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="z-10 p-[10px] my-auto">
        <AlignJustify
          size={45}
          color="#262626"
          className="fixed top-0 cursor-pointer dark:hidden xs:hidden"
        />
        <AlignJustify
          size={45}
          color="#e7e7e7"
          className="fixed top-0 hidden cursor-pointer dark:block dark:xs:hidden"
        />
        <Link
          to="/"
          className="hidden xs:block"
        ></Link>

        <nav className="flex flex-col gap-10 justify-between items-center h-[500px] bg-grey-200 dark:bg-grey-950 p-3 rounded-[10px] shadow-lg">
          <ul className="flex gap-5 flex-col ">
            <li className="flex items-center relative group">
              <Link
                to="/dashboard"
                className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
              >
                <LayoutGrid size={28} />
              </Link>

              <span className="absolute left-[50px] bg-grey-900 text-grey-50 text-nowrap py-[5px] px-[10px] rounded-[15px] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                <p className="text-xs">Your campaigns</p>
              </span>
            </li>

            <li className="flex items-center relative group">
              <Link
                to="/dashboard/create-campaign"
                className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
              >
                <PlusSquare size={28} />
              </Link>

              <span className="absolute left-[50px] bg-grey-900 text-grey-50 text-nowrap py-[5px] px-[10px] rounded-[15px] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                <p className="text-xs">Create campaign</p>
              </span>
            </li>

            <li className="flex items-center relative group">
              <Link
                to="/"
                className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
              >
                <HandCoins size={28} />
              </Link>

              <span className="absolute left-[50px] bg-grey-900 text-grey-50 text-nowrap py-[5px] px-[10px] rounded-[15px] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                <p className="text-xs">Withdraw Funds</p>
              </span>
            </li>

            <li className="flex items-center relative group">
              <Link
                to="/"
                className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4"
              >
                <LogOut size={28} />
              </Link>

              <span className="absolute left-[50px] bg-grey-900 text-grey-50 text-nowrap py-[5px] px-[10px] rounded-[15px] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                <p className="text-xs">Exit</p>
              </span>
            </li>
          </ul>
          <DarkModeToggle></DarkModeToggle>
        </nav>
        <div className="relative right-[32.5px] top-[-300px] translate-x-full bottom-[250px] w-[75px] h-[75px] bg-grey-200 dark:bg-grey-950 rounded-full cursor-pointer flex items-center justify-center">
          <ChevronRight
            size={28}
            className="relative text-grey-950 dark:text-grey-200 left-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
