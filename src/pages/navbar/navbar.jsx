

import React from 'react'

function Navbar() {
  return (
    <div>
      <Menupage />
    </div>
  )
}

export default Navbar


export const Menupage = () => {
  return (
    <div>
      <ul className='flex flex-row justify-around text-sm lg:text-xl py-5'>
        <li className='active:font-bold hover:font-bold'><a href="/about">ABOUT US</a></li>
        <li className='active:font-bold'><a href="/whywing">WHY WING ZONE</a></li>
        <li className='active:font-bold'><a href="/investment">INVESTMENT</a></li>
        <li className='active:font-bold'><a href="/ownthezone">OWN THE ZONE</a></li>
        <li className='active:font-bold'><a href="/getstarted">GET STARTED</a></li>
      </ul>
    </div>
  );
};


