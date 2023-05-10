import { DeleteOutline } from '@mui/icons-material'
import React from 'react'

function Cart() {
    const data = ["https://images.pexels.com/photos/1002649/pexels-photo-1002649.jpeg?auto=compress&cs=tinysrgb&w=1600"];

  return (
    <div className='absolute top-20 right-0 w-[400px] bg-white border border-r-0 shadow-md pl-3 py-2'>
        <h5 className='text-gray-600 text-lg font-medium mb-2'>Products in your cart</h5>
        <div className="flex items-center gap-2 mb-3">
            <img src={data[0]} alt="" className='w-20 h-24 object-cover' />
            <div className="flex flex-col gap-1">
                <h6 className='text-gray-800'>Long Sleeve graphic T-Shirt</h6>
                <div className='flex items-center gap-2 justify-between'>
                    <p className='text-gray-500 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quo assumenda error hic. Recusandae vitae nemo maxime sequi quidem </p>
                    <DeleteOutline className='text-red-500' />
                </div>
                <p className='text-sm text-gray-600'>1 x <span className='text-[#2397fe]'>$19.9</span></p>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <span className='font-medium uppercase'>Subtotal</span>
                <button className='text-xs text-white uppercase bg-[#2387fe] px-5 py-1'>Proceed to checkout</button>
                <span className='text-sm text-red-500 font-medium'>Reset cart</span>
            </div>
        </div>
    </div>
  )
}

export default Cart