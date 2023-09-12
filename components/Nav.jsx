import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Nav = (props) => {
  return (
    <div className='flex justify-between p-6 capitalize shadow-md font-bold dark:bg-blue-light'>
      <h3>where in the world?</h3>
      <div
        onClick={() => props.setDarkMode(!props.darkMode)}
        className='flex cursor-pointer'>
        <div className='flex gap-2 items-center'>
          {props.darkMode ? <BsSunFill /> : <FaMoon />}
          <h5>{props.darkMode ? "light" : "dark"} mode</h5>
        </div>
      </div>
    </div>
  );
};

export default Nav;
