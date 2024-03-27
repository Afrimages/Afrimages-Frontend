"use client";
import React from "react";
import { RiAddLine, RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const ImageContent = (content) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = content.newDimension.url;
    link.download = content.newDimension.url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Link href={`/images/${content._id}`}>
      <div className="relative top-0 left-0 w-full -z-0 main-image my-6">
        {/* <div className="overlay" /> */}
        <div className="w-full h-full">
          <Image
            width={500}
            height={500}
            src={content.newDimension?.url}
            alt={content.title}
            className="object-cover w-full h-full"
            unselectable="on"
          />
        </div>
        {/* <div className="overlay-rev" /> */}
        <div className="image-options">
          <div className="full-overlay" />
          <div className="absolute z-20 flex items-center gap-2 top-1 left-3">
            <Image
              unselectable="on"
              width={50}
              height={50}
              src={content.userId?.profilePicture}
              alt="profile-picture"
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div className="flex flex-col leading-tight text-white">
              <p className="font-bold">{content.userId?.firstName}</p>
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

            <div className="img-icon" onClick={downloadImage}>
              Download
            </div>
          </div>
        </div>
        {/* } */}
      </div>
    </Link>
  );
};

export default ImageContent;
