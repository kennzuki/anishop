import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
const links=[
    {name:'home',path:'/'},
    {name:'dashboard',path:'/dashboard'},
    {name:'account',path:'/accounts'},
    { name: 'contact', path: '/contact' },
]

  return (
    <div className='bg-gray-800 text-white text-center  capitalize text-xl flex justify-between gap-7 p-12'>
          <h1 className="">Kenki Anisoft</h1>
          <nav className="flex justify-between gap-3">
              {links.map((link)=>(
                  <Link href={link.path} key={link.name}>{link.name}</Link>
              ))}
          </nav>
    </div>
  )
}
