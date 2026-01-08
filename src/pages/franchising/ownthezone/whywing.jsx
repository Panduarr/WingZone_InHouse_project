import React, { useState } from "react";

function Whywing() {
  return (
    <div className="bg-pink-50 px-20 py-5">
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
    <div className="flex flex-row-reverse gap-20">
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

        <div className="absolute top-60 bg-orange-500 w-full p-5 flex flex-col gap-2 justify-center">
          <h4 className="text-md text-center text-white font-bold">
            10 Steps To{" "}
          </h4>
          <h2 className="text-2xl text-center text-white font-bold">
            OWN THE ZONE
          </h2>
          <div className="px-12">
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
    <div>
      <div className="flex flex-row gap-8 border-2 border-orange-600 py-2 px-3 max-w-3/4">
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
    </div>
  );
};
