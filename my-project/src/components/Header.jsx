import React from 'react'
import Logo from '../assets/brand_logo.svg';
const Header = () => {
    const menuItems = [
        {
            id:1,
            link:"menu",
        },
        {
            id:2,
            link:"location",
        },
        {
            id:3,
            link:"about",
        },
        {
            id:4,
            link:"contact",
        },
        
    ]

  return (
    <div className=' w-full flex justify-between items-center'>
        <div>
            <img src={Logo} alt="" className='' />
        </div>
        <div>
            <ul className='flex gap-8 font-semibold text-lg '>
                {menuItems.map(({id,link}) =>(
                    <li key={id} className='uppercase cursor-pointer'> {link} </li>
                ))}
               
            </ul>
        </div>
        <div>
            <button className='flex py-2 px-4 font-bold bg-red-500 text-white'>
                Login
            </button>
        </div>
    </div>
  )
}

export default Header