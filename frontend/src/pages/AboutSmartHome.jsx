import React from "react";
import bg1 from "../assets/images/bg1.png";

const AboutSmartHome = () => {
  return (
    <section id="about" className="py-12 bg-gray-100 w-full ">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left mt-[60px]">About Smart Home</h2>
          <ul className="space-y-4">
            {[
              "Smart Lighting Setup",
              "Media Room Setup",
              "Home Theater Setup",
              "Smart Doorbell Installation",
              "Smart Thermostat Installation",
              "Smart Door Lock Installation",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-teal-500 text-xl mr-4">✔</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 px-6 py-3 text-teal-600 border-2 border-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            GET INSPIRED
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-white mt-[60px]">
            <img
              src={bg1} // Replace with your actual image URL
              alt="Smart Home Device"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSmartHome;
