'use client'

import Image from 'next/image';
import { useAniContext } from '../app/dashboard/hooks';
export default function Details() {
const {selectedAniId} = useAniContext();

  return (
  <>
    
    {selectedAniId ? (
      <div className=' p-12  space-y-8 '>
      <section className='flex gap-4 justify-between place-items-center p-4'>
      {/* 1 */}
      <article className='flex gap-4 place-items-center'>
      <Image
        className='w-[65px] h-[65px] rounded-full bg-gray-400 p-4'
        src={selectedAniId?.imageUrl}
        width={45}
        height={45}
        alt='image'
      />
      <h2 className='text-lg font-bold'>{selectedAniId?.name}</h2>
    </article>

    <article className=' flex place-items-center gap-4 [&_button]:py-3 [&_button]:px-6 [&_button]:bg-black [&_button]:text-white [&_button]:rounded-full'>
      <button className=''>Edit</button>
      <button className=''>Checkout</button>
    </article>
  </section>
  {/* 2 */}
  <section className='flex gap-4 justify-between place-items-center p-8'>
    <p className='flex flex-col gap-3 uppercase text-3xl font-bold'>
      Owner Name<span className='text-center text-xl font-medium capitalize'>{selectedAniId?.ownerName}</span>
    </p>
    <p className='flex flex-col gap-3 uppercase text-3xl font-bold'>
      Age<span className='text-center text-xl font-medium capitalize'>{selectedAniId?.age}</span>
    </p>
  </section>
  {/* 3 */}
  <section className=' text-xl'>
  {selectedAniId?.notes}
        </section>
        </div>
      ) : (
        <p className="text-xl text-center m-auto">No Animal selected</p>
       
      )}
      
     </>   
    
  );
}
