import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles, disabled }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white h-[52px] px-4 rounded-[10px] shadow-lg ${
        disabled ? "bg-gray-400" : "bg-orange-500"
      } ${styles}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default CustomButton;
