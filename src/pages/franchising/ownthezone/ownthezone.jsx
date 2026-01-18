import React from "react";

function OwnTheZone() {
  return (
    <div className="bg-pink-50 px-15 py-10">
      <Steps />
      <Banner />
      <SlideShow />
    </div>
  );
}

export default OwnTheZone;

export const Steps = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h4 className="text-center text-xl font-mono font-medium max-w-auto">
          <strong>Steps to</strong>
        </h4>
        <h2 className="text-center text-4xl font-mono font-bold  max-w-auto">
          Ownership
        </h2>
        <h3 className="text-center  text-2xl font-mono font-bold  max-w-auto">
          Get Started with Our Chicken Wing Franchise
        </h3>
        <p className="text-md max-w-full font-sans">
          Are you ready to take the first step towards owning a chicken wing
          franchise location? If you've explored our website and feel like we
          would be a great fit for one another, we invite you to take a look at
          the steps to ownership below. We've broken them down into ten steps,
          starting with your initial inquiry and ending with your opening day.
          These steps were carefully designed to make sure that we cover every
          detail necessary to ensure a smooth, seamless process.
        </p>
      </div>

      <div className="relative">
        <div className="rotate-90 w-3/4 hidden lg:block lg:absolute right-60 top-[510px] ">
          <hr />
        </div>
        <div className="rotate-90 w-3/4 hidden lg:block lg:absolute right-60 top-[1365px] ">
          <hr />
        </div>
        <div className="rotate-90 w-3/4 hidden lg:block lg:absolute right-60 top-[2223px] ">
          <hr />
        </div>
        <div className="rotate-90 w-3/4 hidden lg:block lg:absolute right-60 top-[3080px] ">
          <hr />
        </div>
        <div className="rotate-90 w-[400px] hidden lg:block lg:absolute right-[470px] top-[3700px] ">
          <hr />
        </div>

        {/* step1 */}
        <div className="flex flex-col lg:flex-row pt-15">
          <div className=" py-20 pl-30 w-full">
            <img
              className="w-40 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/inquiry.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-20 right-[630px] ">
              <hr />
            </div>
            <h2 className="text-2xl max-w-md text-red-500 font-bold uppercase">
              Step 1
            </h2>
            <h3 className="text-xl max-w-md text-black font-bold uppercase py-5 ">
              Inquiry
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              You’ve got a love for chicken wings, you’re looking to start your
              own business, and you feel like you’d be a great fit for Wing
              Zone. Great! That’s exactly what we want to hear. After you’ve
              taken some time to explore our website, learn about our company,
              and assess the financial requirements, it’s time to get in touch
              with our franchise development team. Visit our
              <a className="text-red-500 underline font-bold" href="#">
                Get Started
              </a>
              page and fill out the form. We’ll get in touch with you soon to
              discuss your interest.
            </p>
          </div>
        </div>

        {/* step2 */}
        <div className="flex flex-col lg:flex-row-reverse pt-15">
          <div className=" py-20 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/phone.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[540px] right-[670px] ">
              <hr />
            </div>
            <h2 className="text-2xl lg:text-end max-w-md text-red-500 font-bold uppercase pr-10">
              Step 2
            </h2>
            <h3 className="text-xl lg:text-end max-w-xl text-black font-bold uppercase py-5 pr-10 ">
              “Getting to know you” Phone Call
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              Chemistry matters, so making sure you are a good fit for our
              company – and we are a good fit for you – is the primary intention
              of this initial phone discussion. Our team will gauge your
              interest in our chicken wings franchise, learn about your
              expectations, and answer any questions you may have. Some areas we
              will focus on including your timeline of how quickly you want to
              move, your financial situation, and what is driving you to open up
              a Wing Zone restaurant.
            </p>
          </div>
        </div>

        {/* step3 */}
        <div className="flex flex-col lg:flex-row pt-15">
          <div className=" py-20 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/validation.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[980px] right-[630px] ">
              <hr />
            </div>
            <h2 className="text-2xl max-w-md text-red-500 font-bold uppercase">
              Step 3
            </h2>
            <h3 className="text-xl max-w-md text-black font-bold uppercase py-5 ">
              Validation/Due Diligence call
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              After the “Getting to Know You” phone call, we’ll give you some
              time to review the Franchise Disclosure Document (FDD). Our next
              phone call will dive deeper into your interest and answer any new
              questions you may have. We’ll also discuss financial ability,
              available territories, and more.
            </p>
          </div>
        </div>

        {/* step4 */}
        <div className="flex flex-col lg:flex-row-reverse pt-15">
          <div className=" py-10 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/financial.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[1405px] right-[670px] ">
              <hr />
            </div>
            <h2 className="text-2xl lg:text-end max-w-md text-red-500 font-bold uppercase pr-10">
              Step 4
            </h2>
            <h3 className="text-xl lg:text-end max-w-xl text-black font-bold uppercase py-5 pr-10 ">
              Financial Qualification
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              If you require financing, we’ll review with you the available
              options and can refer you to one of our financial partners.
            </p>
          </div>
        </div>

        {/* step5 */}
        <div className="flex flex-col lg:flex-row pt-15">
          <div className=" py-20 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/pin.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[1750px] right-[630px] ">
              <hr />
            </div>
            <h2 className="text-2xl max-w-md text-red-500 font-bold uppercase">
              Step 5
            </h2>
            <h3 className="text-xl max-w-md text-black font-bold uppercase py-5 ">
              DEVELOPMENT TERRITORY DETERMINATION
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              We will schedule a conference call with you and, using our
              analytics and your desired territory, we’ll identify the best
              search areas to begin site selection. If you haven’t yet done so,
              check out our
              <a className="text-red-500 underline font-bold" href="#">
                Available Territories
              </a>
              page to learn more about the areas that are currently open.
            </p>
          </div>
        </div>

        {/* step6 */}
        <div className="flex flex-col lg:flex-row-reverse pt-15">
          <div className=" py-10 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/meet.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[2165px] right-[670px] ">
              <hr />
            </div>
            <h2 className="text-2xl lg:text-end max-w-md text-red-500 font-bold uppercase pr-10">
              Step 6
            </h2>
            <h3 className="text-xl lg:text-end max-w-xl text-black font-bold uppercase py-5 pr-10 ">
              MEET THE TEAM
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              Held either remotely or in-person, this event will introduce you
              to some of our leadership team and people from various
              departments. This will be a great chance for you to get answers to
              questions you may have about the daily responsibilities, training,
              marketing, and more.
            </p>
          </div>
        </div>

        {/* step7 */}
        <div className="flex flex-col lg:flex-row pt-15">
          <div className=" py-10 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/star.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[2510px] right-[630px] ">
              <hr />
            </div>
            <h2 className="text-2xl max-w-md text-red-500 font-bold uppercase">
              Step 7
            </h2>
            <h3 className="text-xl max-w-md text-black font-bold uppercase py-5 ">
              EXECUTE DEVELOPMENT RIGHTS AGREEMENT
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              Today’s the day you will execute the development agreement! You
              will also schedule a real estate planning meeting and pay any
              fees.
            </p>
          </div>
        </div>

        {/* step8 */}
        <div className="flex flex-col lg:flex-row-reverse pt-15">
          <div className=" py-10 pl-30 w-full">
            <img
              className="w-60 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/build.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[2920px] right-[670px] ">
              <hr />
            </div>
            <h2 className="text-2xl lg:text-end max-w-md text-red-500 font-bold uppercase pr-10">
              Step 8
            </h2>
            <h3 className="text-xl lg:text-end max-w-xl text-black font-bold uppercase py-5 pr-10 ">
              SITE SELECTION & BUILD OUT
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              It’s time to watch your new Wing Zone restaurant come to life!
              Throughout every stage of the process, you’ll work alongside our
              real estate and construction departments. This includes finding
              the location, negotiating the lease, construction, and getting set
              up for your opening.
            </p>
          </div>
        </div>

        {/* step9 */}
        <div className="flex flex-col lg:flex-row pt-15">
          <div className=" py-10 pl-30 w-full">
            <img
              className="w-50 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/training.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[3270px] right-[630px] ">
              <hr />
            </div>
            <h2 className="text-2xl max-w-md text-red-500 font-bold uppercase">
              Step 9
            </h2>
            <h3 className="text-xl max-w-md text-black font-bold uppercase py-5 ">
              Training
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              We want to make sure you can hit the ground running on day one, so
              we’ll provide in-depth training to ensure you’re fully prepared.
              Our three-phase program includes both corporate and local
              restaurant training. We’ll also provide training at your
              restaurant before, during, and after your opening to ensure that
              you and your team are ready to deliver exceptional service right
              from the start.
            </p>
          </div>
        </div>

        {/* step10 */}
        <div className="flex flex-col lg:flex-row-reverse pt-15">
          <div className=" py-10 pl-30 w-full">
            <img
              className="w-60 h-auto object-contain"
              src="https://www.wingzonefranchise.com/assets/2023/steps/open.png"
              alt="steps_image"
            />
          </div>
          <div className="w-full pr-30">
            <div className="w-10 absolute top-[3670px] right-[670px] ">
              <hr />
            </div>
            <h2 className="text-2xl lg:text-end max-w-md text-red-500 font-bold uppercase pr-10">
              Step 10
            </h2>
            <h3 className="text-xl lg:text-end max-w-xl text-black font-bold uppercase py-5 pr-10 ">
              OPEN A Wing Zone!
            </h3>
            <p className="max-w-md text-lg py-2 text-justify">
              Now that you’ve done the heavy lifting to get approved, find your
              location, and get your Wing Zone built, let’s start making money!
              We’ll be there during your opening to help work out any issues
              that arise and answer any questions you or your team may have.
              We’ll also celebrate the start of your exciting journey with Wing
              Zone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="relative py-5">
      <div className="hidden lg:block lg:relative -left-20 py-10">
        <img
          className="w-3/4 h-[600px] "
          src="https://www.wingzonefranchise.com/assets/texture-bg.webp"
          alt="image"
        />
        <div className="absolute top-25 left-40  border-y-4  border-cyan-500 p-5">
          <h4 className="text-4xl text-white font-bold text-center ">
            Take The First Step To
          </h4>
          <h2 className="text-9xl text-white font-bold">
            Owning <br />
            The Zone
          </h2>
        </div>
        <div className="absolute top-70 -left-20">
          <img
            className="w-1/2 h-1/2"
            src="	https://www.wingzonefranchise.com/assets/wings.webp"
            alt="image"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:absolute left-180 top-20 bg-red-600 px-15 py-20">
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
            <p className="max-w-80 text-[8px] text-justify">
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
    <div className="pt-20">

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
