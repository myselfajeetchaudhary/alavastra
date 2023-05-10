import React from 'react'
import Card from './Card';

function FeaturedProducts({ type }) {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgbw=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    }
  ];
  return (
    <section>
      <div className='flex flex-col gap-10 mx-24 my-24'>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center text-center justify-between">
          <h1 className='flex-[0.4] text-2xl font-bold'>{type} Products</h1>
          <p className='flex-[0.6] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit Nihil illum ipsa expedita, itaque,  fugiat  cum omnis sed iste eligendi eos illo pariatur dolore necessitatibus explicabo fugit, consectetur quo perspiciatis ab.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          {data.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts