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
  styles,
  flexDirection,
  btnUrl,
}) => {
  const navigateTo = useNavigate();

  const handleButtonClick = () => {
    navigateTo(btnUrl);
  };

  return (
    <div className={`${styles}`}>
      <section
        className={`max-w-[500px] m-auto flex flex-col-reverse justify-between items-center p-5 gap-5 ${flexDirection} lg:p-10 md:container`}
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
          className="h-auto w-[400px] rounded-lg shadow-2xl xl:w-[500px]"
        />
      </section>
    </div>
  );
};

export default Section;
