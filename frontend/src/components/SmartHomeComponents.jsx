import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  ThermometerSun,
  Wind,
  Lightbulb,
  Wifi,
  Fan,
} from "lucide-react";

// Card component with animation
export const Card = ({ children, className = "", onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-white/80 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 ${className}`}
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// CardContent component
export const CardContent = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`p-4 ${className}`}
  >
    {children}
  </motion.div>
);

// Device icon component
export const DeviceIcon = ({ type, className }) => {
  const icons = {
    Humidity: Droplets,
    Temperature: ThermometerSun,
    "Air Conditioner": Wind,
    Lights: Lightbulb,
    "Wi-fi": Wifi,
    Fan: Fan,
  };

  const IconComponent = icons[type];
  return IconComponent ? (
    <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
      <IconComponent className={className} />
    </motion.div>
  ) : null;
};