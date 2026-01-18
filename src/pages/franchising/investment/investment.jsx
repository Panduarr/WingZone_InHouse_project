import React from "react";

function Investment() {
  return (
    <div className="bg-pink-50 ">
      <About />
      <Ownership />
      <Form />
      <SlideShow />
    </div>
  );
}

export default Investment;

export const About = () => {
  return (
    <>
      {/* information */}
      <div className="flex flex-row justify-around gap-10 px-18">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold">INVESTMENT INFORMATION</h2>
          <h3 className="text-2xl font-semibold">
            Financial Requirements for Our Chicken Franchise
          </h3>
          <p className="text-lg text-justify max-w-2xl">
            One of the most common questions prospective franchise owners have
            when inquiring about our chicken wing franchise opportunity is about
            the financial commitment. Wing Zone is proud to offer low start-up
            costs for new owners. Our development team suggests that you take
            the time to thoroughly review our Franchise Disclosure Document
            (FDD) to fully understand the commitment. We've pulled some of the
            most relevant information and included it below. Take a look and
            reach out to us at (855) 928-3580 if you have any questions.
          </p>
        </div>
        <div>
          <img
            className="w-96 h-auto object-cover "
            src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
            alt="fakeimage"
          />
        </div>
      </div>

      {/* contact */}
      <div className="flex flex-row gap-8 border-2 border-orange-600 py-2 px-3 max-w-3/4 my-10 cursor-pointer mx-18">
        <div className="">
          <h3 className="text-3xl text-center font-extrabold">
            Stand Out Among The Rest
          </h3>
          <p className="text-sm text-center font-medium py-3">
            and get in touch with our franchise development team today.
          </p>
        </div>
        <div className="bg-cyan-500 py-1 px-3 w-auto h-15 mt-2 ml-2">
          <h3 className="text-2xl text-white text-center font-bold px-5 py-2">
            Contact Us to Get Started
          </h3>
        </div>
      </div>

      {/* options */}
      <div className="bg-red-500 py-5">
        <div>
          <h2 className="text-center text-xl text-white font-bold">
            LEARN MORE ABOUT YOUR FINANCING OPTIONS
          </h2>
          <div>
            <ul className="flex flex-row justify-center gap-10 py-5 ">
              <li className="hover:underline text-center text-sm text-white font-bold">
                BOEFLY
              </li>
              <li className="hover:underline text-center text-sm text-white font-bold">
                FRANFUND
              </li>
              <li className="hover:underline text-center text-sm text-white font-bold">
                DIRECT EQUITY
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-40 relative">
        <div className="absolute left-2/5 top-10">
          <img
            className="w-70 h-auto object-cover"
            src="public\image_vetfran.png"
            alt="Veteran Fran"
          />

          <div className="bg-red-500 rounded-sm my-5 py-2 px-2">
            <h4 className="text-white text-center text-sm font-bold cursor-pointer">
              LEARN MORE ABOUT VETFRAN
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export const Ownership = () => {
  return (
    <div className="px-18 py-8 flex flex-row gap-30">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">OWNERSHIP</h2>
        <h3 className="text-2xl font-semibold">Customized For You</h3>
        <p className="text-sm text-justify max-w-lg">
          Our customizable, comprehensive steps to ownership will set you up for
          success. Designed to make sure that we cover every detail necessary to
          ensure a smooth, seamless process. Take the first step today!
        </p>
        <div>
          <ul className="flex flex-row justify-around gap-10 py-5">
            <li className="hover:bg-orange-500 hover:text-white px-5 py-1 rounded-sm border-2 text-orange-500 border-orange-500 font-bold ">
              Step to the zone
            </li>
            <li className="hover:bg-orange-500 hover:text-white px-5 py-1 rounded-sm border-2 text-orange-500 border-orange-500 font-bold ">
              Hear From More Owners
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className="w-96 h-auto object-cover "
          src="public/person.png"
          alt="fakeimage"
        />
      </div>
    </div>
  );
};

export const Form = () => {
  return (
    <div className="relative">
      <div className="my-10 mx-15">
        <img
          className="w-3/4 h-auto object-cover absolute -left-20"
          src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
          alt="fakeimage"
        />
      </div>
      <div className="flex flex-col gap-2 absolute left-200 top-15 bg-cyan-400 px-15 py-10">
        <h4 className="text-md font-normal">
          Fill out the form below to begin:
        </h4>
        <form className=" text-sm font-semibold">
          <div>
            <label htmlFor="first_name">*First Name</label>
            <br />
            <input
              className=" border-b-[1px] w-full"
              type="text"
              id="first_name"
            />
          </div>
          <div>
            <label htmlFor="last_name">*Last Name</label>
            <br />
            <input
              className=" border-b-[1px] w-full"
              type="text"
              id="last_name"
            />
          </div>
          <div>
            <label htmlFor="email">*Email d</label>
            <br />
            <input className=" border-b-[1px] w-full" type="email" id="email" />
          </div>
          <div>
            <label htmlFor="number">*Phone Number</label>
            <br />
            <input
              className=" border-b-[1px] w-full"
              type="number"
              id="number"
            />
          </div>
          <div>
            <label htmlFor="state">*State</label>
            <br />
            <input className=" border-b-[1px] w-full" type="text" id="state" />
          </div>
          <div>
            <label htmlFor="Zip">*Zip Code</label>
            <br />
            <input className=" border-b-[1px] w-full" type="number" id="Zip" />
          </div>
          <div>
            <p className="text-sm font-serif">
              ₹ 1.7 Crore Liquid Capital Required
            </p>
            <div className="text-center my-3">
              <button className="border-2 px-4 py-2 text-sm font-bold">
                Get Started
              </button>
            </div>
            <p className="max-w-60 text-[8px] text-justify">
              By entering your information you are agreeing to receive
              information about Wing Zone via text and email. You can opt-out at
              any time. No mobile information will be shared with third
              parties/affiliates for marketing/promotional purposes. All other
              categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export const SlideShow = () => {
  return (
    <div className="mt-[700px] px-30">

      <h2 className="text-5xl text-center py-10 text-gray-500 font-bold">Our Awards</h2>

      <div className="flex flex-row gap-5 overflow-x-scroll scroll-auto px-20">
        <img
          className="w-30 h-10 object-fill mt-10"
          src="https://www.wingzonefranchise.com/images/accolades/fast_casual_top100.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/buffalo-wing-festival.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/TopWorkPlace.1).png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/rsz_rsz_1rsz_innovation_award_2021_1000px_2_1.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/awards/Top-Places-to-work-2021.png"
          alt=""
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/2023-FCtop100.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/top100-badge.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-10 object-fill mt-10"
          src="https://www.wingzonefranchise.com/images/accolades/fast_casual_top100.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/buffalo-wing-festival.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/TopWorkPlace.1).png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/rsz_rsz_1rsz_innovation_award_2021_1000px_2_1.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/awards/Top-Places-to-work-2021.png"
          alt=""
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/2023-FCtop100.png"
          alt="slide_image"
        />
        <img
          className="w-30 h-30 object-fill"
          src="https://www.wingzonefranchise.com/images/accolades/top100-badge.png"
          alt="slide_image"
        />
      </div>
    </div>
  );
};
