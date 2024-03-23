"use client";
import React, { useState } from "react";
import { RiAddLine, RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const ImageContent = (content) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Link href={`/images/2`}>
      <div className="relative top-0 left-0 w-full -z-0 main-image">
        {/* <div className="overlay" /> */}
        <Image
          width={500}
          height={500}
          src={content.imageUrl}
          alt={content.title}
          className="object-cover w-full h-full"
          unselectable="on"
        />
        {/* <div className="overlay-rev" /> */}

        <div className="image-options">
          <div className="full-overlay" />
          <div className="absolute z-20 flex items-center gap-2 top-1 left-3">
            <Image
              unselectable="on"
              width={50}
              height={50}
              src="/pp.png"
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-full"
            />

            <div className="flex flex-col leading-tight text-white">
              <p className="font-bold">Dammy</p>
              <p className="text-[0.8em]">Creator</p>
            </div>
          </div>

          <div className="absolute z-20 flex items-center justify-between w-full px-3 bottom-1">
            <div className="flex items-center gap-2">
              <div className="img-icon">
                <RiHeart2Line />
              </div>

              <div className="img-icon">
                <RiAddLine />
              </div>
            </div>

            <div className="img-icon">Download</div>
          </div>
        </div>
        {/* } */}
      </div>
    </Link>
  );
};

export default ImageContent;
