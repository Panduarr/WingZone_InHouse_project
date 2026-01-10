import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <Logo />
    </div>
  );
}

export default Navbar;

export const Logo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 flex flex-row justify-around gap-5">
      <div>
        <img
          className="w-50 h-auto "
          src="https://www.wingzonefranchise.com/assets/RedBackground.png"
          alt="logo"
        />
      </div>
      <div>
        <ul className="flex flex-row text-2xl font-bold pt-3 gap-10">
          <li>
            <button onClick={() => setOpen(!open)}>
              <a href="#">our menu</a>
            </button>

            <div className={`overflow-hidden  ${open ? "max-h-90" : "max-h-0"}`}>
              <ul className="flex flex-row text-sm">
                <li>
                  <a href="">BONELESS WINGS</a>
                </li>
                <li>
                  <a href="">ORIGINAL BONE-IN WINGS</a>
                </li>
                <li>
                  <a href="">TENDERS</a>
                </li>
                <li>
                  <a href="">WING ZONE CLASSICS</a>
                </li>
                <li>
                  <a href="">SIDES & SWEETS</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button onClick={() => setOpen(!open)}>
              <a href="">falvor</a>
            </button>

            {/* <div className={`overflow-hidden ${open ? `max-h-90` : `max-h-0`}`}>
              <ul>
                <li><a href="">BUFFALO</a></li>
                <li><a href="">SWEET & SPICY</a></li>
                <li><a href="">SWEET, NO HEAT</a></li>
                <li><a href="">DRY RUB</a></li>
              </ul>
            </div> */}
          </li>

          <li>
            <button onClick={() => setOpen(!open)}>
                <a href="#">franchising</a>
            </button>
            
            {/* <div className={`overflow-hidden ${open ? `max-h-90` : `max-h-0`}`}>
              <ul>
                <li>ABOUT US</li>
                <li>WHY WING ZONE</li>
                <li>INVESTMENT</li>
                <li>OWN THE ZONE</li>
                <li>GET STARTED</li>
              </ul>
            </div> */}
          </li>

          <li>offers</li>

          <li>location</li>

          <li className=" text-xl border-2 px-3 py-2 bg-cyan-300 text-white">
            <a href="">order now</a>
          </li>

          <li>
            <div>⚙️</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
