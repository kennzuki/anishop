import React from 'react'

export const Hero = () => {
  return (
      <div className='bg-green-500 text-white grid grid-cols-1 sm:grid-cols-2 items-center p-12 justify-between gap-6 sm:h-24 md:h-64 text-center'> 
          <section className="">
              <h2 className="text-3xl font-bold">Anisoft</h2>
              <p className="">Get your pets daycare sorted</p>
          </section>
          <section className="flex flex-col gap-4">
              <p className="font-semibold capitalize ">number of guests <span className="rounded-full p-4 font-bold text-2xl bg-gray-200 h-[45px] w-[45px] text-black text-center">2</span></p>
          </section>
    </div>
  )
}
