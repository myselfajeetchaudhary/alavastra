import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
        <div className='relative'>
            <div className="relative group w-full h-[350px] overflow-hidden">
                <img src={item.img} alt="" className='w-full h-full object-cover' />
                <img src={item.img2} alt="" className='absolute top-0 w-full h-full object-cover -z-[1] group-hover:z-[1] duration-300 ease-in-out' />
            </div>
            <div className="flex flex-col gap-2">
                <p className='text-[17px]'>{item.title}</p>
                <div className="text-lg font-medium flex gap-5">
                    <p className='text-gray-500 line-through'>${item.oldPrice}</p>
                    <p>${item.price}</p>
                </div>
                {item.isNew && <div className="absolute top-1 left-1 bg-white text-xs text-green-500 font-medium px-2 py-1 z-10">New Season</div>}
            </div>
        </div>
    </Link>
  )
}

export default Card