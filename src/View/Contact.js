import React, { useState } from "react";
import phone from "../image/phone.png";

import { db } from "../utility/firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  //initialize form data
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const usersCollectionRef = collection(db, "form");

  const createUser = (e) => {
    e.preventDefault();
    if (!email && !number && !firstname && !lastname && !message) {
      alert("Please fill the data");
    } else {
      addDoc(usersCollectionRef, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
        number: number,
      });
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <div>
      {/*get in touch */}

      <div className="flex flex-col justify-between w-full gap-10 px-10 py-10 md:flex-row md:px-20 h-min-96 ">
        <div className="flex flex-col px-10 text-justify md:w-1/2">
          <div>
            <p className="mb-10 text-2xl font-bold text-center font-next">
              Message Us
            </p>
            <p>
              If you wish to be considered for employment at Weifield, please do
              not send a message, here – instead, please complete Weifield’s job
              application and our Human Resources department will contact you
              after their review of your submitted information.
            </p>
          </div>
          <div className="">
            <img alt="#" src={phone} />
          </div>
        </div>
        {/* <!--form--> */}
        <div className="md:w-1/2">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Your Name"
                  value={firstname}
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  value={lastname}
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <p className="mb-8 text-xs italic text-gray-600">
                  Please use @
                </p>
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  value={number}
                  onChange={(event) => {
                    setNumber(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none  no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="px-4 py-2 font-bold text-white rounded shadow bg-slate-400 hover:bg-slate-300 focus:shadow-outline focus:outline-none"
                  type="button"
                  onClick={createUser}
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <p>Location</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.411289605339!2d85.43130881501395!3d27.642744082818716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb11ac52b319b1%3A0x105f49fbbe64280f!2sUrbara%20Resort!5e0!3m2!1sen!2snp!4v1641652248100!5m2!1sen!2snp"
          width="75%"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
