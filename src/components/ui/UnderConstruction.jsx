import Link from 'next/link'
import React from 'react'
import { HiChevronDoubleDown, HiChevronRight } from 'react-icons/hi'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col gap-3 text-center items-center justify-center my-[200px] px-xPadding'>
        <h1 className='text-[42px]'>Under Construction</h1>
        <p className='text-[20px]'>Magic is going to Happen.</p>
        <Link href={"/"}>
            <button className='flex items-center justify-center bg-orange800 text-white p-4 rounded-md'>Go back to Homepage <HiChevronRight /> </button>
        </Link>
    </div>
  )
}

export default UnderConstruction