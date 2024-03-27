"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  RiAddLine,
  RiHeart2Line,
  RiLockUnlockFill,
  RiLockUnlockLine,
  RiShareLine,
} from "react-icons/ri";
import { useParams } from "next/navigation";
import { formatDate } from "@/utils/helpers/formatDate";
import { fetchSingleImage } from "@/utils/services/singleImage.services";
import Loader from "../Common/Loaders/Loader";

const ImagePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState({});
  const { id: imageId } = useParams();

  const getSingleImage = async () => {
    setIsLoading(true);
    const newImage = await fetchSingleImage(imageId);
    setImage(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getSingleImage();
  }, []);

  const {
    _id,
    title,
    description,
    newDimension,
    downloads,
    views,
    shares,
    createdAt,
    userId,
  } = image;

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = newDimension.url;
    link.download = newDimension.url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return isLoading ? (
    <div className="my-[8rem]">
      <Loader text={"Please wait..."} />
    </div>
  ) : (
    <div id={_id} className="px-xPadding pt-24 min-h-[70vh]">
      <div className="flex justify-between profile_container">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              width={0}
              height={0}
              src={userId?.profilePicture}
              alt={userId?._id}
              className="rounded-full w-[50px] h-[50px] object-cover"
            />

            <div>
              <p className="text-[1em] font-semibold">{userId?.firstName}</p>
              <p className="text-[0.6em]">Photographer</p>
            </div>
          </div>

          <p className="text-[0.7em] text-orange800">
            Following {userId?.firstName}
          </p>
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
        <Image
          src={newDimension?.url}
          width={newDimension?.width}
          height={newDimension?.height}
          alt={title}
          className="object-cover w-full h-3/5"
          priority
        />
      </div>

      <div className="details">
        <p className="font-bold"></p>
        <p className="text-[0.8em]">{description}</p>
      </div>

      <div className="flex items-center justify-between py-4 sm:flex-col sm:justify-between sm:gap-6 sm:items-start">
        <div className="flex gap-6 sm:flex-col sm:gap-3">
          <p className="text-[0.8em]">
            Views <span className="text-[1em] font-semibold">{views}</span>
          </p>
          <p className="text-[0.8em]">
            Downloads{" "}
            <span className="text-[1em] font-semibold">{downloads}</span>
          </p>
          <p className="text-[0.8em]">
            Shared <span className="text-[1em] font-semibold">{shares}</span>
          </p>
          <p className="text-[0.8em]">Published on {formatDate(createdAt)}</p>
        </div>

        <div className="flex items-center gap-3 sm:flex-col sm:items-start">
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
      </div>
    </div>
  );
};

export default ImagePage;
