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
        Immerse Yourself in the World of <span className='text-orange800 outline-orange800'>Stunning Images</span>
      </h1>

      <p className='text-white text-[1em] w-3/5'>
      Embark on a visual journey with AfrImage's captivating collection, showcasing Africa's diverse landscapes and cultures. Easily bring the unparalleled beauty of the continent into your personal space and share its enchantment globally through high-resolution downloads.
      </p>

      <div className='flex gap-2 items-center bg-white rounded-md w-[40%] p-4'>
        <RiSearch2Line size={24} />
        <input type='text' className='outline-none focus:outline-none' placeholder='Search for Images here...'/>
      </div>
    </section>
  );
}
