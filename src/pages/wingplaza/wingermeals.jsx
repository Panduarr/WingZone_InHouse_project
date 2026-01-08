import React, { useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Add from './add';

 const data = [
    {
      id: 1, Name: "Add", content: (
        <div className='flex flex-row gap-5 w-full h-screen'>
          <div className='w-1/2 h-1/2 sticky top-0 self-start'>
            <img className='w-full h-auto object-cover' src="https://olo-images-live.imgix.net/30/30b13b692a8540d8a78e310221dcd08f.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=1c93b920c0ecc59fd5aa706eed72a0ef" alt="image" />
          </div>
          <div className='flex flex-col gap-2 w-1/2 h-[70%] overflow-y-auto pr-4'>
            <h2 className='text-lg font-bold'>20 Boneless & Large fry`</h2>
            <p className="flex flex-row text-cyan-400 font-bold">
              <span className="text-sm py-2">
                <FaRupeeSign />
              </span>
              <span className="text-lg">249</span>
            </p>
            <p className="text-[15px] max-w-60">20 Hund-Brooded Boneless wings, Large Fry, and Dip</p>
            <h4 className='text-md font-bold'>Choose 2 Flavors!</h4>
            <p className='text-sm'><span className='text-white px-2 py-1 bg-red-400 rounded-2xl'>Requried</span> Select a total of 20</p>
            <div>
              <ul className='grid grid-cols-2 gap-2 font-semibold text-black'>
                <li>
                  <input type="number" name="" id="" placeholder='Honey BBQ (No Heat)' />
                </li>
                <li><input type="number" name="" id="" placeholder='Zone Sauce (No Heat)' /></li>
                <li><input type="number" name="" id="" placeholder='Korean BBQ (Mild)' /></li>
                <li><input type="number" name="" id="" placeholder='Thai Chili (Mild)' /></li>
                <li><input type="number" name="" id="" placeholder='Hot Honey (Mild)' /></li>
                <li><input type="number" name="" id="" placeholder='Buffalo (Medium)' /></li>
                <li><input type="number" name="" id="" placeholder='Nuclear Lemon Pepper (Hot)' /></li>
                <li><input type="number" name="" id="" placeholder='Cool Ranch Rub (No Heat)' /></li>
                <li><input type="number" name="" id="" placeholder='Garlic Parm Rub (No Heat)' /></li>
                <li><input type="number" name="" id="" placeholder='Lemon Pepper Tajin Rub (Mild)' /></li>
                <li><input type="number" name="" id="" placeholder='Nashville Hot Rub (Hot)' /></li>
                <li><input type="number" name="" id="" placeholder='No Flavor' /></li>
                <li><input type="number" name="" id="" placeholder='Spicy Peach (Medium)' /></li>
              </ul>
              <h3 className='text-lg font-bold my-2'>Choose a Large Side!</h3>
              <span className='text-white px-2 py-1 bg-red-400 rounded-2xl'>Requried</span>
              <ul className='grid grid-cols-2 gap-2 my-2 font-semibold text-black'>
                <li><input type="text" name="name" placeholder='Big Tots' /></li>
                <li><input type="text" name="name" placeholder='Large Fries' /></li>
                <li><input type="text" name="name" placeholder='Loaded Tots ₹200' /></li>
                <li><input type="text" name="name" placeholder='Loaded Fries ₹200' /></li>
                <li><input type="text" name="name" placeholder='Loaded Mac & Cheese ₹200' /></li>
              </ul>
              <h3 className='text-lg font-bold my-2'>Choose 2 Dipping Sauces</h3>
              <p className='text-sm my-2'><span className='text-white px-2 py-1 bg-red-400 rounded-2xl'>Requried</span> Select a total of 2</p>
              <ul className='grid grid-cols-2 gap-2 font-semibold text-black'>
                <input type="text" name="ranch" placeholder='Ranch' />
                <input type="text" name="Bleu" placeholder='Bleu Cheese' />
                <input type="text" name="nodip" placeholder='No Dip' />
              </ul>
              <h3 className='text-lg font-bold my-2'>Cooking Instructions</h3>
              <p className='text-md font-sans my-2'>Optional</p>
              <ul className='font-semibold text-black'>
                <li><input type="text" name='welldone' placeholder='Well Done (Extra Cook Time)' /></li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

function Wingermeals() {
  const [addModel, setAddModel] = useState(false);
  const [add, setAdd] = useState(0)
  return (
    <div className="bg-pink-50 grid place-content-center">
      <div>
        <h2 className="text-5xl font-bold text-shadow-md text-shadow-red-500 text-center py-10">
          WINGER MEALS
        </h2>
        <p className="text-xl font-semibold px-10">Winger Meals</p>
      </div>
      <div className="grid lg:grid-cols-3 place-content-between py-2 px-10 gap-5 cursor-pointer">
        <div className="flex lg:flex-row lg:justify-around justify-center w-full bg-white border-2 border-gray-300 rounded-lg p-2 shadow-lg shadow-gray-100 hover:shadow-gray-500">
          <div className="">
            <h3 className="text-md font-bold max-w-full">20 Boneless & Large Fry`</h3>
            <p className="flex flex-row text-cyan-400 font-bold">
              <span className="text-sm py-2">
                <FaRupeeSign />
              </span>
              <span className="text-lg">249</span>
            </p>
            <p className="text-sm max-w-60">20 Hund-Brooded Boneless wings, Large Fry, and Dip</p>
          </div>
          <div className="items-center flex flex-col gap-3">
            <img
              className="w-25 h-auto rounded-lg"
              src="https://olo-images-live.imgix.net/30/30b13b692a8540d8a78e310221dcd08f.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=1c93b920c0ecc59fd5aa706eed72a0ef"
              alt="image"
            />
            <button onClick={() => setAddModel(true)} className="flex flex-row gap-2 font-bold justify-center z-10">
              <span className="text-lg">Add</span>
              <span className="text-sm px-2 py-2 rounded-2xl bg-gray-200"><FaPlus /></span>
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row lg:justify-around justify-center w-full bg-white border-2 border-gray-300 rounded-lg p-2 shadow-lg shadow-gray-100 hover:shadow-gray-500">
          <div className="">
            <h3 className="text-md font-bold max-w-full">Bomber Fries</h3>
            <p className="flex flex-row text-cyan-400 font-bold">
              <span className="text-sm py-2">
                <FaRupeeSign />
              </span>
              <span className="text-lg">249</span>
            </p>
            <p className="text-sm max-w-60">20 Hund-Brooded Boneless wings, Large Fry, and Dip</p>
          </div>
          <div className="items-center flex flex-col gap-3">
            <img
              className="w-25 h-auto rounded-lg"
              src="https://olo-images-live.imgix.net/30/30b13b692a8540d8a78e310221dcd08f.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=1c93b920c0ecc59fd5aa706eed72a0ef"
              alt="image"
            />
            <button className="flex flex-row gap-2 font-bold justify-center">
              <span className="text-lg">Add</span>
              <span className="text-sm px-2 py-2 rounded-2xl bg-gray-200"><FaPlus /></span>
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row lg:justify-around justify-center w-full bg-white border-2 border-gray-300 rounded-lg p-2 shadow-lg shadow-gray-100 hover:shadow-gray-500">
          <div className="">
            <h3 className="text-md font-bold max-w-full">20 piece Original Tailgate</h3>
            <p className="flex flex-row text-cyan-400 font-bold">
              <span className="text-sm py-2">
                <FaRupeeSign />
              </span>
              <span className="text-lg">249</span>
            </p>
            <p className="text-sm max-w-60">20 Hund-Brooded Boneless wings, Large Fry, and Dip</p>
          </div>
          <div className="items-center flex flex-col gap-3">
            <img
              className="w-25 h-auto rounded-lg"
              src="https://olo-images-live.imgix.net/30/30b13b692a8540d8a78e310221dcd08f.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=1c93b920c0ecc59fd5aa706eed72a0ef"
              alt="image"
            />
            <button className="flex flex-row gap-2 font-bold justify-center">
              <span className="text-lg">Add</span>
              <span className="text-sm px-2 py-2 rounded-2xl bg-gray-200"><FaPlus /></span>
            </button>
          </div>
        </div>
      </div>
      {addModel && <Add />}
    </div>


  )
}

export default Wingermeals