import React, { useState } from "react";

function Whywing() {
  return (
    <div className="bg-pink-50 ">
      <About />
      <Banner />
    </div>
  );
}

export default Whywing;

const data = [
  {
    id: 1,
    btnName: "Intoduction",
    content: (
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">WHY WING ZONE</h2>
        <h3 className="text-2xl font-semibold">
          Our Chicken Wing Franchise Is the Best Choice
        </h3>
        <p className="text-sm text-justify max-w-full">
          Throughout our history, Wing Zone has grown exponentially. We first
          expanded throughout the nation and then across the globe. From day
          one, we have been delivering quality food and exceptional customer
          service. This commitment continues to sustain us as we expand into
          more territories. And as we grow, we are committed to staying true to
          who we are and what has brought us this far.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Wing Zone is also continually guided by our core values:
        </h3>
        <ul className="list-disc px-5 text-sm max-w-sm flex flex-col gap-2">
          <li>Integrity</li>
          <li>Passion</li>
          <li>Profitability</li>
          <li>Genuineness</li>
          <li>Family</li>
        </ul>
        <p className="text-sm text-justify max-w-full">
          Wing Zone saw a record-breaking year in 2022 for sales growth, store
          development and new franchise partners joining the family. With 150
          stores currently within the development pipeline, the brand is
          entering new markets every day.
        </p>
        <p className="text-sm text-justify max-w-full">
          Learn more by downloading our latest infographic.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    btnName: "Our Support",
    content: (
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">OUR SUPPORT</h2>
        <h3 className="text-2xl font-semibold">
          Training & Marketing Resources for Your Chicken Wing Franchise
        </h3>
        <p className="text-sm text-justify max-w-full">
          When entrepreneurs decide to go into business with us and join the
          Wing Zone family, we recognize that this is a major decision on their
          part. In turn, we want to do everything we can to ensure a successful
          partnership. After all, our success is dependent on the success of our
          franchise owners. That's why we provide each of our new franchise
          partners unrivaled support to help them reach exciting heights with
          our company.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Our franchise development team will assist you with:
        </h3>
        <ul className="list-disc px-5 text-sm max-w-xl flex flex-col gap-2">
          <li>Site selection</li>
          <li>
            Build-out of your new location, including ordering equipment,
            furniture, signage, and more
          </li>
          <li>Build a customized marketing plan</li>
          <li>Ongoing support after you're up and running</li>
        </ul>
        <p className="text-sm text-justify max-w-full">
          We'll also provide you with marketing, training, and business
          coaching, and we offer comprehensive training on all aspects of
          running a restaurant. All of this will help to further develop
          necessary skills and enhance relevant areas of knowledge.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Advanced Financial Management Tools
        </h3>
        <p className="text-sm text-justify max-w-full">
          Wing Zone is excited to offer a customized financial management
          platform and training modules that were specifically developed to help
          new owners manage their financial performance. Fully understanding
          your business's financial standing and capabilities will help you make
          stronger, more targeted decisions about the future. Many other brands
          only offer a broad overview of financial management. Wing Zone goes a
          few steps further to provide you with the full scope of financial
          management.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    btnName: "Food And Flavors",
    content: (
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">FOOD & FLAVORS</h2>
        <h3 className="text-2xl font-semibold">
          Our Chicken Wing Franchise Offers Something for Everyone
        </h3>
        <p className="text-sm text-justify max-w-full">
          When you join our chicken restaurant franchise, you are backed by a
          name that customers have come to associate with the best flavor
          options in the industry. In fact, Wing Zone was named a 2019 Fast
          Casual Top 100 Mover & Shaker and has been featured at the National
          Buffalo Wing Festival. Our 18 award-winning flavors offer something
          for everyone, making us a go-to destination for friends, families, and
          gatherings of every kind. That's why our QSR franchise is a top choice
          among prospective owners.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          SOME OF OUR MOST POPULAR MENU ITEMS INCLUDE:``
        </h3>
        <ul className="list-disc px-5 text-sm max-w-xl flex flex-col gap-2">
          <li>WINGS: Original, Boneless, or Breaded</li>
          <li>HAND-BREADED TENDERS: Marinated with our Zesty Breading</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    btnName: "Multi-Unit Development",
    content: (
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">OUR SUPPORT</h2>
        <h3 className="text-2xl font-semibold">
          Training & Marketing Resources for Your Chicken Wing Franchise
        </h3>
        <p className="text-sm text-justify max-w-full">
          When entrepreneurs decide to go into business with us and join the
          Wing Zone family, we recognize that this is a major decision on their
          part. In turn, we want to do everything we can to ensure a successful
          partnership. After all, our success is dependent on the success of our
          franchise owners. That's why we provide each of our new franchise
          partners unrivaled support to help them reach exciting heights with
          our company.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Our franchise development team will assist you with:
        </h3>
        <ul className="list-disc px-5 text-sm max-w-xl flex flex-col gap-2">
          <li>Site selection</li>
          <li>
            Build-out of your new location, including ordering equipment,
            furniture, signage, and more
          </li>
          <li>Build a customized marketing plan</li>
          <li>Ongoing support after you're up and running</li>
        </ul>
        <p className="text-sm text-justify max-w-full">
          We'll also provide you with marketing, training, and business
          coaching, and we offer comprehensive training on all aspects of
          running a restaurant. All of this will help to further develop
          necessary skills and enhance relevant areas of knowledge.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Advanced Financial Management Tools
        </h3>
        <p className="text-sm text-justify max-w-full">
          Wing Zone is excited to offer a customized financial management
          platform and training modules that were specifically developed to help
          new owners manage their financial performance. Fully understanding
          your business's financial standing and capabilities will help you make
          stronger, more targeted decisions about the future. Many other brands
          only offer a broad overview of financial management. Wing Zone goes a
          few steps further to provide you with the full scope of financial
          management.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    btnName: "Veterans",
    content: (
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">OUR SUPPORT</h2>
        <h3 className="text-2xl font-semibold">
          Training & Marketing Resources for Your Chicken Wing Franchise
        </h3>
        <p className="text-sm text-justify max-w-full">
          When entrepreneurs decide to go into business with us and join the
          Wing Zone family, we recognize that this is a major decision on their
          part. In turn, we want to do everything we can to ensure a successful
          partnership. After all, our success is dependent on the success of our
          franchise owners. That's why we provide each of our new franchise
          partners unrivaled support to help them reach exciting heights with
          our company.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Our franchise development team will assist you with:
        </h3>
        <ul className="list-disc px-5 text-sm max-w-xl flex flex-col gap-2">
          <li>Site selection</li>
          <li>
            Build-out of your new location, including ordering equipment,
            furniture, signage, and more
          </li>
          <li>Build a customized marketing plan</li>
          <li>Ongoing support after you're up and running</li>
        </ul>
        <p className="text-sm text-justify max-w-full">
          We'll also provide you with marketing, training, and business
          coaching, and we offer comprehensive training on all aspects of
          running a restaurant. All of this will help to further develop
          necessary skills and enhance relevant areas of knowledge.
        </p>
        <h3 className="max-w-xl text-md font-bold">
          Advanced Financial Management Tools
        </h3>
        <p className="text-sm text-justify max-w-full">
          Wing Zone is excited to offer a customized financial management
          platform and training modules that were specifically developed to help
          new owners manage their financial performance. Fully understanding
          your business's financial standing and capabilities will help you make
          stronger, more targeted decisions about the future. Many other brands
          only offer a broad overview of financial management. Wing Zone goes a
          few steps further to provide you with the full scope of financial
          management.
        </p>
      </div>
    ),
  },
];

export const About = () => {
  const [button, setButton] = useState(1);
  return (
    <div className="flex flex-row-reverse gap-20 px-20 py-5">
      <div className="flex flex-col gap-2 h-55 w-5xl border-2 border-orange-500 relative">
        <h2 className="text-center bg-cyan-500 py-2 text-white text-xl font-bold">
          KNOW MORE
        </h2>
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => setButton(item.id)}
            className="text-start px-5 text-md font-bold hover:text-orange-400 focus:text-orange-400 hover:text-center hover:ease-in-out"
          >
            → {item.btnName}
          </button>
        ))}

        <div className="absolute top-60 bg-orange-700 w-full p-5 flex flex-col gap-2 justify-center">
          <h4 className="text-md text-center text-white font-bold">
            10 Steps To
          </h4>
          <h2 className="text-2xl text-center text-white font-bold">
            OWN THE ZONE
          </h2>
          <div className="pl-20">
            <button className="text-white font-bold border-2 py-1 px-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>{data.find((item) => item.id === button)?.content}</div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="mt-10 ">
      <div className="flex flex-row gap-8 border-2 border-orange-600 py-2 px-3 max-w-3/4 mx-20 my-5">
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

      <div className="mt-10 relative">
        <img
          className="w-full h-40"
          src="https://www.wingzonefranchise.com/assets/texture-bg-mobile.webp"
          alt="image"
        />
        <div className=" flex flex-row absolute top-7 left-20 gap-10">
          <div>
            <h3 className="text-2xl text-white font-bold">25+ Years</h3>
            <p className="text-md text-white font-bold py-2">
              of Perfecting Our <br /> Award Winning Flavors
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-white font-bold">$500k**</h3>
            <p className="text-md text-white font-bold py-2">
              Average <br /> Opening Cost
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-white font-bold">85%</h3>
            <p className="text-md text-white font-bold py-2">
              of Orders are <br /> Take-Out/Delivery
            </p>
          </div>
          <div className="bg-orange-500 py-1 px-3 w-auto h-15 mt-5 ml-10">
            <h3 className="text-2xl text-white text-center font-bold px-10 py-2">
              View Investment
            </h3>
          </div>
        </div>
        <div className="absolute -top-30 left-240">
          <img className="w-full h-auto object-cover" src="public/fake_image1.png" alt="fakeimage" />
        </div>
      </div>

      <div className="flex flex-row gap-5 py-10">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-2xl font-bold max-w-xl">
            Stand Out With Our Flavor Concept
          </h2>
          <p className="text-md max-w-2xl text-justify">
            Many of our current franchise owners did their homework before
            choosing our chicken wing franchise, and we hope you will do the
            same. We're confident you'll find that we offer so much more than
            other QSR franchise options. Just a few reasons to choose Wing Zone
            include:
          </p>
          <ul className="text-sm max-w-2xl text-justify list-disc px-4">
            <li>
              <strong>Ranked Top 10 In Fast Casual:</strong> For the last two
              years, Wing Zone has been ranked among the top 100 movers and
              shakers in the fast-casual segment.
            </li>
            <li>
              <strong>Established Brand Built On Flavor: </strong>
              We've spent the last 30 years developing 18 award-winning flavors
              to reward your taste buds.
            </li>
            <li>
              <strong>Low Start-Up Costs</strong>
            </li>
            <li>
              <strong>Comprehensive Training & Support</strong>
            </li>
            <li>
              <strong>Small footprint</strong>
            </li>
            <li>
              Technology Focused Leader in Delivery, Offsite Dining and Food
              Innovation
            </li>
          </ul>
          <p className="text-md max-w-2xl text-justify">
            We offer our customers the option to choose any item on our menu and
            pair it with one of our 18 award-winning flavors. Wings, sweet and
            spicy mango fire chicken tenders... the possibilities are endless.
            The result amazing flavor that rewards your taste buds.
          </p>
        </div>
        <div className="w-3/4">
          <img
            className="w-full h-auto"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTpGMf-Cm1o5qfL-TYuRRYIBu0_P5kGuM_BEZ_WqsLjrkUrGHB"
            alt="image"
          />
          <div className="mt-5 border-2 border-red-700 px-4 py-2">
            <h2 className="text-center text-xl text-cyan-400 font-bold underline">
              Ready to get started?
            </h2>
            <p className="text-sm text-justify ">
              Visit our{" "}
              <span className="text-red-500 font-bold underline">
                Steps to Own the Zone
              </span>{" "}
              page to learn more about how you can become the proud owner of a
              Wing Zone franchise location.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="my-10 mx-15">
          <img
            className="w-3/4 h-auto object-cover absolute -left-20"
            src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
            alt="fakeimage"
          />
        </div>
        <div className="flex flex-col gap-2 absolute left-180 top-8 bg-cyan-400 px-15 py-10">
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
              <input
                className=" border-b-[1px] w-full"
                type="email"
                id="email"
              />
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
              <input
                className=" border-b-[1px] w-full"
                type="text"
                id="state"
              />
            </div>
            <div>
              <label htmlFor="Zip">*Zip Code</label>
              <br />
              <input
                className=" border-b-[1px] w-full"
                type="number"
                id="Zip"
              />
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
                information about Wing Zone via text and email. You can opt-out
                at any time. No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. All other
                categories exclude text messaging originator opt-in data and
                consent; this information will not be shared with any third
                parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
