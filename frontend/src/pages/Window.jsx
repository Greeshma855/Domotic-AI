import React from "react";
import bgImage from "../assets/images/bg2.jpg"; // Import the background image

const ParallaxSection = () => {
  return (
    <div className="w-full">
      {/* Parallax Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center center", // Ensures the image stays centered
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        {/* Content inside the "window" */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ">
            Ready to build a smarter home?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 "
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
