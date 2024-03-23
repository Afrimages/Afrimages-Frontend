"use client";
import Footer from "@/components/Layout/Footer";
import MyImage from "@/components/UI/MyImage";
import Navbar from "@/components/Layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiShareFill } from "react-icons/ri";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  const [user] = useState(
    session
      ? session?.user
      : {
          name: "John Doe",
          email: "john@gmail.com",
          image: "/pp.png",
        }
  );

  const data = [
    {
      title: "Downloads",
      value: "3000",
    },
    {
      title: "Likes",
      value: "200",
    },
    {
      title: "Assets",
      value: "100",
    },
    {
      title: "Followers",
      value: "20000",
    },
  ];

  const images3 = [
    {
      imageUrl: "/pp.png",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/banner.png",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/bb.jpeg",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/pp.png",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/banner.png",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
    {
      imageUrl: "/bb.jpeg",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
        profilePicture: "./logo.png",
        _id: "wwi929212h",
        fullName: "Emmy Ogunmepon",
      },
    },
  ];

  // const tabs = [

  // ]
  return (
    <div className="bg-gray-50">
      <Navbar active={"p"} />

      <div className=" mt-[65px]">
        <div className="cover w-full md:h-[30vh] h-[180px]">
          <Image src="/banner.png" alt="" width={500} height={500} className="object-cover w-full h-full" />
        </div>

        <div className="details md:flex items-start justify-between md:items-center px-xPadding md:-mt-[45px] -mt-[30px]">
          <div className="flex items-center justify-between gap-5">
            <Image
              width={300}
              height={300}
              src={session?.user.image}
              alt="profile picture"
              className="md:w-[170px] w-[140px] h-[140px] md:h-[170px] rounded-full border-[5px] border-white object-cover"
            />
            <div>
              <h2 className="font-[600] text-md">{session?.user.name}</h2>
              <p>@dammy410</p>
            </div>
          </div>

          <div className="flex gap-5 items-center mt-[20px] md:mt-0">
            <div className="flex items-center gap-2 px-5 py-3 border-2 rounded-md cursor-pointer border-orange800 text-orange800">
              <RiShareFill />
              <p>Share Profile</p>
            </div>

            <Link href={"/profile/edit"}>
              <div className="flex items-center gap-2 px-5 py-3 text-white border-2 rounded-md cursor-pointer bg-orange800 border-orange800">
                <p>Edit Profile</p>
              </div>
            </Link>
          </div>
        </div>

        {/* hello */}
      </div>

      <div className="container my-10">
        {/* <div className="edit grid grid-cols-[30%_60%] md:gap-5 md:grid-cols-none justify-between  md:block">
            <div> 
              <h2 className='font-medium text-md'>Personal Info</h2>
              <p>Upload your photo and personal details</p>
            </div>

            <form action="" className='flex flex-col gap-5 p-5 bg-white rounded-md md:w-full md:mt-3'>
              <div className='grid grid-cols-2 gap-5 md:grid-cols-none edit'>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
            </form>
          </div> */}

        <div className="flex flex-col gap-3 mt-5">
          <div>
            <h2 className="font-medium text-md">Portfolio</h2>
            <p>Share a few snippets of your work.</p>
          </div>

          <div className="flex grid-cols-2 gap-20 p-5 mt-3 bg-white rounded-md md:grid md:mt-0">
            <div className="flex flex-col gap-5">
              {data.map((item, i) => {
                return (
                  <div className="flex items-center justify-between" key={i}>
                    <p>{item.title}</p>
                    <p className="font-[600]">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div>
              <h2>Social Accounts</h2>
              <div></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-20">
          <div className="text-[24px]">My Assets</div>

          <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 ">
            {images3.map((img, i) => {
              return <MyImage {...img} key={i} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
