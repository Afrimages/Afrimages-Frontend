"use client";

import React, { useEffect, useState } from "react";
import ImageContent from "../ImageContent";
import {
  fetchCategories,
  fetchImages,
  fetchCategoryImages,
} from "@/utils/services";
import Loader from "@/components/Common/Loaders/Loader";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [images, setImages] = useState([]);

  const getCategories = async () => {
    setIsLoading(true);
    const newCategories = await fetchCategories();
    setCategories(newCategories);
    setIsLoading(false);
  };
  const getImages = async () => {
    setIsLoading(true);
    const newImages = await fetchImages();
    setImages(newImages);
    setImagesData(newImages);
    setIsLoading(false);
  };
  const getImagesByCategory = async (categoryId) => {
    setIsLoading(true);
    if (categoryId === "all") {
      setImages(imagesData);
      setIsLoading(false);
      return;
    } else {
      const newImagesData = await fetchCategoryImages(categoryId);
      setImages(newImagesData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
    getImages();
  }, []);

  return (
    <section className="my-10 px-xPadding">
      <div className="flex flex-wrap items-center justify-between gap-10 my-8">
        {categories?.map(({ _id, title }) => {
          return (
            <p
              key={_id}
              onClick={() => {
                setValue(_id);
                getImagesByCategory(_id);
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

      <div className="grid gap-3 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1">
        {isLoading ? (
          <Loader text={"Please wait..."} />
        ) : (
          images?.map((image) => {
            if (typeof image.newDimension?.url == "undefined") {
              return;
            } else {
              return <ImageContent {...image} key={image._id} />;
            }
          })
        )}
      </div>

      {/* <H_ImagesContainer images={images} /> */}
    </section>
  );
}
