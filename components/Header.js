import React from "react";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserAddIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Header() {
  const [searchInput, setSearchInput] = React.useState("")
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate , setEndDate ] = React.useState(new Date())
  
  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key:"selection",
  }

  const handelSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const [numberOfGuest , setNumberOfGuest ] = React.useState(1)
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-black shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/BannerLogo3.png"
          height={100}
          width={200}
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* center */}
      <div className="flex items-center md:border-2 rounded-full p-2 shadow">
        <input
          type="text"
          name=""
          id=""
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
          placeholder="Start Your Search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-green-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-green-600  text-white rounded-full p-2 cursor-pointer md: mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5 ">
          <DateRangePicker ranges={[selectionRange]} 
            minDate={new Date()}
            rangeColors={["#22c55e"]}
            onChange={handelSelect}
            className="text-black"
          />
          <div className="flex items-center border-b m-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of peeps in Gang!✈️ </h2>
            <UserIcon className="h-5" />
            <input type="number" className="w-12 pl-2 text-lg outline-none text-green-500" value={numberOfGuest} min={1} onChange={(e)=>setNumberOfGuest(e.target.value) } />
          </div>
          <div className="flex">
            <button className="flex-grow text-white">Cancel</button>
            <button className="flex-grow text-green-500">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
