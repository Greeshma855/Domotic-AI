// // import React from "react";
// // import bgImage from "../assets/images/bg2.jpg"; // Import the background image

// // const ParallaxSection = () => {
// //   return (
// //     <div className="w-full">
// //       {/* Parallax Section */}
// //       <section
// //         className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
// //         style={{
// //           backgroundImage: `url(${bgImage})`,
// //           backgroundPosition: "center center", // Ensures the image stays centered
// //           backgroundAttachment: "fixed", // Parallax effect
// //         }}
// //       >
// //         {/* Content inside the "window" */}
// //         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ">
// //             Ready to build a smarter home?
// //           </h2>
// //           <p className="text-base sm:text-lg md:text-xl mb-6 ">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
// //           </p>
// //           <a
// //             href="#"
// //             className="inline-block px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 "
// //           >
// //             Get Started
// //           </a>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ParallaxSection;






















// import React from "react";
// import { ArrowRight } from 'lucide-react';
// import bgImage from "../assets/images/bg2.jpg";

// const ParallaxSection = () => {
//   return (
//     <div className="w-full">
//       <section
//         className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundPosition: "center center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         {/* Overlay to improve text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        
//         {/* Content inside the "window" */}
//         <div className="relative z-10 absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
//               Transform Your Home, Elevate Your Life
//             </h2>
//             <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
//               Discover the future of living with our cutting-edge smart home solutions. Seamless technology, ultimate comfort, and intelligent design at your fingertips.
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               <span>Get Started</span>
//               <ArrowRight size={24} />
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ParallaxSection;




import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Cpu } from 'lucide-react';

const ParallaxSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
    <div className="w-full bg-gray-900">
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
        </div>

        {/* Animated Background Circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.3, 0.2] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.7, 1]
          }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.3, 0.2] }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
            times: [0, 0.7, 1]
          }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Content Container */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Transform Your Home, Elevate Your Life
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
            >
              Discover the future of living with our cutting-edge smart home solutions. Seamless technology, ultimate comfort, and intelligent design at your fingertips.
            </motion.p>

            {/* Feature Icons */}
            <motion.div 
              variants={containerVariants}
              className="flex justify-center space-x-8 mb-12"
            >
              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center text-blue-400"
              >
                <Shield size={48} strokeWidth={1.5} />
                <span className="mt-2 text-sm text-gray-300">Secure</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center text-green-400"
              >
                <Zap size={48} strokeWidth={1.5} />
                <span className="mt-2 text-sm text-gray-300">Efficient</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center text-purple-400"
              >
                <Cpu size={48} strokeWidth={1.5} />
                <span className="mt-2 text-sm text-gray-300">Intelligent</span>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="/register"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Subtle Animated Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 0.3 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
      </section>
    </div>
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 0.3 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut"
      }}
      className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
    />
    </>
  );
};

export default ParallaxSection;