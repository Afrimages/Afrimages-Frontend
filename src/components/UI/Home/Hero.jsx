"use client";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="w-full h-[100vh] relative overflow-hidden">
      <Image
        src={"/banner.png"}
        alt="banner"
        width={1000}
        height={800}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      <div className="absolute top-0 left-0 w-full h-full text-center">
        <div className="px-xPadding flex items-center justify-center w-full h-full">
          <div className="md:space-y-4">
            <h1 className="md:text-[2.5em] text-[1.8em] font-[800] text-white">
              Discover, Download, and Share the Finest Images from Afrimages
            </h1>

            <p className="text-white w-full md:text-[1em] text-[1em] md:w-3/5 mx-auto my-6">
              Discover AfrImage's diverse collection, showcasing Africa's
              beauty. Bring it into your space with high-res downloads, sharing
              globally. Embark on a visual journey effortlessly.
            </p>

            <div className="md:w-[50%] w-full flex items-center justify-center mx-auto">
              <div className="flex items-center w-full gap-2 p-4 bg-white rounded-l-lg">
                <RiSearch2Line size={22} className="text-[1em] text-gray-400" />
                <input
                  type="text"
                  className="w-full outline-none focus:outline-none"
                  placeholder="Search for Images here..."
                  value={search}
                  onChange={handleSearch}
                />
              </div>

              <Link href={`/search?query=${search}`}>
                <button className="px-6 py-4 text-white rounded-r-lg bg-green800">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
