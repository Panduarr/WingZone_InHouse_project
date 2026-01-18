import React from "react";

function Getstarted() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default Getstarted;

export const Contact = () => {
  return (
    <div>
      <img
        className="w-full h-auto object-cover relative"
        src="https://media.gettyimages.com/id/184601291/photo/xxxl-dark-concrete.jpg?s=612x612&w=0&k=20&c=2UaAUWtEf6YvyliWImDML-s1GSfZw5BlEvg4IyWFedk="
        alt="fakeimage"
      />

      <div className=" px-15 py-10 absolute top-20 left-40">
        <h4 className="text-6xl text-white text-center font-bold uppercase">
          ready to own the zone ?
        </h4>
        <h4 className="text-2xl text-white text-center font-normal py-5">
          please Fill out the form below
        </h4>
        <form className=" grid grid-cols-2 gap-20  text-xl text-white font-semibold py-5">
          <div>
            <label className="hover:text-sm" htmlFor="first_name">*First Name</label>
            <br />
            <input
              className=" border-b-2 w-full"
              type="text"
              id="first_name"
            />
          </div>
          <div>
            <label className="hover:text-sm" htmlFor="last_name">*Last Name</label>
            <br />
            <input
              className=" border-b-2 w-full "
              type="text"
              id="last_name"
            />
          </div>
          <div>
            <label className="hover:text-sm" htmlFor="email">*Email d</label>
            <br />
            <input className=" border-b-2 w-full" type="email" id="email" />
          </div>
          <div>
            <label className="hover:text-sm" htmlFor="number">*Phone Number</label>
            <br />
            <input
              className=" border-b-2 w-full"
              type="number"
              id="number"
            />
          </div>
          <div>
            <label className="hover:text-sm" htmlFor="state">*State</label>
            <br />
            <input className=" border-b-2 w-full" type="text" id="state" />
          </div>
          <div>
            <label className="hover:text-sm" htmlFor="Zip">*Pin Code</label>
            <br />
            <input className=" border-b-2 w-full" type="number" id="Zip" />
          </div>
          <div className="text-center absolute left-70 top-140 ">
            <p>*required field</p>
            <p className=" font-serif py-5">₹ 1.7 Crore Liquid Capital Required</p>

            <button className="border-2 px-20 py-2 text-2xl font-bold ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
