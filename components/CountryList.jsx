"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CountryList = (props) => {
  const Router = useRouter();
  const handleClick = () => {
    let encoded = encodeURI(props.data.name);
    Router.push(`/country?name=${encoded}`);
  };
  return (
    <div
      onClick={handleClick}
      className='flex flex-col justify-between bg-white dark:bg-blue-light SHADOW cursor-pointer w-4/5 md:w-min'>
      <Image
        src={props.data.flag}
        alt={props.data.name}
        width={1000}
        height={600}
      />
      <div className='p-3 capitalize Container'>
        <h4 className='my-3 font-bold TEXT'>{props.data.name}</h4>
        <div>
          <p className='font-light'>
            <span className='font-bold'>population: </span>
            {props.data.population.toLocaleString()}
          </p>
          <p className='font-light'>
            <span className='font-bold'>region: </span>
            {props.data.region}
          </p>
          <p className='font-light'>
            <span className='font-bold'>capital: </span>
            {props.data.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
