"use client"

import React, { useState } from 'react'
import { RiCollageFill, RiImage2Fill, RiVideoFill } from 'react-icons/ri'
import H_ImagesContainer from './H_ImagesContainer'

const SearchResult = ({query}) => {
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
            title: "Collection",
            icon: <RiCollageFill />,
            value: "800"
        }
    ]

    const images = [
        {
            imageUrl: "./banner.png",
            id: "sin89enewe",
            title: "Boys Playing",
            creator: {
                profilePicture: "./logo.png",
                _id: "wwi929212h",
                fullName: "Emmy Ogunmepon"
            }
        },
        {
            imageUrl: "./pp.png",
            id: "sin89enewe",
            title: "Boys Playing",
            creator: {
                profilePicture: "./logo.png",
                _id: "wwi929212h",
                fullName: "Emmy Ogunmepon"
            }
        },
        {
            imageUrl: "./banner.png",
            id: "sin89enewe",
            title: "Boys Playing",
            creator: {
                profilePicture: "./logo.png",
                _id: "wwi929212h",
                fullName: "Emmy Ogunmepon"
            }
        }
    ]
  return (
    <div className='mt-24 px-xPadding min-h-[70vh]'>
        <p className='text-[1.2em] text-gray-500'>Results for <span className='font-bold text-black'>{query}</span> </p>

        <div className="more-options flex items-center justify-center my-3 gap-10 md:gap-0 md:justify-between">
            {
                options.map((option, i)=> {
                    return (
                        <div className={`flex items-center gap-1 text-gray-500 ${active == i && "border-b-orange800 border-b-2"}`} >
                            {/* <div className='flex items-center'> */}
                                <p>{option.icon}</p>
                                <p>{option.title}</p>
                            {/* </div> */}
                            <p>{option.value && `(${option.value}k)`}</p>
                        </div>
                    )
                })
            }
        </div>

        <H_ImagesContainer images={images}/>
    </div>
  )
}

export default SearchResult