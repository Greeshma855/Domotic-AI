import React from "react";
import tabletImage from "../assets/images/tablet.png";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-16 "
    >
      {/* Form Section */}
      <div className="w-full md:w-1/2 mt-[60px]">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center md:text-left">
          We are here to help
        </h2>

        <div className="bg-gray-100 p-6 rounded-3xl shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                id="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="email"
                id="email"
                placeholder="Enter a valid email address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 rounded-full transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={tabletImage}
          alt="Tablet with smart home"
          className="rounded-lg w-4/5 md:w-3/4 h-auto"
        />
      </div>
    </section>
  );
};

export default ContactUs;
