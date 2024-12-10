import React from "react";
import { motion } from "framer-motion";
import { Code, Target, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const SmartHome = () => {
  const navigate = useNavigate();
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
    <div className="bg-gray-900 min-h-screen relative overflow-hidden">
     <Navbar />
      {/* Background Grid */}
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

      {/* Hero Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6 text-center w-full"
        >
          DOMOTICAI
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 text-center w-full"
        >
          Transforming Your Living Space with Intelligent Automation
        </motion.p>

        {/* Feature Icons */}
        <motion.div 
          variants={containerVariants}
          className="flex justify-center space-x-8 mt-8"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-blue-400"
          >
            <Code size={48} strokeWidth={1.5} />
            <span className="mt-2 text-sm text-gray-300">Smart Integrations</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-green-400"
          >
            <Target size={48} strokeWidth={1.5} />
            <span className="mt-2 text-sm text-gray-300">Precision Control</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-purple-400"
          >
            <Zap size={48} strokeWidth={1.5} />
            <span className="mt-2 text-sm text-gray-300">Energy Efficiency</span>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          onClick={() => {navigate("/register")}}
        >
          Explore
        </motion.button>
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
    </div>
  );
};

export default SmartHome;