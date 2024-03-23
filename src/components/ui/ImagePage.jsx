"use client";
import Image from "next/image";
import React from "react";
import { RiAddLine, RiHeart2Line, RiLockUnlockLine, RiShareLine } from "react-icons/ri";
import H_ImagesContainer from "./H_ImagesContainer";

const ImagePage = () => {
  const images = [
    {
      imageUrl: "https://webunwto.s3.eu-west-1.amazonaws.com/2019-10/why-wildlife.jpg",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "/./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/pp.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "/./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/banner.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "/./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
  ];

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = "/pp.png";
    link.download = "/pp.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-xPadding mt-24 min-h-[70vh]">
      <div className="flex justify-between profile_container">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-[50px] rounded-full overflow-hidden">
              <Image width={50} height={50} src="/pp.png" alt="" className="object-cover w-full h-full rounded-full" />
            </div>

            <div>
              <p className="text-[1em] font-semibold">Dammy</p>
              <p className="text-[0.6em]">Creator</p>
            </div>
          </div>

          <p className="text-[0.7em] text-orange800">Following Dammy</p>
        </div>

        <div className="set-3">
          <div className="set">
            <RiAddLine />
          </div>

          <div className="set">
            <RiShareLine />
          </div>

          <div className="set">
            <RiHeart2Line />
          </div>
        </div>
      </div>

      <div className="my-6 picture">
        <Image src="/pp.png" width={1000} height={600} alt="Title" className="object-cover w-full h-3/5" />
      </div>

      <div className="details">
        <p className="font-bold">Name of the Image</p>
        <p className="text-[0.8em]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga alias porro ducimus voluptates optio labore
          corporis id assumenda, quo asperiores, omnis dolorum consequuntur? Laudantium perspiciatis ipsum quam dolore,
          voluptatum illo?
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-0 py-4 sm:gap-6 md:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-3">
          <p className="text-[0.8em]">
            Views <span className="text-[1em] font-semibold">1246</span>
          </p>
          <p className="text-[0.8em]">
            Downloads <span className="text-[1em] font-semibold">1246</span>
          </p>
          <p className="text-[0.8em]">
            Shared <span className="text-[1em] font-semibold">1246</span>
          </p>
          <p className="text-[0.8em]">Published on 10- July-2020 </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-center sm:flex-row">
          <div className="flex items-center gap-1">
            <RiLockUnlockLine size="20" className="text-green800" />
            <p className="text-green800">Free</p>
          </div>

          <div
            className="bg-orange800 text-white py-3 px-6 text-[0.8em] rounded-md w-fit cursor-pointer"
            onClick={downloadImage}
          >
            Download
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-[1.5em]">Similar Images</h2>

        <H_ImagesContainer images={images} />
      </div>
    </div>
  );
};

export default ImagePage;
