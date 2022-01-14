import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.jpg";

const Header = () => {
  useEffect(() => {
    //grab mobile button
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    //
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });

  return (
    <div>
      {/* <!--header--> */}

      <div className="flex flex-col h-20 ">
        <div className="z-40 w-full p-5 pb-6 shadow-md patterns2">
          <div className="flex items-center justify-center gap-10 font-medium ">
            {/* <!--logo--> */}
            <div>
              <img src={logo} alt="logo" />
            </div>
            {/* <!--menu--> */}
            <ul className="hidden gap-10 md:flex">
              <li className="hover:underline ">
                <Link to="/">HOME</Link>
              </li>
              <li>GALLERY</li>
              <li className="hover:underline">
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/map">MAP</Link>
              </li>
            </ul>
            <div className="flex md:hidden">
              <button className="mobile-menu-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* <!--mobile menu--> */}
          <div>
            <ul className="hidden leading-10 text-center md:hidden mobile-menu">
              <li>HOME</li>
              <li>GALLERY</li>
              <li className="hover:underline">
                <a href="./about.html">ABOUT</a>
              </li>
              <li>CONTACT</li>
              <li>MAP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
