'use client';

import Image from 'next/image';
import React from 'react';

import { useAniContext, useSearchContext } from '../app/dashboard/hooks';

export default function Card() {
  const { ani, handleClickSelectedId } = useAniContext();
  const { searchQuery } = useSearchContext();
  const filteredAnimals = ani.filter((ani) =>
    ani.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <ul className='bg-white border border-gray-200 p-4 '>
      {filteredAnimals.map((ani) => (
        <li
          key={ani.id}
          className='mb-4 border border-gray-200 rounded-xl shadow-md flex flex-col gap-4'
        >
          <button
            onClick={() => {
              handleClickSelectedId(ani.id);
            }}
            className='flex gap-6 place-items-center p-8'
          >
            <Image
              className='w-[65px] h-[65px] rounded-full bg-gray-400 p-4'
              src={ani.imageUrl}
              width={45}
              height={45}
              alt='image'
            />
            <h2 className='text-lg font-bold'>{ani.name}</h2>
          </button>
        </li>
      ))}
    </ul>
  );
}
