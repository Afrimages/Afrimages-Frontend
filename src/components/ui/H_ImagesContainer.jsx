import React from "react";
import V_ImagesContainer from "./V_ImagesContainer";

const H_ImagesContainer = ({ images }) => {
  const images3 = [
    {
      imageUrl: "/pp.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/banner.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/banner.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/pp.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/banner.png",
      id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/bb.jpeg",
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
  // const images3 = [
  //   {
  //     imageUrl: "/pp.png",
  //     id: "sin89enewe",
  //     title: "Boys Playing",
  //     creator: {
  //       profilePicture: "./logo.png",
  //       _id: "wwi929212h",
  //       fullName: "Emmy Ogunmepon",
  //     },
  //   },
  //   {
  //     imageUrl: "/banner.png",
  //     id: "sin89enewe",
  //     title: "Boys Playing",
  //     creator: {
  //       profilePicture: "./logo.png",
  //       _id: "wwi929212h",
  //       fullName: "Emmy Ogunmepon",
  //     },
  //   },
  //   {
  //     imageUrl: "/bb.jpeg",
  //     id: "sin89enewe",
  //     title: "Boys Playing",
  //     creator: {
  //       profilePicture: "./logo.png",
  //       _id: "wwi929212h",
  //       fullName: "Emmy Ogunmepon",
  //     },
  //   },
  // ];

  return (
    <div className="grid gap-3 my-10 sm:grid-cols-2 md:grid-cols-3">
      <V_ImagesContainer images={images} />
      <V_ImagesContainer images={images3} />
      <V_ImagesContainer images={images} />
    </div>
  );
};

export default H_ImagesContainer;
