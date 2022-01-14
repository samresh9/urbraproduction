import React from "react";
import facebook from "../image/fb.png";
import instagram from "../image/inst.png";
import tiktok from "../image/tik.png";
import viber from "../image/vib.png";
import logo from "../image/logo.jpg";
const Footer = () => {
  return (
    <div>
      <div className=" p-5 md:px-20 md:py-10 patterns2 ">
        <div className="grid justify-between grid-cols-1 gap-5 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <div>
              <img src={logo} alt="logo" className="object-center " />
            </div>
            <p className="flex flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptate culpa labore nobis placeat nulla autem
              perferendis incidunt! Quae distinctio delectus deleniti ratione
              nesciunt atque odit reprehenderit deserunt quidem labore?
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <div className="text-lg font-medium text-center">Contact US</div>
              <div className="flex flex-row gap-5 justify-center items-center">
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="font-medium">
                  Doleshwor, Suryabinayak-9, Bhaktapur
                </div>
              </div>
              <div className="flex flex-row gap-5 justify-center items-center">
                <div className="text-red">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                    />
                  </svg>
                </div>
                <div className="text-red-800 font-medium text-2xl">
                  9855685322,998946512
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium text-center">Stay In Touch</p>
            <form className="text-center">
              <input
                className="p-2 my-8 mr-0 text-gray-800 bg-white border-t border-b border-l border-gray-200 rounded-l "
                placeholder="your@mail.com"
              />
              <button className="p-2 px-2 font-bold text-black uppercase border-t border-b border-r rounded-r-lg bg-slate-50 hover:bg-slate-100 0">
                Send
              </button>
            </form>
          </div>
          <div className="text-lg font-medium text-center">
            Get Connected With Us
            <div className="flex flex-row justify-center pt-6">
              <div>
                <a
                  href="https://www.facebook.com/%E0%A4%89%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A4%BE-%E0%A4%B0%E0%A4%BF%E0%A4%B8%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F-106985565010672"
                  target="_blank"
                >
                  <img
                    src={facebook}
                    alt="#"
                    className="hover:drop-shadow-lg hover:brightness-125 "
                  />
                </a>
              </div>
              <div>
                <img
                  src={instagram}
                  alt="#"
                  className="hover:drop-shadow-lg hover:brightness-125 "
                ></img>
              </div>

              <div>
                <img
                  src={tiktok}
                  alt="#"
                  className="hover:drop-shadow-lg hover:brightness-125 "
                ></img>
              </div>
              <div>
                <img
                  src={viber}
                  alt="#"
                  className="hover:drop-shadow-lg hover:brightness-125 "
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
