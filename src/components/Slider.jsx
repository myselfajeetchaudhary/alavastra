import React, { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

    function slideLeft() {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };
    function slideRight() {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    };

  return (
    <section className='relative w-screen h-screen overflow-hidden'>
        <div className='flex w-[300vw] h-full transition-all ease-out duration-1000' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="Model Image 1" className='w-screen h-full object-cover' />
            <img src={data[1]} alt="Model Image 2" className='w-screen h-full object-cover' />
            <img src={data[2]} alt="Model Image 3" className='w-screen h-full object-cover' />
        </div>
        <div className='absolute bottom-24 left-0 right-0 m-auto w-fit h-fit flex items-center justify-center gap-5'>
            <div className='border rounded border-black/75 p-2 cursor-pointer' onClick={slideLeft}>
                <ArrowLeftIcon className='w-6 h-6 text-black' />
            </div>
            <div className='border rounded border-black/75 p-2 cursor-pointer' onClick={slideRight}>
                <ArrowRightIcon className='w-6 h-6 text-black' />
            </div>
        </div>
    </section>
  )
}

export default Slider