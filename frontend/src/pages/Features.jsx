// import React from "react";
// import outdoorCCTV from "../assets/images/outdoor-cctv.png";
// import temperatureController from "../assets/images/temperature-controller.png";
// import tracking from "../assets/images/tracking.png";
// import autoControl from "../assets/images/auto-control.png";
// import motionSensor from "../assets/images/motion-sensor.png";
// import heatingPlan from "../assets/images/heating-plan.png";

// const Features = () => {
//   return (
//     <section id="features" className="bg-white py-12 min-h-screen">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-8 text-black mt-[60px]">
//           Manage Everything
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <div className="feature bg-white rounded-lg shadow-md">
//             <div className="relative">
//               <img
//                 src={outdoorCCTV}
//                 alt="Outdoor CCTV"
//                 className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
//               />
//               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
//                 <div className="text-white">
//                   <h3 className="text-xl font-semibold">Outdoor CCTV</h3>
//                   <p className="mt-2">Ut enim ad minim veniam</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="feature bg-white rounded-lg shadow-md">
//             <div className="relative">
//               <img
//                 src={temperatureController}
//                 alt="Temperature Controller"
//                 className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
//               />
//               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
//                 <div className="text-white">
//                   <h3 className="text-xl font-semibold">Temperature Controller</h3>
//                   <p className="mt-2">Ut enim ad minim veniam</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="feature bg-white rounded-lg shadow-md">
//             <div className="relative">
//               <img
//                 src={tracking}
//                 alt="Tracking"
//                 className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
//               />
//               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
//                 <div className="text-white">
//                   <h3 className="text-xl font-semibold">Tracking</h3>
//                   <p className="mt-2">Ut enim ad minim veniam</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="feature bg-white rounded-lg shadow-md">
//             <div className="relative">
//               <img
//                 src={autoControl}
//                 alt="Auto Control"
//                 className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
//               />
//               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
//                 <div className="text-white">
//                   <h3 className="text-xl font-semibold">Auto Control</h3>
//                   <p className="mt-2">Ut enim ad minim veniam</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="feature bg-white rounded-lg shadow-md">
//             <div className="relative">
//               <img
//                 src={motionSensor}
//                 alt="Motion Sensor"
//                 className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
//               />
//               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
//                 <div className="text-white">
//                   <h3 className="text-xl font-semibold">Motion Sensor</h3>
//                   <p className="mt-2">Ut enim ad minim veniam</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="feature bg-white rounded-lg shadow-md">
//             <div className="relative">
//               <img
//                 src={heatingPlan}
//                 alt="Heating Plan"
//                 className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
//               />
//               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
//                 <div className="text-white">
//                   <h3 className="text-xl font-semibold">Heating Plan</h3>
//                   <p className="mt-2">Ut enim ad minim veniam</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;



















import React from "react";
import { Camera, Thermometer, Crosshair, Zap, Radio, Flame } from 'lucide-react';
import outdoorCCTV from "../assets/images/outdoor-cctv.png";
import temperatureController from "../assets/images/temperature-controller.png";
import tracking from "../assets/images/tracking.png";
import autoControl from "../assets/images/auto-control.png";
import motionSensor from "../assets/images/motion-sensor.png";
import heatingPlan from "../assets/images/heating-plan.png";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Camera,
      image: outdoorCCTV,
      title: "Outdoor CCTV",
      description: "Advanced surveillance for complete security"
    },
    {
      icon: Thermometer,
      image: temperatureController,
      title: "Temperature Control",
      description: "Precise climate management"
    },
    {
      icon: Crosshair,
      image: tracking,
      title: "Smart Tracking",
      description: "Real-time monitoring and insights"
    },
    {
      icon: Zap,
      image: autoControl,
      title: "Auto Control",
      description: "Automated system management"
    },
    {
      icon: Radio,
      image: motionSensor,
      title: "Motion Sensor",
      description: "Intelligent movement detection"
    },
    {
      icon: Flame,
      image: heatingPlan,
      title: "Heating Plan",
      description: "Efficient energy optimization"
    }
  ];

  return (
    <>
    <section id="features" className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Manage Everything
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive smart home solutions designed to simplify and enhance your living experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 flex flex-col justify-end p-6">
                  <div className="flex items-center mb-2">
                    <feature.icon className="text-white mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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

export default Features;