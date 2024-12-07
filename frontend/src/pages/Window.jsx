// import React from "react";
// import bgImage from "../assets/images/bg2.jpg"; // Import the background image

// const ParallaxSection = () => {
//   return (
//     <div className="w-full">
//       {/* Parallax Section */}
//       <section
//         className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundPosition: "center center", // Ensures the image stays centered
//           backgroundAttachment: "fixed", // Parallax effect
//         }}
//       >
//         {/* Content inside the "window" */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ">
//             Ready to build a smarter home?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl mb-6 ">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//           </p>
//           <a
//             href="#"
//             className="inline-block px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 "
//           >
//             Get Started
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ParallaxSection;






















import React from "react";
import { ArrowRight } from 'lucide-react';
import bgImage from "../assets/images/bg2.jpg";

const ParallaxSection = () => {
  return (
    <div className="w-full">
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        
        {/* Content inside the "window" */}
        <div className="relative z-10 absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Transform Your Home, Elevate Your Life
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Discover the future of living with our cutting-edge smart home solutions. Seamless technology, ultimate comfort, and intelligent design at your fingertips.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;