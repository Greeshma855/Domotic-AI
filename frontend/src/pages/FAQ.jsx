import React, { useState } from "react";
import { ChevronDown, HelpCircle } from 'lucide-react';
import {motion} from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: "How much does it cost?", 
      answer: "Our pricing is tailored to your specific needs. We offer flexible packages starting from basic to comprehensive smart home solutions.",
      icon: HelpCircle
    },
    { 
      question: "How fast are your services?", 
      answer: "We pride ourselves on quick installation and setup. Most of our services can be implemented within 1-2 days, depending on the complexity of your home.",
      icon: HelpCircle
    },
    { 
      question: "What types of customers have you worked with?", 
      answer: "We serve a diverse range of clients from residential homeowners to small businesses, providing customized smart home and security solutions.",
      icon: HelpCircle
    },
    { 
      question: "What education and training do you have?", 
      answer: "Our team consists of certified professionals with extensive training in smart home technologies, security systems, and home automation.",
      icon: HelpCircle
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Got questions? We've got answers. Here are some common inquiries about our smart home solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-700 transition"
              >
                <div className="flex items-center space-x-4">
                  <faq.icon className="text-blue-500" size={24} />
                  <span className="text-lg font-medium text-gray-200">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={24} 
                />
              </div>
              
              {activeIndex === index && (
                <div className="bg-gray-700 p-6 border-t border-gray-600">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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

export default FAQ;