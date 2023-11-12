import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

export default function Hero() {
  return (
    <section
      className='w-full h-[90vh] bg-amber-200 bg-cover bg-center bg-no-repeat flex flex-col gap-5 items-center justify-center text-center'
      style={{ backgroundImage: `url(./banner.png)` }}
    >
      {/* <img src="./banner.png" alt="" className='w-full h-full'/> */}
      <h1 className='text-[2.5em] font-[800] text-white'>
        Immerse Yourself in the World of Stunning Images
      </h1>

      <p className='text-white text-[1.5em]'>
        Discover, Download, and Share the Finest Images from Africa
      </p>

      <div className='flex gap-2 items-center bg-white rounded-md w-[40%] p-4'>
        <RiSearch2Line size={24} />
        <input type='text' className='outline-none focus:outline-none' />
      </div>
    </section>
  );
}
