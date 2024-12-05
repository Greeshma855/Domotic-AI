import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/images/bg.png";

const SmartHome = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative">
        <img
          src={bg}
          alt="Smart Home"
          className="w-full h-auto sm:h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to DOMOTICAI</h1>
          <p className="mt-4 text-lg">
            Making your home smarter and your life easier.
          </p>
        </div>
      </section>

    </div>
  );
};

export default SmartHome;
