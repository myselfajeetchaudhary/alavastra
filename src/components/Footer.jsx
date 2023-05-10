import React from 'react'

function Footer() {
  return (
    <footer className='mx-12 lg:mx-24 mt-12 mb-5'>
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex-1 flex flex-col gap-2 text-sm text-gray-500">
                <h3 className='text-lg text-gray-700'>Categories</h3>
                <p>Men</p>
                <p>Women</p>
                <p>Shoes</p>
                <p>Accessories</p>
                <p>New Arrival</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 text-sm text-gray-500">
                <h3 className='text-lg text-gray-700'>Links</h3>
                <p>FAQs</p>
                <p>Pages</p>
                <p>Stories</p>
                <p>Compare</p>
                <p>Cookies</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 text-justify text-sm text-gray-500">
                <h3 className='text-lg text-gray-700'>About</h3>
                <p>Alavastra is home to a multitude of leading international and national brands for apparels catering to the needs of the entire family. We aspire to provide our customers a memorable international shopping experience. We are one of the largest chain of department stores across India.</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 text-justify text-sm text-gray-500">
                <h3 className='text-lg text-gray-700'>Contact</h3>
                <p>
                    For Customer Support & Queries: <br />
                    Customer Care No. : 1800-419-6238 <br />
                    Customer Care Email: @alavastra.com <br />
                    (Operational Timings: 08:00AM-10:00PM)
                </p>
            </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-5 items-center justify-between mt-12 md:flex-row">
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <span className='uppercase text-2xl tracking-wide'>ALAVASTRA</span>
                <span className='text-xs text-gray-500'>© Copyright 2023 All Rights Reserved</span>
            </div>
            <img src="/images/payment.png" alt="Payment Gateway" className='h-12 w-auto' />
        </div>
    </footer>
  )
}

export default Footer