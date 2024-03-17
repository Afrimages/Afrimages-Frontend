"use client";

import H_ImagesContainer from "@/components/UI/H_ImagesContainer";
import React, { useEffect, useState } from "react";
import { publicApi } from "@/utils/configs/axios-instance";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  // const [images, setImages] = useState([]);

  const fetchCategories = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await publicApi(url);
      data.unshift({ _id: "all", title: "all" });
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error.message);
    }
  };
  // const fetchImages = async (url) => {
  //   try {
  //     const resp = await publicApi(url);
  //     console.log(resp);
  //     setImages(data);
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // };

  useEffect(() => {
    fetchCategories("/category");
    // fetchImages("/image?limit=3&search=3");
  }, []);

  const images = [
    {
      imageUrl: "./banner.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "./pp.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "./banner.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="w-[50px] h-[50px] border-dashed border-4 border-orange800 rounded-[50%] animate-spin"></div>
        {/* <h1 className="text-[20px] leading-[24px] font-bold mt-6">
          Please Wait ...
        </h1> */}
      </div>
    );
  }

  return (
    <section className="my-10 px-xPadding">
      <div className="flex gap-10 items-center overflow-auto justify-between">
        {categories?.map(({ _id, title }) => {
          return (
            <p
              key={_id}
              onClick={() => {
                setValue(_id);
              }}
              className={`cursor-pointer w-fit capitalize ${
                _id === value && "border-b-orange800 border-b-2 duration-300"
              }`}
            >
              {title}
            </p>
          );
        })}
      </div>

      <H_ImagesContainer images={images} />
    </section>
  );
}
