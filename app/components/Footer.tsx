import React from 'react'

export const Footer = () => {
    const date=new Date();
    const year=date.getFullYear();
  return (
      <div>
        <footer className='bg-gray-800 text-white text-center  capitalizee text-xl flex justify-between gap-7 p-12'>
              <p className='uppercase'>Kenki anisoft app</p>
              <p className="">All rights reserved copyright@ {year}</p>
        </footer>
    </div>
  )
}
