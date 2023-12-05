import Image from 'next/image'
import React from 'react'
import { RiAddLine, RiHeart2Line, RiLockUnlockFill, RiLockUnlockLine, RiShareLine } from 'react-icons/ri'
import H_ImagesContainer from './H_ImagesContainer'

const ImagePage = () => {
  const images = [
    {
        imageUrl: "https://webunwto.s3.eu-west-1.amazonaws.com/2019-10/why-wildlife.jpg",
        id: "sin89enewe",
        title: "Boys Playing",
        creator: {
            profilePicture: "/./logo.png",
            _id: "wwi929212h",
            fullName: "Emmy Ogunmepon"
        }
    },
    {
        imageUrl: "/./pp.png",
        id: "sin89enewe",
        title: "Boys Playing",
        creator: {
            profilePicture: "/./logo.png",
            _id: "wwi929212h",
            fullName: "Emmy Ogunmepon"
        }
    },
    {
        imageUrl: "/./banner.png",
        id: "sin89enewe",
        title: "Boys Playing",
        creator: {
            profilePicture: "/./logo.png",
            _id: "wwi929212h",
            fullName: "Emmy Ogunmepon"
        }
    }
]

  return (
    <div className='px-xPadding mt-24 min-h-[70vh]' >
        <div className="profile_container flex justify-between">
          <div className='flex gap-6 items-center' >

            <div className='flex gap-2 items-center'>
              <Image width={0} height={0}  src="/./pp.png" alt="" unoptimized className='rounded-full w-[50px] h-[50px] object-cover' />

              <div>
                <p className='text-[1em] font-semibold' >Dammy</p>
                <p className='text-[0.6em]' >Creator</p>
              </div>
            </div>

            <p className='text-[0.7em] text-orange800'>Following Dammy</p>
          </div>

          <div className="set-3">
            <div className="set">
              <RiAddLine />
            </div>

            <div className="set">
              <RiShareLine />
            </div>

            <div className="set">
              <RiHeart2Line />
            </div>
          </div>


        </div>

        <div className="picture my-6">
          <Image src="/./pp.png" width={0} height={0} alt="Title" className='w-full h-3/5 object-cover' unoptimized/>
        </div>

        <div className="details">
          <p className='font-bold'>Name of the Image</p>
          <p className='text-[0.8em]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga alias porro ducimus voluptates optio labore corporis id assumenda, quo asperiores, omnis dolorum consequuntur? Laudantium perspiciatis ipsum quam dolore, voluptatum illo?</p>

        </div>

        <div className='py-4 flex sm:flex-col sm:justify-between sm:gap-6 sm:items-start justify-between items-center'>
          <div className="flex gap-6 sm:flex-col sm:gap-3">
              <p className='text-[0.8em]'>Views <span className='text-[1em] font-semibold'>1246</span></p>
              <p className='text-[0.8em]'>Downloads <span className='text-[1em] font-semibold'>1246</span></p>
              <p className='text-[0.8em]'>Shared <span className='text-[1em] font-semibold'>1246</span></p>
              <p className='text-[0.8em]'>Published on 10- July-2020 </p>
          </div>

          <div className='flex sm:flex-col sm:items-start items-center gap-3'>
            <div className="flex items-center gap-1">
            <RiLockUnlockLine size="20" className="text-green800" />
            <p className="text-green800">Free</p>
            </div>

            <div className='bg-orange800 text-white py-3 px-6 text-[0.8em] rounded-md w-fit cursor-pointer'>
              Download
            </div>

          </div>
        </div>

        <div>
          <h2 className='font-bold text-[1.5em]'>Similar Images</h2>

          <H_ImagesContainer images={images}/>
        </div>
        
    </div>
  )
}

export default ImagePage