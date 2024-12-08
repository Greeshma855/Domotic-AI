import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("Humidity");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: deviceName,
      type: deviceType,
      status: "off",
      lastActive: "Just added",
    });
    setDeviceName("");
    setDeviceType("Humidity");
    onClose();
  };

  if (!isOpen) return null;

  const deviceTypes = [
    "Humidity",
    "Temperature",
    "Air Conditioner",
    "Lights",
    "Wi-fi",
    "Fan",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-lg p-6 w-96 border border-white/20 shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Add New Device
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Device Name
            </label>
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Device Type
            </label>
            <select
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
            >
              {deviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/20"
          >
            Add Device
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
