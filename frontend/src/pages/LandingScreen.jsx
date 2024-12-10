import React from 'react';
import { motion } from 'framer-motion';

const LandingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 2.5,
        ease: "easeInOut"
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
      </div>

      {/* Animated Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 1] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.7, 1]
        }}
        className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Logo and Text */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ 
            opacity: 0, 
            y: 50,
            letterSpacing: "-0.5em"
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            letterSpacing: "0.05em"
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1
          }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight"
        >
          DomoticAI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="mt-4 text-xl text-gray-400 max-w-xl mx-auto"
        >
          Intelligent Home Automation
        </motion.p>
      </div>

      {/* Subtle Animated Lines */}
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
    </motion.div>
  );
};

export default LandingScreen;