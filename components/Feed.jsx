import React from "react";
import Image from "next/image";
import image from "../public/3926922.jpg";
import CountryList from "./CountryList";
const Feed = (props) => {
  return (
    <div>
      {props.data.length == 0 ? (
        <div className='flex flex-col w-full items-center justify-center my-5 m-x-auto'>
          <Image
            className='md:w-2/5 w-4/5 '
            src={image}
            width={1000}
            height={600}
            alt='not_found'
          />
          <p className='capitalize font-bold'>
            country with that name does not exit
          </p>
          <a href='http://www.freepik.com'>Designed by stories / Freepik</a>
        </div>
      ) : (
        <div className='grid gap-10 justify-items-center grid-cols-1 md:grid-cols-3  justify-between lg:grid-cols-4 py-14'>
          {props.data.map((element, index) => (
            <CountryList data={element} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
