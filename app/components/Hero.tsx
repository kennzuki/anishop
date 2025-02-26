import React from 'react'

export const Hero = () => {
  return (
      <div className='bg-green-500 text-white p-12 flex justify-between gap-7 h-64'> 
          <section className="">
              <h2 className="text-3xl font-bold">Anisoft</h2>
              <p className="">Get your pets daycare sorted</p>
          </section>
          <section className="">
              <p className="font-semibold capitalize">number of guests <span className="rounded-full p-4 font-bold text-2xl bg-gray-200 h-[45px] w-[45px] text-black">2</span></p>
          </section>
    </div>
  )
}
