import React, { useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";

function Add() {
  const [add, setAdd] = useState(0)
 
  return (
    <div className='absolute insect-0'>
      <div>
        {data.map((item) => {
          return (
            <button key={item.id} onClick={() => setAdd(item.id)} className={`${add === item.id ? "bg-black text-white" : " text-black bg-white"}`}>{item.Name}</button>
          )
        })}
      </div>
      <div>
        {data.find((item) => item.id === add)?.content}
      </div>
    </div>
  )
}

export default Add