import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="px-10 py-10 bg-lime-300 md:px-28">
        <div className="grid justify-between grid-cols-1 gap-5 md:grid-cols-4">
          <div>
            <p>
              <a href="./index.html">logo</a>
            </p>
            <p className="flex flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptate culpa labore nobis placeat nulla autem
              perferendis incidunt! Quae distinctio delectus deleniti ratione
              nesciunt atque odit reprehenderit deserunt quidem labore?
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p>Contact US</p>
            <span className="leading-loose">
              1010 Berkler avenue, Brooklyn, New York City, NY 10018 US Tel.: +1
              998 150 3020 Fax.: +1 998 150 3020 info@stylemixthemes.com
            </span>
          </div>
          <div>
            <p>Stay In Touch</p>
            <form>
              <input
                className="p-2 my-8 mr-0 text-gray-800 bg-white border-t border-b border-l border-gray-200 rounded-l "
                placeholder="your@mail.com"
              />
              <button className="p-2 px-2 font-bold text-black uppercase border-t border-b border-r rounded-r-lg bg-slate-50 hover:bg-slate-100 0">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
