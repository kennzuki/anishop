import Image from 'next/image';
import React from 'react';
import { Pet } from '../lib/types';



export default async function Card() {
    const data = await fetch('https://bytegrad.com/course-assets/projects/petsoft/api/pets')
    const pets = await data.json()
   
  return (
      <ul className='bg-white border border-gray-200 p-4 '>
          {pets.map((pet:Pet) => (
              <li key={pet.id} className='mb-4 border border-gray-200 rounded-xl shadow-md flex flex-col gap-4'>
              <button className='flex gap-6 place-items-center p-8'>
                <Image
                  className='w-[65px] h-[65px] rounded-full bg-gray-400 p-4'
                  src={pet.imageUrl}
                  width={45}
                  height={45}
                  alt='image'
                />
                <h2 className='text-lg font-bold'>{pet.name}</h2>
              </button>
            </li>
          ))}
      
    </ul>
  );
}
