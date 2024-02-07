"use client"
import React, { useState } from 'react'
import { RiAddLine, RiHeart2Fill, RiHeart2Line } from 'react-icons/ri'
import Image from 'next/image'


const ImageContent = (content) => {

  return (

    <a href={`/images/2`}>
      <div className='w-full relative top-0 left-0 -z-0 main-image'
    >
        {/* <div className="overlay" /> */}
        <Image width={100} height={100} src={content.imageUrl} alt={content.title} className='w-full h-full' unoptimized unselectable='on'/>
        {/* <div className="overlay-rev" /> */}

      <div className='image-options'>
       <div className="full-overlay" />
          <div className='flex absolute top-1 left-3 items-center gap-2 z-20'>
            <Image unoptimized unselectable='on' width={50} height={50} src="/./pp.png" alt="" className='w-[50px] h-[50px] object-cover rounded-full'/>

              <div className='flex flex-col text-white leading-tight'>
                <p className='font-bold'>Dammy</p>
                <p className='text-[0.8em]'>Creator</p>
              </div>
          </div>

          <div className='absolute bottom-1 flex justify-between items-center w-full px-3 z-20'>
            <div className='flex gap-2 items-center'>
              <div className='img-icon'>
                <RiHeart2Line />
              </div>


              <div className='img-icon'>
                <RiAddLine />
              </div>
          </div>

          <div className='img-icon'>
            Download
          </div>
        </div>
        </div>
        {/* } */}

        
        
    </div>
    </a>
    
  )
}

export default ImageContent