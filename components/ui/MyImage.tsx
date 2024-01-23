import Image from 'next/image'
import React from 'react'
import { ImageInterface } from '../Interfaces/ImageInterface'
import { RiAddLine, RiDownload2Fill, RiHeart2Line } from 'react-icons/ri'

const MyImage = (content: ImageInterface) => {
  return (
    <div className=''>
        <div className='w-full h-[300px] relative top-0 left-0 -z-0 main-image'
    >
        {/* <div className="overlay" /> */}
        <Image width={100} height={100} src={content.imageUrl} alt={content.title} className='w-full h-full object-cover' unoptimized unselectable='on'/>
        {/* <div className="overlay-rev" /> */}

      <div className='image-options'>
       <div className="full-overlay" />
          <div className='flex absolute top-1 left-3 items-center gap-2 z-20'>
            <Image unoptimized unselectable='on' width={50} height={50} src="/./pp.png" alt="" className='w-[50px] h-[50px] object-cover rounded-full'/>

              {/* <div className='flex flex-col text-white leading-tight'>
                <p className='font-bold'>Dammy</p>
                <p className='text-[0.8em]'>Creator</p>
              </div> */}
          </div>

          
        </div>
        {/* } */}

        
        
    </div>

    <div className="flex items-center justify-between mt-3">
        <div className='flex gap-2 items-center'>
            <RiDownload2Fill />
            <p>200</p>
        </div>

        <div className='flex gap-2 items-center'>
            <RiHeart2Line />
            <p>243</p>
        </div>
    </div>


    </div>
  )
}

export default MyImage