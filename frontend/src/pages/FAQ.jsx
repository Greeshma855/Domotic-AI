import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How much does it cost?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex." },
    { question: "How fast are your services?", answer: "Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet." },
    { question: "What types of customers have you worked with?", answer: "Phasellus sed efficitur dolor, et ultricies sapien." },
    { question: "What education and/or training do you have that relates to your work?", answer: "Quisque fringilla sit amet dolor commodo efficitur." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12">
    <div className="py-12 bg-gray-100">
      {/* Full-width container */}
      <div className="w-full px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Facts & Questions</h2>
        <p className="text-center text-gray-500 mb-10">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Question Box */}
              <div
                className="bg-gray-200 rounded-full px-8 py-6 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-500">{activeIndex === index ? "−" : "+"}</span>
              </div>

              {/* Answer Box */}
              {activeIndex === index && (
                <div className="bg-blue-50 rounded-full px-12 py-5 mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
