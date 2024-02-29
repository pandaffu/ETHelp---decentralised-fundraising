import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles, url }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white h-[52px] px-4 rounded-[10px] shadow-lg ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
