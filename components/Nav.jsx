"use client";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Toggle the class on the <html> tag
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }

    // Update the state
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='flex justify-between p-6 capitalize shadow-md font-bold dark:bg-blue-light'>
      <h3>where in the world?</h3>
      <div onClick={() => toggleDarkMode()} className='flex cursor-pointer'>
        <div className='flex gap-2 items-center'>
          {isDarkMode ? <BsSunFill /> : <FaMoon />}
          <h5>{isDarkMode ? "light" : "dark"} mode</h5>
        </div>
      </div>
    </div>
  );
};

export default Nav;
