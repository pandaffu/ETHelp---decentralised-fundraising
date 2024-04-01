import React from "react";
import { ErrorMessage } from "../components";
const FormField = ({
  labelHeading,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
  maxChars,
  errorMessage,
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelHeading && (
        <span className="font-epilogue font-medium text-[14px] text-grey-950 dark:text-grey-50 mb-[10px]">
          {labelHeading}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={9}
          placeholder={placeholder}
          maxLength={maxChars}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[2px] border-grey-400 bg-transparent font-epilogue text-grey-950 dark:text-grey-50 text-[14px] placeholder:text-grey-300 rounded-[10px] sm:min-w-[300px]  focus:border-orange-500 focus:ring-orange-500"
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          maxLength={maxChars}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[2px] border-grey-400 bg-transparent font-epilogue text-grey-950 dark:text-grey-50 text-[14px] placeholder:text-grey-300 rounded-[10px] sm:min-w-[300px] focus:border-orange-500 focus:ring-orange-500"
        />
      )}

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </label>
  );
};

export default FormField;
