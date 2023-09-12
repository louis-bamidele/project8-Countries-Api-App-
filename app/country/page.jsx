"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import JsonData from "../data";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const encode = searchParams.get("name");
  const decode = decodeURI(encode);

  let data = JsonData.filter((element) => element.name === decode);
  data = data[0];

  const Alpha3CodeToCountryName = (alpha3code) => {
    let country = JsonData.filter(
      (element) => element.alpha3Code == alpha3code
    );
    return country[0].name;
  };
  const handleClick = (alpha3code) => {
    let countryName = Alpha3CodeToCountryName(alpha3code);
    let encoded = encodeURI(countryName);
    router.push(`/country?name=${encoded}`);
  };
  return (
    <main>
      <div className='flex'>
        <div
          onClick={() => router.back()}
          className='flex gap-3 items-center cursor-pointer SHADOW px-6 py-2 my-10 w-max ml-12 rounded dark:bg-blue-light'>
          <FaArrowLeftLong /> <p> Back</p>
        </div>
        <div
          onClick={() => router.push("/")}
          className='flex gap-3 items-center cursor-pointer SHADOW px-6 py-2 my-10 w-max ml-12 rounded dark:bg-blue-light'>
          <ImHome3 /> <p> Home</p>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col mx-12 justify-around gap-5 h-max'>
        <Image
          className='shadow'
          src={data.flags.svg}
          alt={data.name}
          width={500}
          height={400}
        />
        <div className='flex flex-col justify-between'>
          <h3 className=' font-bold capitalize text-4xl py-3'>{data.name}</h3>
          <div className=' gap-3 flex md:flex-row flex-col'>
            <div>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>Native Name: </span>
                {data.nativeName}
              </p>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>Population: </span>
                {data.population?.toLocaleString()}
              </p>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>Region: </span>
                {data.region}
              </p>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>sub region: </span>
                {data.subregion}
              </p>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>capital: </span>
                {data.capital}
              </p>
            </div>
            <div>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>
                  top level domian:{" "}
                </span>
                {data.topLevelDomain}
              </p>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>currencies: </span>
                {data.currencies?.map((item, index, array) => {
                  let length = array.length - 1;
                  let outPut;
                  length === index
                    ? (outPut = item.code + ".")
                    : (outPut = item.code + ", ");
                  return outPut;
                })}
              </p>
              <p className='pb-2 capitalize font-light'>
                <span className='font-bold capitalize '>languages: </span>
                {data.languages?.map((item, index, array) => {
                  let length = array.length - 1;
                  let outPut;
                  length === index
                    ? (outPut = item.name + ".")
                    : (outPut = item.name + ", ");
                  return outPut;
                })}
              </p>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <p className='self-start'>Border Countries: </p>
            <div className='flex flex-wrap gap-3'>
              {data.borders?.map((items, index) => {
                return (
                  <span
                    onClick={() => handleClick(items)}
                    className='shadow dark:bg-blue-light p-1 cursor-pointer rounded'
                    key={index}>
                    {Alpha3CodeToCountryName(items)}{" "}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
