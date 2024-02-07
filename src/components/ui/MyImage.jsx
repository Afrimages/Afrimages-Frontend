import Image from 'next/image'
import React from 'react'
import { RiAddLine, RiDownload2Fill, RiHeart2Line } from 'react-icons/ri'
import Link from 'next/link'

const MyImage = (content) => {
  return (
    <div className=''>

      <Link className='' href={`/images/2`}>
        <div className='w-full h-[300px] relative top-0 left-0 -z-0 main-image'
        >
          <div className="overlay" />
          <Image width={100} height={100} src={content.imageUrl} alt={content.title} className='w-full h-full object-cover' unoptimized unselectable='on' />
          <div className="overlay-rev" />

          <div className='image-options'>
            <div className="full-overlay" />

          </div>
          {/* } */}



        </div>
      </Link>


      <div className="flex items-center justify-between mt-3">
        <div className='flex gap-2 items-center'>
          <RiDownload2Fill size="24px" />
          <p>200</p>
        </div>

        <div className='flex gap-2 items-center'>
          <RiHeart2Line size="24px" />
          <p>243</p>
        </div>
      </div>


    </div>
  )
}

export default MyImage