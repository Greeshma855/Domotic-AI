// import React from "react";
// import bg1 from "../assets/images/bg1.png";

// const AboutSmartHome = () => {
//   return (
//     <section id="about" className="py-12 bg-gray-100 w-full min-h-screen ">
//       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8">
//         {/* Text Section */}
//         <div className="flex-1">
//           <h2 className="text-4xl font-bold mb-6 text-center md:text-left mt-[60px]">About Smart Home</h2>
//           <ul className="space-y-4">
//             {[
//               "Smart Lighting Setup",
//               "Media Room Setup",
//               "Home Theater Setup",
//               "Smart Doorbell Installation",
//               "Smart Thermostat Installation",
//               "Smart Door Lock Installation",
//             ].map((item, index) => (
//               <li key={index} className="flex items-center">
//                 <span className="text-teal-500 text-xl mr-4">✔</span>
//                 <span className="text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//           <button
//             className="mt-6 px-6 py-3 text-teal-600 border-2 border-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           >
//             GET INSPIRED
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1">
//           <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-white mt-[60px]">
//             <img
//               src={bg1} // Replace with your actual image URL
//               alt="Smart Home Device"
//               className="object-cover w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSmartHome;















import React from "react";
import { 
  Lightbulb, 
  Monitor, 
  Theater, 
  // DoorBell, 
  Thermometer, 
  Lock 
} from 'lucide-react';
import bg1 from "../assets/images/bg1.png";

const AboutSmartHome = () => {
  const services = [
    { 
      name: "Smart Lighting Setup", 
      icon: Lightbulb 
    },
    { 
      name: "Media Room Setup", 
      icon: Monitor 
    },
    { 
      name: "Home Theater Setup", 
      icon: Theater 
    },
    // { 
    //   name: "Smart Doorbell Installation", 
    //   icon: DoorBell 
    // },
    { 
      name: "Smart Thermostat Installation", 
      icon: Thermometer 
    },
    { 
      name: "Smart Door Lock Installation", 
      icon: Lock 
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100 w-full min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center md:text-left">
            About Smart Home
          </h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <service.icon 
                  className="text-indigo-500 mr-4" 
                  size={28} 
                />
                <span className="text-gray-700 text-lg">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center md:text-left mt-8">
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Inspired
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={bg1}
              alt="Smart Home Device"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSmartHome;