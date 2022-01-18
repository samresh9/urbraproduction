import React, { useEffect } from "react";
import coffe from "../image/coffee-min.png";
import cafe from "../image/cafe.png";
import tunnel from "../image/tunnel.jpg";
import animal from "../image/animal.jpg";
const HomePage = () => {
  return (
    <div>
      {/* <!--welcome--> */}
      <div className="flex flex-col w-full h-screen bg-fixed bg-center bg-cover home"></div>
      <div className="w-full px-10 py-20 h-90 md:px-24">
        <div className="flex flex-col items-center justify-between gap-20 overflow-hidden md:flex-row ">
          <div className="w-1/3 mt-5 text-6xl font-medium text-orange-400 font-luxury">
            Welcome <p className="text-black font-next">to our hotel</p>
          </div>
          <div>
            The gardens surrounding the property are wonderful opportunities to
            learn about local Nepali vegetation as well as different organic
            farming techniques and cultivated plants.
          </div>
          <div>
            Within easy reach of Kathmandu, but away from the bustle of the
            city, we invite you to join us in experiencing the simple life of
            Nepali countryside with Peaceful Environment.
          </div>
        </div>
      </div>

      {/* <!--GALLERY--> */}
      <div className="w-full overflow-hidden md:min-h-96 lg:h-screen ">
        <div className="p-5 font-medium tracking-wide text-center text-orange-400 opacity-75 min-h-40 bg-slate-100 text-8xl font-luxury">
          Why Choose Urbara?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-3/4 md:mb-10">
          <div className="relative w-full cont lg:h-full ">
            <img
              id="hov"
              className="object-cover h-full "
              alt="#"
              src={coffe}
            />
            <div className="absolute text-2xl font-bold transform -translate-x-1/2 top-1 text-slate-100 left-1/2">
              Coffee
            </div>
            <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 opacity-0 middle top-1/2 left-1/2">
              <div className="bg-red-200">
                Made with beans produced in our garden
              </div>
            </div>
          </div>
          <div className="relative w-full md:h-full ">
            <p className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-slate-50">
              FOOD
            </p>
            <img
              id="hov"
              className="object-cover h-full "
              alt="#"
              src={tunnel}
            />
          </div>
          <div className="w-full md:h-full">
            <img
              id="hov"
              className="object-cover object-bottom h-full "
              alt="#"
              src={cafe}
            />
          </div>
          <div className="w-full md:h-full">
            <img
              className="object-cover object-center h-full"
              alt="#"
              src={animal}
            />
          </div>
        </div>
      </div>
      <div className="px-10 md:py-10 min-h-96 lg:px-28 ">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div>
            <div className="flex flex-row items-center gap-5">
              <div className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <p>
                  {" "}
                  <h1 className="text-3xl"> Peaceful Environment</h1>Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Dicta fugit
                  adipisicing elit. Dicta fugit voluptate{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center gap-5">
              <div className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <p>
                  {" "}
                  <h1 className="text-3xl"> Peaceful Environment</h1>Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Dicta fugit
                  adipisicing elit. Dicta fugit voluptate{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-2 lg:row-span-2">
            <div className="flex flex-col items-center w-full mx-auto"></div>{" "}
          </div>
          <div>
            <div className="flex flex-row items-center gap-5">
              <div className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <p>
                  {" "}
                  <h1 className="text-3xl"> Peaceful Environment</h1>Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Dicta fugit
                  adipisicing elit. Dicta fugit voluptate{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center gap-5">
              <div className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <p>
                  {" "}
                  <h1 className="text-3xl"> Peaceful Environment</h1>Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Dicta fugit
                  adipisicing elit. Dicta fugit voluptate{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-10 mt-10 patterns md:px-28 min-h-96">
        <p className="p-10 font-medium text-center text-orange-400 text-7xl font-next">
          Customer Reviews
        </p>
        <div className="grid grid-cols-1 gap-5 py-5 lg:grid-cols-3">
          <div className="flex flex-col">
            <div className="p-10 overflow-hidden bg-white drop-shadow-md h-80">
              <p>*****</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus
                odio obcaecati velit possimus ea soluta ullam? Incidunt
                perferendis quia, tenetur, repellat, adipisci aliquam numquam
                deleniti in provident rerum cum!
              </p>
              <p className="text-right ">"</p>
            </div>
            <div className="flex flex-row gap-5 pt-10 ">
              <div>
                {" "}
                <img
                  alt="#"
                  src="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  className="object-cover object-top w-20 h-20 border-4 rounded-full "
                />
              </div>
              <div className="self-center">
                {" "}
                <p>Sagun Shady</p> <p>Visitor</p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex flex-col">
              <div className="p-10 overflow-hidden bg-white drop-shadow-md h-80">
                <p>*****</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  minus odio obcaecati velit possimus ea soluta ullam? Incidunt
                  perferendis quia, tenetur, repellat, adipisci aliquam numquam
                  deleniti in provident rerum cum!
                </p>
                <p className="text-right ">"</p>
              </div>
              <div className="flex flex-row gap-5 pt-10 ">
                <div>
                  {" "}
                  <img
                    alt="#"
                    src="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    className="object-cover object-top w-20 h-20 border-4 rounded-full "
                  />
                </div>
                <div className="self-center">
                  {" "}
                  <p>Sagun Shady</p> <p>Visitor</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex flex-col">
              <div className="p-10 overflow-hidden bg-white drop-shadow-md h-80">
                <p>*****</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  minus odio obcaecati velit possimus ea soluta ullam? Incidunt
                  perferendis quia, tenetur, repellat, adipisci aliquam numquam
                  deleniti in provident rerum cum!
                </p>
                <p className="text-right ">"</p>
              </div>
              <div className="flex flex-row gap-5 pt-10 ">
                <div>
                  {" "}
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    className="object-cover object-top w-20 h-20 border-4 rounded-full ring-2 ring-white "
                  />
                </div>
                <div className="self-center">
                  {" "}
                  <p>Sagun Shady</p> <p>Visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
