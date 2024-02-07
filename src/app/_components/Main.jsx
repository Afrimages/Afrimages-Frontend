'use client';

import H_ImagesContainer from '@/components/ui/H_ImagesContainer';
import React, { useState } from 'react';

export default function Main() {
  const categories = [
    'All',
    'Food',
    'People',
    'Infrastruture',
    'Animal',
    'Fashion&Beauty',
    'Business',
    'Health&Fitness',
    'Music',
    'Nature',
    'Culture',
  ];

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

  const [select, setSelect] = useState(0);

  return (
    <section className='my-10 px-xPadding'>
      <div className='flex gap-10 items-center overflow-auto justify-between'>
        {categories.map((item, i) => {
          return (
            <p
              key={i}
              className={`'cursor-pointer w-fit' ${
                select === i && 'border-b-orange800 border-b-2'
              }`}
            >
              {item}
            </p>
          );
        })}
      </div>

      <H_ImagesContainer images={images}/>
    </section>
  );
}
