import Edit from "@/components/UI/Dashboard/Edit";
import Navbar from "@/components/Layout/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="mt-24">
        <Edit />
      </div>
    </>
  );
};

export default page;
