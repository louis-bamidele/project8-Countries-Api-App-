"use client";
import Feed from "@/components/Feed";
import { useEffect, useState } from "react";
import JsonData from "data";
export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    let isValid = /^[a-zA-Zs]*$/.test(value);

    if (isValid) {
      if (value.length > 0) {
        handleFilter(value);
      } else {
        setData(JsonData);
      }
    }
  };
  const handleSelect = (e) => {
    let value = e.target.value;
    if (value === "all") {
      setData(JsonData);
    } else {
      let filtered = JsonData.filter((element) => {
        return element.region.toLowerCase().includes(value.toLowerCase());
      });
      setData(filtered);
    }
  };
  const handleFilter = (e) => {
    let filtered = JsonData.filter((element) => {
      return element.name.toLowerCase().includes(e.toLowerCase());
    });
    setData(filtered);
  };
  useEffect(() => {
    setData(JsonData);
  }, []);
  return (
    <main className=' md:p-20 p-5'>
      <div className='flex  flex-col md:flex-row md:gap-2 gap-8 justify-between md:items-center'>
        <label>
          <input
            type='search'
            value={search}
            onChange={handleSearch}
            pattern='^[a-zA-Z\s]*$'
            placeholder='Search for a country..'
            className='form_input_isvalid form-input md:w-auto w-full rounded SHADOW border-none bg-white dark:bg-blue-light h-min'
          />
          <span className='form_validate'>
            Only letters and space are allowed.
          </span>
        </label>

        <select
          onChange={handleSelect}
          name='select'
          className='form-select md:w-auto w-6/12 rounded SHADOW border-none bg-white dark:bg-blue-light h-min'>
          <option value='all' selected>
            Filter by region
          </option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
      <Feed data={data} />
    </main>
  );
}
