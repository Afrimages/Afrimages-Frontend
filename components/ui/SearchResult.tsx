"use client"

import React, { useState } from 'react'
import { RiImage2Fill, RiVideoFill } from 'react-icons/ri'

const SearchResult = () => {
    const search = "Food"
    const [active, setActive] = useState(0)

    const options = [
        {
            title: "All",
            icon: null,
            value: "1299"
        },
        {
            title: "Images",
            icon: <RiImage2Fill />,
            value: "300"
        },
        {
            title: "Video",
            icon: <RiVideoFill />,
            value: "800"
        }
    ]
  return (
    <div className='my-10 px-xPadding min-h-[70vh]'>
        <p className='text-[1.2em] text-gray-500'>Results for <span className='font-bold text-black'>{search}</span> </p>

        <div className="more-options flex items-center justify-center my-3 gap-10">
            {
                options.map((option, i)=> {
                    return (
                        <div className={`flex items-center gap-1 text-gray-500 ${active == i && "border-b-orange800 border-b-2"}`} >
                            {/* <div className='flex items-center'> */}
                                <p>{option.icon}</p>
                                <p>{option.title}</p>
                            {/* </div> */}
                            <p>{option.value && `${option.value}k`}</p>
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default SearchResult