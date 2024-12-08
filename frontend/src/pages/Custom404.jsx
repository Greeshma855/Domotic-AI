// import React from 'react';
// import { motion } from 'framer-motion';
// import { HomeIcon, WifiOff, RefreshCcw } from 'lucide-react';

// const Custom404 = () => {
//   return (
//     <div className="min-h-screen bg-[#faf4f2] flex items-center justify-center p-4">
//       <div className="text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8"
//         >
//           <WifiOff className="w-24 h-24 mx-auto text-[#8B4513] mb-4" />
//           <motion.h1 
//             className="text-6xl font-bold text-gray-800 mb-2"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             404
//           </motion.h1>
//           <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">
//             Connection Lost
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Looks like our home automation system can't find this page.
//           </p>
//         </motion.div>

//         <motion.div
//           className="space-x-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <motion.a
//             href="/"
//             className="inline-flex items-center px-6 py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#704010] transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <HomeIcon className="w-5 h-5 mr-2" />
//             Return Home
//           </motion.a>
          
//           <motion.button
//             onClick={() => window.location.reload()}
//             className="inline-flex items-center px-6 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-lg hover:bg-[#8B4513] hover:text-white transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <RefreshCcw className="w-5 h-5 mr-2" />
//             Try Again
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Custom404;






// import React from 'react';
// import { motion } from 'framer-motion';
// import { HomeIcon, WifiOff, RefreshCcw } from 'lucide-react';

// const Custom404 = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4">
//       <div className="text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8"
//         >
//           <WifiOff className="w-24 h-24 mx-auto text-[#1d4b3e] mb-4" />
//           <motion.h1 
//             className="text-6xl font-bold text-gray-800 mb-2"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             404
//           </motion.h1>
//           <h2 className="text-2xl font-semibold text-[#1d4b3e] mb-4">
//             Connection Lost
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Looks like our home automation system can't find this page.
//           </p>
//         </motion.div>

//         <motion.div
//           className="space-x-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <motion.a
//             href="/"
//             className="inline-flex items-center px-6 py-3 bg-[#1d4b3e] text-white rounded-lg hover:bg-[#fbf7f0] hover:text-[#1d4b3e] transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <HomeIcon className="w-5 h-5 mr-2" />
//             Return Home
//           </motion.a>
          
//           <motion.button
//             onClick={() => window.location.reload()}
//             className="inline-flex items-center px-6 py-3 border-2 border-[#1d4b3e] text-[#1d4b3e] rounded-lg hover:bg-[#1d4b3e] hover:text-white transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <RefreshCcw className="w-5 h-5 mr-2" />
//             Try Again
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Custom404;


import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12 flex flex-col items-center text-center">
          <AlertTriangle className="text-yellow-300 mb-6" size={80} strokeWidth={1.5} />
          
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          
          <p className="text-indigo-100 mb-8 max-w-md">
            Oops! The page you're looking for seems to have wandered off into the smart home wilderness.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 bg-white text-indigo-700 px-6 py-3 rounded-lg hover:bg-indigo-50 transition duration-300"
            >
              <Home size={20} />
              <span>Go to Home</span>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/20 transition duration-300"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;