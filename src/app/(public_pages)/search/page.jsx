"use client";
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import SearchResult from "@/components/UI/SearchResult";
import Footer from "@/components/Layout/Footer";

const page = (params) => {
  const { query } = params.searchParams;

  return (
    <div>
      <Navbar />
      <SearchResult query={query} />
      <Footer />
    </div>
  );
};

export default page;
