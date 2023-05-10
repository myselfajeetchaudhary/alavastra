import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Contact() {
  return (
    <section className='flex justify-center bg-[#2879fe]'>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 lg:gap-32 xl:gap-40 text-white p-3">
            <h3 className='uppercase font-medium'>Be in touch with us:</h3>
            <form className='flex'>
                <input type="text" placeholder='Enter your email here...' className='outline-none p-2 rounded-s-[5px]' />
                <button className='uppercase text-sm bg-[#333] p-2 rounded-e-[5px]'>Join us</button>
            </form>
            <div className="flex gap-2">
              <FacebookIcon className='cursor-pointer' />
              <TwitterIcon className='cursor-pointer' />
              <InstagramIcon className='cursor-pointer' />
              <GoogleIcon className='cursor-pointer' />
              <PinterestIcon className='cursor-pointer' />
            </div>
        </div>
    </section>
  )
}

export default Contact