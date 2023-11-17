'use client';

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
    'Health and Fitness',
    'Music',
    'Nature',
    'Culture',
  ];

  const [select, setSelect] = useState(0);

  return (
    <section className='py-20 px-xPadding'>
      <div className='flex justify-between'>
        {categories.map((item, i) => {
          return (
            <div
              key={i}
              className={`'cursor-pointer' ${
                select === i && 'border-b-orange800 border-b-2'
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}
