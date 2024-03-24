"use client";
import Image from "next/image";
import { useState } from "react";
import { RiMenuLine, RiSearch2Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar({ active = 0 }) {
  // const [user, setUser] = useLocalStorage("user", null)
  const [user, setUser] = useState(null);

  const { data: session } = useSession();

  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Collections",
      link: "/collections",
    },
    {
      title: "Categories",
      link: "/categories",
    },
  ];

  const [mNav, setMNav] = useState(false);

  return (
    <div className="grid bg-white  py-2 px-xPadding items-center justify-center grid-cols-2 border-b-[1px] border-b-gray-300 z-50 fixed top-0 left-0 right-0 mb-10">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image
            width={200}
            height={200}
            src="/./logo.png"
            alt=""
            priority
            unoptimized
            className="md:h-[60px] w-auto"
          />
        </Link>

        <div className="md:flex gap-10 justify-center text-[0.8em] hidden">
          {nav.map((item, i) => {
            return (
              <Link
                href={item.link}
                className={active == i ? "font-bold text-orange800" : ""}
                key={i}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="md:flex gap-10 items-center justify-end text-[0.8em] hidden">
        <div className="flex gap-2 items-center border-2 border-gray-300 bg-white rounded-md w-[50%] p-2">
          <RiSearch2Line size={20} className="text-gray-500" />
          <input
            type="text"
            className="outline-none focus:outline-none w-[100%]"
            placeholder="Search for Images here..."
          />
        </div>

        {session?.user ? (
          <>
            <Link
              href={"/upload"}
              // className={' text-white'}
            >
              Upload Content
            </Link>

            <Link href="/profile">
              <div className="px-4 py-2 text-white rounded-md cursor-pointer bg-green800">
                Profile
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link href="/creator">
              <div className="cursor-pointer">Join Community</div>
            </Link>

            <Link href="/account/login">
              <div className="px-4 py-2 text-white rounded-md cursor-pointer bg-green800">
                Sign In
              </div>
            </Link>
          </>
        )}
      </div>

      <div className="flex justify-end gap-10 md:hidden">
        {/* <RiSearch2Line size={24}/> */}

        <RiMenuLine size={24} onClick={() => setMNav(!mNav)} />
      </div>

      {mNav && (
        <div className="hidden md:flex bg-black fixed top-0 left-0 w-full h-[100vh] py-6 flex-col ">
          <div className="flex items-end justify-end px-5 pb-6 border-b-2 border-b-gray-700">
            <HiX
              className={"text-white text-md"}
              onClick={() => setMNav(!mNav)}
            />
          </div>

          <div className="flex flex-col items-end justify-end gap-10 p-5 my-3">
            {nav.map((n, i) => {
              return (
                <Link
                  href={n.link}
                  className={
                    active == i ? "font-bold text-orange800" : " text-white"
                  }
                  key={i}
                >
                  {n.title}
                </Link>
              );
            })}

            {user && (
              <Link
                href="/profile"
                className={
                  active == "p" ? "font-bold text-orange800" : " text-white"
                }
              >
                Profile
              </Link>
            )}
            {user ? (
              <>
                <Link href={"/upload"} className={" text-white"}>
                  Upload Content
                </Link>

                <Link href={"/account/login"} className={" text-white"}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link href={"/creator"} className={" text-white"}>
                  Join Community
                </Link>

                <Link href={"/account/login"} className={" text-white"}>
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
