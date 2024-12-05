import React from "react";
import outdoorCCTV from "../assets/images/outdoor-cctv.png";
import temperatureController from "../assets/images/temperature-controller.png";
import tracking from "../assets/images/tracking.png";
import autoControl from "../assets/images/auto-control.png";
import motionSensor from "../assets/images/motion-sensor.png";
import heatingPlan from "../assets/images/heating-plan.png";

const Features = () => {
  return (
    <section id="features" className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-black mt-[60px]">
          Manage Everything
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="feature bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={outdoorCCTV}
                alt="Outdoor CCTV"
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Outdoor CCTV</h3>
                  <p className="mt-2">Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={temperatureController}
                alt="Temperature Controller"
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Temperature Controller</h3>
                  <p className="mt-2">Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={tracking}
                alt="Tracking"
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Tracking</h3>
                  <p className="mt-2">Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={autoControl}
                alt="Auto Control"
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Auto Control</h3>
                  <p className="mt-2">Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={motionSensor}
                alt="Motion Sensor"
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Motion Sensor</h3>
                  <p className="mt-2">Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={heatingPlan}
                alt="Heating Plan"
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Heating Plan</h3>
                  <p className="mt-2">Ut enim ad minim veniam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;