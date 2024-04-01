import React from 'react'
import shoe from '../assets/shoe_image.svg'
import brands from '../assets/shops.svg'
const Hero = () => {
    return (
        <>
            <div className='flex w-full gap-5 h-screen'>

                <div className='w-1/2 ml-2 text-left flex flex-col gap-10'>
                    <h1 className='uppercase text-8xl font-bold w-full'>your feet deserve the best </h1>
                    
                    <p className='font-semibold text-gray-700 items-center w-[70%]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES
                        .YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className='flex gap-9'>
                        <button className='capitalize bg-red-500 text-white border-2 font-semibold px-4 py-2'> shop now</button>
                        <button className='capitalize text-gray-500 border-gray-700 border-2 px-4 py-2'> category</button>
                    </div>

                    <div className='flex gap-5 capitalize flex-col justify-start items-start flex-wrap'>
                        <span className=''>also available on: </span>
                        <img src={brands} alt=""  className='w-1/6'/>
                    </div>
                </div>

                <div className='w-1/2'>
                    <img src={shoe} alt="" className="shoe-image transition-transform duration-300 transform hover:rotate-y-30 hover:scale-110"/>
                </div>
            </div>
        </>
    )
}

export default Hero