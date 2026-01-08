import React from "react";

function About() {
  return (
    <div className="bg-pink-50">
      <AboutUs />
      <ANew />
      <Fillform />
    </div>
  );
}

export default About;

export const AboutUs = () => {
  return (
    <div className="flex flex-col justify-self-center gap-5">
      <h1 className="text-4xl font-bold">ABOUT US</h1>
      <h3 className="text-xl font-semibold max-w-4xl">
        Chicken Wings Franchise with a Flavorholic Story
      </h3>
      <p className="text-sm  text-justify font-sans max-w-6xl">
        Necessity is the mother of invention. Founders Matt Freidman and Adam
        Scott grew up in upstate New York so when they ventured off to college
        in Florida they missed a few things from home. As students at the
        University of Florida, one thing they craved on game day was the crispy,
        flavorful wings from home. They decided that if they couldn't find them,
        they would create them. "If there are no decent wings in Gainesville,
        we'll just have to make our own." so each evening, Matt and Adam
        commandeered their fraternity house kitchen to serve as a chicken wing
        laboratory. Into the night, they developed flavor ideas and served the
        hot wings to a house full of willing taste testers. Little did they know
        that their "research assignment" would one day become an international
        franchise operation. One by one they perfected recipes that years later
        would become Wing Zone's trademark flavors.
      </p>
      <p className="text-sm text-justify font-sans max-w-6xl">
        Thirty years later, their initial concept has exploded into a wing
        empire that has amassed an impressive following throughout the country
        and now the world. Our customers continually come back to us because of
        our 18 award-winning flavors and impressive guest-focused customer
        service. We were named a 2019 Fast Casual Top 100 Mover & Shaker and as
        we continue to expand, we are looking for driven entrepreneurs to help
        us bring our concept into new communities across the globe.
      </p>
      <div className="relative">
        <div className="flex flex-row gap-8 border-2 border-orange-600 py-5 px-3 max-w-4xl">
          <p className="text-md text-center font-medium py-3">
            Ready To Get Into
          </p>
          <h3 className="text-4xl text-center font-extrabold">
            The Flavor Game?
          </h3>
          <div className="border-2 border-cyan-500 py-1 px-3">
            <h3 className="text-2xl text-cyan-500 text-center ">
              Contact Us to Get Started
            </h3>
          </div>
        </div>
        <div>
          <img
            className="absolute top-0 left-240 w-60 h-auto object-cover rounded-2xl z-1"
            src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
            alt="fake_image"
          />
        </div>
      </div>
    </div>
  );
};

export const ANew = () => {
  return (
    <>
      {/* A New Era */}

      <div className="flex flex-row justify-around gap-4 mt-20 mx-15">
        <div>
          <img
            className=" w-full h-auto"
            src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
            alt="fakeimage"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">A NEW ERA</h3>
          <p className="text-justify max-w-xl">
            In 2021 Capriotti's Sandwich Shop, Inc's leadership acquired Wing
            Zone. Jason Smylie, President and Ashley Morris, CEO, were well
            acquainted with Wing Zone and had formed a friendship with Matt and
            Adam over the years. The vision of the acquisition was to take Wing
            Zone to a national level and create efficient operations with
            multi-unit franchising opportunities. By applying the proven systems
            and processes from Capriotti's, as well as leveraging national
            vendor relationships, Wing Zone has quickly become a national brand.
          </p>
          <p className="text-justify max-w-xl">
            Creating efficiencies in operation has been at the forefront of the
            growth opportunities for the Wing Zone brand. Refining the menu,
            updating the image and investing in the latest and greatest
            technology, Wing Zone 2.0 was successfully launched in July 2022.
          </p>
          <p className="text-justify max-w-xl">
            From our revolutionary cooking process to our new focused menu and
            fresh shop design, the Wing Zone 2.0 gives customers an experience
            they can't find anywhere else!
          </p>
        </div>
      </div>

      {/* A Favorite */}

      <div className="flex flex-row justify-around gap-4 mt-20 mx-15">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">
            A FAVORITE AMONG FAMILY & FRIENDS
          </h3>
          <p className="text-justify max-w-xl">
            Today, Wing Zone is more than a franchise brand. It holds a special
            place in the hearts of wing lovers and flavor fanatics who we like
            to call Flavorholics™. In our early days, our guests loved the
            flavors so much that they began asking that our other menu favorites
            be flavored like their wings what Wing Zone now calls Flavor Fuze™.
            We are a family favorite as well as a go-to spot for friends. Our
            menu consists of something for just about everyone, our environment
            is warm and friendly, and we proudly own the lunch, dinner, and late
            night crowds in the QSR franchise environment.
          </p>
          <p className="text-justify max-w-xl">
            Having grown to over 80 restaurants in 5 countries, we have not kept
            still. We continue to develop new formats and flavors to give their
            Flavorholics the best wing experience on the planet. We hope you're
            ready to join us.
          </p>
        </div>
        <div>
          <img
            className=" w-full h-auto"
            src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
            alt="fakeimage"
          />
        </div>
      </div>
      {/* Hall Frame */}

      <div className="flex flex-row justify-around gap-4 mt-20 mx-15">
        <div>
          <img
            className=" w-full h-auto"
            src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
            alt="fakeimage"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">HALL OF FAMERS</h3>
          <p className="text-justify max-w-xl">
            Wing Zone's flavors have been recognized as the Festival Favorite at
            the National Buffalo Wing Festival, where Buffalo Bliss was the
            official flavor for the wing-eating competition. Wing Zone has also
            received awards for Hot Shot, Thai Chili, and Garlic Parm.
          </p>
        </div>
      </div>
    </>
  );
};

export const Fillform = () => {
  return (
    <div className="relative">
      <div className="my-10 mx-15">
        <img
          className="w-3/4 h-auto object-cover"
          src="https://olo-images-live.imgix.net/63/63f97d76f174463c8db12d707135ccdf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=fc2c77505cd9e8c931bb18d370f852d9"
          alt="fakeimage"
        />
      </div>
      <div className="flex flex-col gap-2 absolute left-200 top-8 bg-cyan-400 px-15 py-5">
        <h4 className="text-md font-normal">Fill out the form below to begin:</h4>
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
            <p className="text-sm font-serif">₹ 1.7 Crore Liquid Capital Required</p>
            <div className="text-center my-3"><button className="border-2 px-4 py-2 text-sm font-bold">Get Started</button></div>
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
