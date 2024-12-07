// import React from "react";
// import tabletImage from "../assets/images/tablet.png";

// const ContactUs = () => {
//   return (
//     <section
//       id="contact"
//       className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-16 min-h-screen"
//     >
//       {/* Form Section */}
//       <div className="w-full md:w-1/2 mt-[60px]">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center md:text-left">
//           We are here to help
//         </h2>

//         <div className="bg-gray-100 p-6 rounded-3xl shadow-md">
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 type="text"
//                 id="name"
//                 placeholder="Enter your Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 type="email"
//                 id="email"
//                 placeholder="Enter a valid email address"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 className="w-full px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 id="message"
//                 rows="4"
//                 placeholder="Enter your message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 rounded-full transition"
//             >
//               SEND
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img
//           src={tabletImage}
//           alt="Tablet with smart home"
//           className="rounded-lg w-4/5 md:w-3/4 h-auto"
//         />
//       </div>
//     </section>
//   );
// };

// export default ContactUs;















import React, { useState } from 'react';
import { Mail, User, MessageCircle, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simulated form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Reset form and show success
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } catch (error) {
        alert('Submission failed. Please try again.');
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Contact Information Side */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8 text-indigo-100">
            Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-4 text-indigo-200" size={24} />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-4 text-indigo-200" size={24} />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 flex items-center">
                <User className="mr-2 text-indigo-500" size={20} />
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-indigo-500 transition 
                  ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 flex items-center">
                <Mail className="mr-2 text-indigo-500" size={20} />
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-indigo-500 transition
                  ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 flex items-center">
                <MessageCircle className="mr-2 text-indigo-500" size={20} />
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-indigo-500 transition
                  ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 
                transition duration-300 flex items-center justify-center space-x-2 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="animate-spin">🔄</div>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;