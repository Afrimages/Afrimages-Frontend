"use client";
import Image from "next/image";
import { useState } from "react";
import { RiMenu2Line, RiMenu3Line, RiMenu4Line, RiMenu5Line, RiMenuLine, RiSearch2Line } from "react-icons/ri";
import {HiX} from "react-icons/hi"

export default function Navbar({ active = 0 }) {
  const nav = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Collections',
      link: '/collections',
    },
    {
      title: 'Categories',
      link: '/categories',
    }
  ];

  const [mNav, setMNav] = useState(false)

  return (
    <div
      className='grid  bg-white  py-2 px-xPadding items-center justify-center grid-cols-2 border-b-[1px] border-b-gray-300 z-50 fixed top-0 left-0 right-0 mb-10'
    >
      <div className="flex items-center gap-6">
        <a href="/">
        <Image width={200} height={200} src="/./logo.png" alt="" unoptimized className="md:h-[60px] w-auto"/>
        </a>

        <div className='flex gap-10 justify-center text-[0.8em] md:hidden sm:hidden '>
        {nav.map((item, i) => {
          return (
            <a
              href={item.link}
              className={active == i ? 'font-bold text-orange800' : ''}
              key={i}
            >
              {item.title}
            </a>
          );
        })}
      </div>
      </div>


      <div className='flex gap-10 items-center justify-end text-[0.8em] md:hidden sm:hidden'>

      <div className='flex gap-2 items-center border-2 border-gray-300 bg-white rounded-md w-[50%] p-2'>
        <RiSearch2Line size={20} className="text-gray-500" />
        <input type='text' className='outline-none focus:outline-none w-[100%]' placeholder='Search for Images here...' />
      </div>

        <a href="/creator">
          <div className="cursor-pointer">Join Community</div>
        </a>

        <a href="/sign-in">
          <div className='bg-green800 text-white py-2 px-4 rounded-md cursor-pointer'>
            Sign In
          </div>
        </a>
      </div>

      <div className="md:flex sm:flex gap-10 hidden justify-end">
        {/* <RiSearch2Line size={24}/> */}

        <RiMenuLine size={24} onClick={()=> setMNav(!mNav)}/>
      </div>

      {
        mNav &&
        <div className="hidden md:flex bg-black fixed top-0 left-0 w-full h-[100vh] py-6 flex-col ">
          <div className="px-5 pb-6 border-b-2 border-b-gray-700 flex items-end justify-end">
            <HiX className={"text-white text-md"} onClick={()=> setMNav(!mNav)}/>
          </div>

          <div className="flex gap-10 flex-col my-3 p-5 justify-end items-end">
            {
              nav.map((n, i)=>{
                return(
                  <a
                  href={n.link}
                  className={active == i ? 'font-bold text-orange800' : ' text-white'}
                  key={i}
                >
                  {n.title}
                </a>
                )
              })
            }
                <a
                  href={"/creator"}
                  className={' text-white'}
                >
                  Join Community
                </a>

                <a
                  href={"/sign-in"}
                  className={' text-white'}
                >
                  Login
                </a>
          </div>
        </div>
      }
    </div>
  );
}
