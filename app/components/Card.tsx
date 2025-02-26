import Image from 'next/image';
import React from 'react';

export const Card = () => {
  return (
    <ul className='bg-white border border-gray-200 rounded-xl shadow-md'>
      <li className=''>
        <button className='flex gap-6 place-items-center p-8'>
          <Image
            className='w-[65px] h-[65px] rounded-full bg-gray-400 p-4'
            src='https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3Dg'
            width={45}
            height={45}
            alt='image'
          />
          <h2 className='text-lg font-bold'>Benjamin</h2>
        </button>
      </li>
    </ul>
  );
};
