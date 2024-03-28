import React from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
const Footer = () => {
  return (
    <>
    <div className='mt-10 p-5 max-w-[86%] mx-auto md:grid grid-cols-9 gap-2 sm:gap-8 text-[#a9a9a9] justify-evenly'>
       <div>
        <h1 className='font-bold text-[17px]'>Useful Links</h1>
        <ul>
            <li className="p-1">About</li>
            <li className="p-1">Careers</li>
            <li className="p-1">Blog</li>
            <li className="p-1">Press</li>
            <li className="p-1">Lead</li>
            <li className="p-1">Value</li>
        </ul>
       </div>
       <div>
        <ul>
            <li className="p-1">Privacy</li>
            <li className="p-1">Terms</li>
            <li className="p-1">FAQs</li>
            <li className="p-1">Security</li>
            <li className="p-1">Mobile</li>
            <li className="p-1">Contact</li>
        </ul>
       </div>
       <div>
        <ul>
            <li className="p-1">Partner</li>
            <li className="p-1">Express</li>
            <li className="p-1">Seller</li>
            <li className="p-1">Warehouse</li>
            <li className="p-1">Deliver</li>
        </ul>
       </div>
       <div className='col-span-2'>
        <h1 className='text-xl fond-bold'>Categories <span className='text-green-600 mr-[10px]'>see all</span> </h1>
        <ul>
            <li className="p-1">Vegetables & Fruits</li>
            <li className="p-1">Cold Drinks & Juices</li>
            <li className="p-1">Bakery & Biscuits</li>
            <li className="p-1">Dry Fruits, Masala & Oil</li>
            <li className="p-1">Paan Corner</li>
            <li className="p-1">Pharma & Wellness</li>
            <li className="p-1">Personal Care</li>
            <li className="p-1">Beauty & Cosmetics</li>
            <li className="p-1">Toys & Games</li>
        </ul>
       </div>
       <div className='col-span-2'>
        <ul>
        <li className="p-1">Vegetables & Fruits</li>
            <li className="p-1">Cold Drinks & Juices</li>
            <li className="p-1">Bakery & Biscuits</li>
            <li className="p-1">Dry Fruits, Masala & Oil</li>
            <li className="p-1">Paan Corner</li>
            <li className="p-1">Pharma & Wellness</li>
            <li className="p-1">Personal Care</li>
            <li className="p-1">Beauty & Cosmetics</li>
            <li className="p-1">Toys & Games</li>
        </ul>
       </div>
       <div className='col-span-2'>
        <ul>
        <li className="p-1">Vegetables & Fruits</li>
            <li className="p-1">Cold Drinks & Juices</li>
            <li className="p-1">Bakery & Biscuits</li>
            <li className="p-1">Dry Fruits, Masala & Oil</li>
            <li className="p-1">Paan Corner</li>
            <li className="p-1">Pharma & Wellness</li>
            <li className="p-1">Personal Care</li>
            <li className="p-1">Beauty & Cosmetics</li>
            <li className="p-1">Toys & Games</li>
        </ul>
       </div>
    </div>
       <div className='mt-10 p-5 max-w-[86%] mx-auto md:grid grid-cols-3 gap-2 sm:gap-8 text-[#a9a9a9] justify-items-center'>
          <div>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024</div>
          <div className='flex justify-center align-center m-auto justify-items-center gap-3 '>
            <h1>Download App</h1>
             <FaGooglePlay className='font-bold text-5xl text-gray-800'/>
             <IoLogoAppleAppstore className='font-bold text-5xl text-gray-800'/>
          </div>
          <div className='flex justify-items-center font-bold text-5xl text-green-800 gap-3'>
          <FaGooglePlay />
             <IoLogoAppleAppstore/>
             <FaGooglePlay />
             <IoLogoAppleAppstore/>
             <FaGooglePlay />
          </div>
       </div>
       <div className='p-2 max-w-[86%] mx-auto text-[13px] text-gray-800'>
       “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
       </div>
    </>
  )
}

export default Footer
