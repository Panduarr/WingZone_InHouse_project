import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineInfo } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Address() {
  return (
    <>
      <div className='bg-pink-50'>
        <div className='px-20 pt-5'>
          <div className='flex flex-row border-2 border-gray-200 px-2 py-1  rounded-2xl'>
            <div>
              <h2 className='text-lg font-bold max-w-lg py-2'>Wing Zone - India, Vijayawada City</h2>
              <p className='text-sm font-light py-1'>1282 Stabler Lane #620, Vijayawada City, 523310</p>
              <p className='flex flex-row gap-1 font-light py-1'>
                <span className='py-1'> <MdOutlineShoppingBag /></span>Pickup
                <span className='py-1'><CiClock2 /></span>ASAP
              </p>
            </div>
            <div className='text-center lg:pl-[750px] pl-30 py-12'>
              <p><AiOutlineRight /></p>
            </div>
          </div>
        </div>


        <div className='px-20 py-5'>
          <div className='flex flex-row border-2 border-gray-200 px-2 py-1  rounded-2xl'>
            <div className='flex flex-row gap-2'>
              <p className='my-10 mx-2 p-2 rounded-full bg-gray-300'>
                <AiOutlineInfo />
              </p>
              <p className='py-8 font-light text-sm max-w-xl '>
                Pickup Closed. Opens at Ilam PST
                <br />
                This location is in a different time zone from you.
              </p>
            </div>
            <div className='text-center lg:pl-[685px] pl-20  py-12'>
              <p><AiOutlineRight /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Address