// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate function

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleGetStartedClick = () => {
//     // Choose whether to navigate to signup or login
//     navigate("/register"); // or "/login" depending on your preference
//   };

//   return (
//     <nav className="top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-transparent shadow-none shadow-md z-50">
//       {/* Logo with Gradient Effect */}
//       <div
//         className="text-3xl font-bold cursor-pointer text-gradient bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent"
//         onClick={() => scrollToSection("hero")}
//       >
//         DomoticAI
//       </div>

//       {/* Hamburger Menu for Small Screens */}
//       <button
//         className="block md:hidden text-teal-600 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         ☰
//       </button>

//       {/* Navigation Links */}
//       <ul
//         className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         {[{ id: "hero", label: "Home" }, { id: "about", label: "About Us" }, { id: "features", label: "Features" }, { id: "contact", label: "Contact Us" }].map(
//           (item, index) => (
//             <li key={index} className="text-center md:text-left">
//               <button
//                 onClick={() => scrollToSection(item.id)}
//                 className={`block py-2 px-3 ${
//                   item.id === "get-started"
//                     ? "bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
//                     : "text-gray-700 hover:text-blue-600 transition-transform duration-300 relative group"
//                 } transform group-hover:scale-105`}
//               >
//                 {item.label}
//                 {item.id !== "get-started" && (
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//                 )}
//               </button>
//             </li>
//           )
//         )}
//         <li className="text-center md:text-left">
//           <button
//             onClick={handleGetStartedClick} // Handle navigation
//             className="block py-2 px-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
//           >
//             Get Started
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = () => {
    navigate("/register");
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-gray-900/80 backdrop-blur-sm z-50">
      {/* Logo with Gradient Effect */}
      <div
        className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        onClick={() => scrollToSection("hero")}
      >
        DomoticAI
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="block md:hidden text-blue-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-4 fixed md:static top-16 left-0 w-full md:w-auto 
          bg-gray-800 md:bg-transparent shadow-md md:shadow-none rounded-b-lg 
          ${isOpen ? "block" : "hidden"} md:block`}
      >
        {[
          { id: "hero", label: "Home" }, 
          { id: "features", label: "Features" }, 
          { id: "faq", label: "FAQ" }, 
          { id: "contact", label: "Contact Us" }
        ].map((item, index) => (
          <li key={index} className="text-center md:text-left">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`block py-2 px-3 w-full md:w-auto text-gray-300 
                hover:text-blue-500 transition-all duration-300 
                relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 
                transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
        <li className="text-center md:text-left">
          <button
            onClick={handleGetStartedClick}
            className="block w-full md:w-auto py-2 px-4 mt-2 md:mt-0 
              bg-blue-600 text-white rounded-full 
              hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;