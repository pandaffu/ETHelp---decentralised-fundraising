import React from "react";
import { logoHorizontal } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 shadow bg-grey-100 dark:bg-grey-900">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logoHorizontal}
              alt="logo"
              className="h-[85px] py-2 pl-4 pr-2 rounded-[10px] cursor-pointer"
            />
          </a>
          <nav className="hidden xl:block">
            <ul className="flex justify-between py-2 pl-4 pr-2 rounded-[10px] bg-grey-200 dark:bg-grey-950 h-[52px]">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4 text-[14px]"
                >
                  <p className="text-nowrap">Home</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/campaigns"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4 text-[14px]"
                >
                  <p className="text-nowrap">Campaigns</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4 text-[14px]"
                >
                  <p className="text-nowrap">How to donate</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-grey-950 dark:text-grey-200 font-epilogue font-semibold px-4 text-[14px]"
                >
                  <p className="text-nowrap">How it works</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="my-6 border-grey-200 sm:mx-auto dark:border-grey-700 lg:my-8" />
        <span className="block text-sm text-grey-500 sm:text-center dark:text-grey-400">
          © 2024{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
          >
            Kacper Adamski
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
