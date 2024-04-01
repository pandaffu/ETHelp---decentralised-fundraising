import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { CustomButton, FormField, Sidebar } from "../components";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [isFormValid, setIsFormValid] = useState(false);

  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  useEffect(() => {
    const checkFormValidity = () => {
      const isEmpty = Object.values(form).some((value) => value === "");
      const hasErrors = Object.values(errors).some((error) => error !== "");
      setIsFormValid(!isEmpty && !hasErrors);
    };
    checkFormValidity();
  }, [form, errors]);

  const handleFormFieldChange = (fieldName, e) => {
    const value = e.target.value;
    setForm({ ...form, [fieldName]: value });

    switch (fieldName) {
      case "name":
        setErrors({
          ...errors,
          name: value.trim() === "" ? "Name is required" : "",
        });
        break;
      case "title":
        setErrors({
          ...errors,
          title: value.trim() === "" ? "Title is required" : "",
        });
        break;
      case "description":
        setErrors({
          ...errors,
          description: value.trim() === "" ? "Description is required" : "",
        });
        break;
      case "target":
        const isValidNumber = !isNaN(parseFloat(value)) && isFinite(value);
        setErrors({
          ...errors,
          target: !isValidNumber ? "Goal must be a valid number" : "",
        });
        break;
      case "deadline":
        setErrors({
          ...errors,
          deadline: value.trim() === "" ? "Deadline is required" : "",
        });
        break;
      case "image":
        const isValidImageUrl = isValidUrl(value);
        setErrors({
          ...errors,
          image:
            value.trim() === ""
              ? "Image URL is required"
              : isValidImageUrl
              ? ""
              : "Invalid URL",
        });
        break;
      default:
        break;
    }
  };

  const isValidUrl = (url) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;

    setIsLoading(true);
    try {
      await createCampaign({
        ...form,
        target: ethers.utils.parseUnits(form.target, 18),
      });
      setIsLoading(false);
      navigate("/campaigns");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <Sidebar />

      <div className="px-5 lg:px-10 mt-10 lg:mt-20 ">
        <h1 className="container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 ">
          Create campaign
        </h1>
      </div>

      <div className="bg-grey-100 dark:bg-grey-900 rounded-lg p-5 lg:p-10 m-5 lg:m-10">
        <form
          onSubmit={handleSubmit}
          className="w-full my-[20px] flex flex-col gap-[30px]"
        >
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelHeading="Your Name *"
              placeholder="Tom Anderson"
              inputType="text"
              value={form.name}
              maxChars={30}
              handleChange={(e) => handleFormFieldChange("name", e)}
              errorMessage={errors.name}
            />
            <FormField
              labelHeading="Campaign Title *"
              placeholder="Title of your campaign"
              inputType="text"
              value={form.title}
              maxChars={70}
              handleChange={(e) => handleFormFieldChange("title", e)}
              errorMessage={errors.title}
            />
          </div>

          <FormField
            labelHeading="Description *"
            placeholder="Detailed description of your campaign"
            isTextArea
            value={form.description}
            maxChars={6000}
            handleChange={(e) => handleFormFieldChange("description", e)}
            errorMessage={errors.description}
          />

          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelHeading="Goal *"
              placeholder="e.g. 1.5 ETH"
              inputType="text"
              value={form.target}
              maxChars={20}
              handleChange={(e) => handleFormFieldChange("target", e)}
              errorMessage={errors.target}
            />
            <FormField
              labelHeading="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChange("deadline", e)}
              errorMessage={errors.deadline}
            />
          </div>

          <FormField
            labelHeading="Campaign image *"
            placeholder="Image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
            errorMessage={errors.image}
          />

          <div className="flex justify-center items-center mt-[20px]">
            <CustomButton
              btnType="submit"
              disabled={!isFormValid}
              title="Create new campaign"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
