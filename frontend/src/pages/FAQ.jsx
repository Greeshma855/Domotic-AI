// import React, { useState } from "react";

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     { question: "How much does it cost?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex." },
//     { question: "How fast are your services?", answer: "Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet." },
//     { question: "What types of customers have you worked with?", answer: "Phasellus sed efficitur dolor, et ultricies sapien." },
//     { question: "What education and/or training do you have that relates to your work?", answer: "Quisque fringilla sit amet dolor commodo efficitur." },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12">
//     <div className="py-12 bg-gray-100">
//       {/* Full-width container */}
//       <div className="w-full px-6">
//         <h2 className="text-3xl font-bold text-center mb-6">Facts & Questions</h2>
//         <p className="text-center text-gray-500 mb-10">
//           Sample text. Click to select the text box. Click again or double click to start editing the text.
//         </p>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index}>
//               {/* Question Box */}
//               <div
//                 className="bg-gray-200 rounded-full px-8 py-6 flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span className="text-lg font-medium text-gray-800">{faq.question}</span>
//                 <span className="text-gray-500">{activeIndex === index ? "−" : "+"}</span>
//               </div>

//               {/* Answer Box */}
//               {activeIndex === index && (
//                 <div className="bg-blue-50 rounded-full px-12 py-5 mt-2 text-gray-600">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FAQ;











import React, { useState } from "react";
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Got questions? We've got answers. Here are some common inquiries about our smart home solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition"
              >
                <div className="flex items-center space-x-4">
                  <faq.icon className="text-indigo-500" size={24} />
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={24} 
                />
              </div>
              
              {activeIndex === index && (
                <div className="bg-indigo-50 p-6 border-t">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;