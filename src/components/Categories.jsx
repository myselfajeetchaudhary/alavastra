import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <section>
        <div className='grid grid-cols-4 grid-flow-row h-[90vh] gap-2 mx-2'>
            <div className="relative overflow-hidden">
                <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
                <Link to={'products/1'}>
                    <button className='absolute top-0 bottom-0 left-0 right-0 m-auto min-w-[80px] w-fit h-fit p-2 uppercase text-sm bg-white hover:text-white hover:bg-[#2879fe]'>Sale</button>
                </Link>
            </div>
            <div className="relative row-span-2 overflow-hidden">
                <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
                <Link to={'products/1'}>
                    <button className='absolute top-0 bottom-0 left-0 right-0 m-auto min-w-[80px] w-fit h-fit p-2 uppercase text-sm bg-white hover:text-white hover:bg-[#2879fe]'>New Season</button>
                </Link>
            </div>
            <div className="relative overflow-hidden">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
                <Link to={'products/1'}>
                    <button className='absolute top-0 bottom-0 left-0 right-0 m-auto min-w-[80px] w-fit h-fit p-2 uppercase text-sm bg-white hover:text-white hover:bg-[#2879fe]'>Men</button>
                </Link>
            </div>
            <div className="relative overflow-hidden">
                <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
                <Link to={'products/1'}>
                    <button className='absolute top-0 bottom-0 left-0 right-0 m-auto min-w-[80px] w-fit h-fit p-2 uppercase text-sm bg-white hover:text-white hover:bg-[#2879fe]'>Accessories</button>
                </Link>
            </div>
            <div className="relative overflow-hidden">
                <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
                <Link to={'products/1'}>
                    <button className='absolute top-0 bottom-0 left-0 right-0 m-auto min-w-[80px] w-fit h-fit p-2 uppercase text-sm bg-white hover:text-white hover:bg-[#2879fe]'>Women</button>
                </Link>
            </div>
            <div className="relative col-span-2 overflow-hidden">
                <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-full object-cover' />
                <Link to={'products/1'}>
                    <button className='absolute top-0 bottom-0 left-0 right-0 m-auto min-w-[80px] w-fit h-fit p-2 uppercase text-sm bg-white hover:text-white hover:bg-[#2879fe]'>Shoes</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Categories