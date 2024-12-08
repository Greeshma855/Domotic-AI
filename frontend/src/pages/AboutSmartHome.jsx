import React from "react";
import {
  Lightbulb,
  Monitor,
  Theater,
  // DoorBell,
  Thermometer,
  Lock,
} from "lucide-react";
import bg1 from "../assets/images/bg1.png";
import { motion } from "framer-motion";

const AboutSmartHome = () => {
  const services = [
    {
      name: "Smart Lighting Setup",
      icon: Lightbulb,
    },
    {
      name: "Media Room Setup",
      icon: Monitor,
    },
    {
      name: "Home Theater Setup",
      icon: Theater,
    },
    // {
    //   name: "Smart Doorbell Installation",
    //   icon: DoorBell
    // },
    {
      name: "Smart Thermostat Installation",
      icon: Thermometer,
    },
    {
      name: "Smart Door Lock Installation",
      icon: Lock,
    },
  ];

  return (
    <>
    <section
      id="about"
      className="py-16 bg-gray-900 w-full min-h-screen flex items-center"
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
                <service.icon className="text-indigo-500 mr-4" size={28} />
                <span className="text-gray-700 text-lg">{service.name}</span>
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

export default AboutSmartHome;
