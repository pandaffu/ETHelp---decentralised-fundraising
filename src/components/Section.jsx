import React from "react";
import { CustomButton } from "./";
import { useNavigate } from "react-router-dom";
const Section = ({
  title,
  subtitle,
  buttonText,
  btnType,
  btnStyles,
  imageUrl,
  bgColor,
  flexDirection,
  btnUrl,
}) => {
  const navigateTo = useNavigate();

  const handleButtonClick = () => {
    navigateTo(btnUrl);
  };

  return (
    <div className={`${bgColor}`}>
      <section
        className={`max-w-[500px] m-auto flex flex-col-reverse justify-between items-center p-10 gap-10 ${flexDirection} lg:max-w-[1250px] lg:p-20`}
      >
        <div>
          <h2 className="text-grey-950 text-3xl lg:text-5xl font-epilogue font-bold dark:text-grey-50">
            {title}
          </h2>

          <p className="text-grey-950 text-lg lg:text-xl font-epilogue pb-10 dark:text-grey-50">
            {subtitle}
          </p>

          <CustomButton
            btnType={btnType}
            title={buttonText}
            styles={btnStyles}
            handleClick={handleButtonClick}
          />
        </div>

        <img
          src={imageUrl}
          alt="ethereum donation illustration"
          className="h-auto w-[500px] rounded-lg shadow-2xl"
        />
      </section>
    </div>
  );
};

export default Section;
