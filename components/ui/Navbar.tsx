import Image from "next/image";
import { RiMenu2Line, RiMenu3Line, RiMenu4Line, RiMenu5Line, RiMenuLine, RiSearch2Line } from "react-icons/ri";

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
    },
    {
      title: 'About',
      link: '/about',
    },
  ];
  return (
    <div
      className='grid  bg-white  py-2 px-xPadding items-center justify-center grid-cols-2 border-b-[1px] border-b-gray-300 fixed top-0 left-0 right-0 mb-10'
    >
      <div className="flex items-center gap-6">
        <Image width={150} height={150} src="/./logo.png" alt="" unoptimized className="md:h-[40px] w-auto"/>

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

        <div className="cursor-pointer">Join Community</div>

        <a href="/sign-up">
          <div className='bg-green800 text-white py-2 px-4 rounded-md cursor-pointer'>
            Sign Up
          </div>
        </a>
      </div>

      <div className="md:flex sm:flex gap-10 hidden justify-end">
        <RiSearch2Line />

        <RiMenuLine />
      </div>
    </div>
  );
}
