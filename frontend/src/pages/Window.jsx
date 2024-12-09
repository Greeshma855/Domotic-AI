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