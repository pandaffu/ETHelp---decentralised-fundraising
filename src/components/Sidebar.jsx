import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logoVertical, sun } from "../assets";
import { navlinks } from "../constants";
import { DarkModeToggle } from "../components";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img
        src={imgUrl}
        alt="navbar icon"
      />
    ) : (
      <img
        src={imgUrl}
        alt="navbar icon"
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] w-[200px]">
      <div className="flex-1 flex flex-col justify-between items-center bg-grey-200 dark:bg-grey-950 rounded-[20px] w-[100%] py-4">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
