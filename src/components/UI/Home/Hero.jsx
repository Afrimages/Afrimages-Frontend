"use client";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";

export default function Hero() {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section
      className="w-full h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col gap-5 items-center justify-center text-center px-xPadding"
      style={{
        background: ` linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(./banner.png) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {/* <img src="./banner.png" alt="" className='w-full h-full'/> */}
      <h1 className="text-[2.5em] md:text-[1.8em] font-[800] text-white">
        Discover, Download, and Share the Finest Images from Afrimages
      </h1>

      <p className="text-white md:w-full md:text-[1em] text-[1em] w-3/5">
        Discover AfrImage's diverse collection, showcasing Africa's beauty. Bring it into your space with high-res
        downloads, sharing globally. Embark on a visual journey effortlessly.
      </p>

      <div className="w-[50%] md:w-full flex items-center justify-center">
        <div className="flex items-center w-full gap-2 p-4 bg-white rounded-l-lg">
          <RiSearch2Line size={22} className="md:text-[1em] text-gray-400" />
          <input
            type="text"
            className="outline-none focus:outline-none md:w-full"
            placeholder="Search for Images here..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <Link href={`/search?query=${search}`}>
          <button className="px-6 py-4 text-white rounded-r-lg bg-green800">Search</button>
        </Link>
      </div>
    </section>
  );
}
