import Navbar from "@/components/Layout/Navbar";
import UnderConstruction from "@/components/UI/UnderConstruction";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar active={2} />
      <div className="mt-24">
        <UnderConstruction />
      </div>
    </>
  );
};

export default page;
