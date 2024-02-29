import React, { useState } from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.png";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark"); // Toggle dark mode class on body
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex justify-center items-center rounded-md bg-grey-950 p-2 dark:bg-grey-100 focus:outline-none shadow-lg h-[52px] w-[52px]"
    >
      <img
        className="w-[32px] h-[32px]"
        src={darkMode ? sun : moon}
        alt="Toggle Dark Mode"
      />
    </button>
  );
}

export default DarkModeToggle;
