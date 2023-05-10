import React, { useState } from 'react'
import List from '../components/List'
import { useParams } from 'react-router-dom'

function Products() {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(50);
  const [sort, setSort] = useState(null);

  return (
    <section>
      <div className='flex gap-5 px-5 md:px-8 py-5'>
        {/* Left */}
        <div className='sticky top-3 w-auto h-full flex-[0.2]'>
          <div className="mb-3">
            <h2 className="text-lg whitespace-nowrap font-medium mb-2">Product Categories</h2>
            <div className="flex gap-2">
              <input type="checkbox" id='1' value={1} />
              <label htmlFor="1">Shirts</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='2' value={2} />
              <label htmlFor="2">Coats</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='3' value={3} />
              <label htmlFor="3">Skirt</label>
            </div>
          </div>
          <div className="mb-3">
            <h2 className="text-lg font-medium mb-2">Filter by price</h2>
            <div className="flex items-center">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="mb-3">
            <h2 className="text-lg font-medium mb-2">Sort by</h2>
            <div className="flex gap-2">
              <input type="radio" id='asc' value='asc' name='price' onChange={() => setSort("asc")} />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" id='desc' value='desc' name='price' onChange={() => setSort("desc")} />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-[0.8]">
          <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-[300px] object-cover mb-10' />
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </section>
  )
}

export default Products