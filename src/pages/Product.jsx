import { CompareArrowsOutlined, FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useState } from 'react'

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1163197/pexels-photo-1163197.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2065201/pexels-photo-2065201.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <section>
      <div className='flex flex-col md:flex-row gap-10 px-5 lg:px-10 py-5'>
        {/* Left */}
        <div className="flex-1 flex gap-3 sm:gap-5">
          <div className="flex-[1]">
            <img src={images[0]} alt="" className='w-auto h-auto object-cover cursor-pointer mb-3' onClick={() => setSelectedImg(0)} />
            <img src={images[1]} alt="" className='w-auto h-auto object-cover cursor-pointer' onClick={() => setSelectedImg(1)} />
          </div>
          <div className="flex-[5]">
            <img src={images[selectedImg]} alt="" className='w-full max-h-[550px] object-cover' />
          </div>
        </div>
        {/* Right */}
        <div className="flex-1">
          <h1 className='text-2xl font-medium mb-2'>Long Sleeve Graphic T-shirt</h1>
          <p className='text-xl text-[#2879fe] font-medium mb-2'>$19.9</p>
          <p className='text-gray-500 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium magni possimus sed voluptate, sint ratione mollitia reiciendis impedit maxime architecto voluptatum, est, rerum ab esse suscipit ex officia nam deleniti.</p>
          <div className="flex items-center gap-2 mb-5">
            <button className='bg-gray-100 border w-8 h-8' onClick={() => quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button className='bg-gray-100 border w-8 h-8' onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className='flex items-center gap-2 text-white text-sm bg-[#2879fe] py-2 px-12 uppercase mb-5'><ShoppingCartOutlined /> Add to card</button>
          <div className='text-sm text-[#2879fe] uppercase flex gap-5 mb-10'>
            <span className='flex items-center gap-1 cursor-pointer'><FavoriteBorderOutlined /> Add to wishlist</span>
            <span className='flex items-center gap-1 cursor-pointer'><CompareArrowsOutlined /> Add to compare</span>
          </div>
          <div className="flex flex-col text-gray-400 mb-5">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="flex flex-col gap-1 text-gray-400 uppercase mt-5">
            <span>Description</span>
            <hr className='w-[220px]' />
            <span>Additional Information</span>
            <hr className='w-[220px]' />
            <span>faq</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product