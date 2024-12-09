// import React, { useState } from 'react';
// import { Mail, User, MessageCircle, Send } from 'lucide-react';
// import {motion} from "framer-motion"

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (validateForm()) {
//       try {
//         // Simulated form submission
//         await new Promise(resolve => setTimeout(resolve, 1500));
//         // Reset form and show success
//         setFormData({ name: '', email: '', message: '' });
//         alert('Message sent successfully!');
//       } catch (error) {
//         alert('Submission failed. Please try again.');
//       }
//     }
    
//     setIsSubmitting(false);
//   };

//   return (
//     <>
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 bg-white shadow-3xl rounded-2xl overflow-hidden">
//         {/* Contact Information Side */}
//         <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-12 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
//           <p className="text-lg mb-8 text-gray-300">
//             Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
//           </p>
          
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <Mail className="mr-4 text-gray-400" size={24} />
//               <span>support@example.com</span>
//             </div>
//             <div className="flex items-center">
//               <MessageCircle className="mr-4 text-gray-400" size={24} />
//               <span>24/7 Customer Support</span>
//             </div>
//           </div>
//         </div>

//         {/* Form Side */}
//         <div className="p-12">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-gray-700 mb-2 flex items-center">
//                 <User className="mr-2 text-gray-700" size={20} />
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gray-800 transition 
//                   ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-gray-700 mb-2 flex items-center">
//                 <Mail className="mr-2 text-gray-700" size={20} />
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your@email.com"
//                 className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gray-800 transition
//                   ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-gray-700 mb-2 flex items-center">
//                 <MessageCircle className="mr-2 text-gray-700" size={20} />
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 placeholder="Your Message"
//                 className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gray-800 transition
//                   ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//               ></textarea>
//               {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 
//                 transition duration-300 flex items-center justify-center space-x-2 
//                 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? (
//                 <div className="animate-spin">🔄</div>
//               ) : (
//                 <>
//                   <Send size={20} />
//                   <span>Send Message</span>
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     <motion.div
//       initial={{ width: 0, opacity: 0 }}
//       animate={{ width: '100%', opacity: 0.3 }}
//       transition={{
//         duration: 1.5,
//         delay: 0.5,
//         ease: "easeInOut"
//       }}
//       className="h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent"
//     />
//     </>
//   );
// };

// export default ContactUs;


































import React, { useState } from 'react';
import { Mail, User, MessageCircle, Send } from 'lucide-react';
import {motion} from "framer-motion"

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
    <>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
        {/* Contact Information Side */}
        <div className="bg-gradient-to-br from-blue-900 to-gray-900 text-white p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Contact Us</h2>
          <p className="text-lg mb-8 text-gray-300">
            Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-500" size={24} />
              <span className="text-gray-200">support@example.com</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-4 text-blue-500" size={24} />
              <span className="text-gray-200">24/7 Customer Support</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-black mb-2 flex items-center">
                <User className="mr-2 text-blue-500" size={20} />
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 bg-white text-gray-200 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition 
                  ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-black mb-2 flex items-center">
                <Mail className="mr-2 text-blue-500" size={20} />
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 bg-white text-gray-200 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition
                  ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-black text-bold mb-2 flex items-center">
                <MessageCircle className="mr-2 text-blue-500" size={20} />
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className={`w-full px-4 py-3 bg-white text-gray-200 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition
                  ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 
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

export default ContactUs;