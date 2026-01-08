import React from 'react'

function Header() {
  return (
    <div>
        <div>
            <ul className='flex flex-row gap-10 justify-center py-4 bg-yellow-50 text-md font-semibold'>
                <li className='hover:font-bold'><a href="">SPECIALS</a></li>
                <li className='hover:font-bold'>WINGER MEALS</li>
                <li className='hover:font-bold'>TENDERS</li>
                <li className='hover:font-bold'>CHICKEN SANDWICH</li>
                <li className='hover:font-bold'>WINGS</li>
                <li className='hover:font-bold'>SQUADRONS</li>
                <li className='hover:font-bold'>AIR DROP PACKS</li>
                <li className='hover:font-bold'>Kids Meals</li>
                <li className='hover:font-bold'>Sides</li>
            </ul>
        </div>
    </div>
  )
}

export default Header