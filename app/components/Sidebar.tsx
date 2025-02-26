import React from 'react'
import  Card  from './Card'

export const Sidebar = () => {
  return (
      <div className='p-4 bg-gray-100 dark:bg-slate-100 flex flex-col gap-4 items-center text-black font-semibold'>
          <section className="mb-4">
              <input className='p-2 cursor-pointer border rounded-xl' type="text" placeholder='Search...' />
          </section>
          <section className="">
              <Card/>
          </section>

    </div>
  )
}
