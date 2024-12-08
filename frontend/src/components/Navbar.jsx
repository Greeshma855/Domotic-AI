// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-transparent shadow-none shadow-md z-50">
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
//         {[
//           { id: "hero", label: "Home" },
//           { id: "about", label: "About Us" },
//           { id: "features", label: "Features" },
//           { id: "contact", label: "Contact Us" },
//           { id: "get-started", label: "Get Started" },
//         ].map((item, index) => (
//           <li key={index} className="text-center md:text-left">
//             <button
//               onClick={() => scrollToSection(item.id)}
//               className={`block py-2 px-3 ${
//                 item.id === "get-started"
//                   ? "bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
//                   : "text-gray-700 hover:text-blue-600 transition-transform duration-300 relative group"
//               } transform group-hover:scale-105`}
//             >
//               {item.label}
//               {item.id !== "get-started" && (
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               )}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = () => {
    // Choose whether to navigate to signup or login
    navigate("/register"); // or "/login" depending on your preference
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-transparent shadow-none shadow-md z-50">
      {/* Logo with Gradient Effect */}
      <div
        className="text-3xl font-bold cursor-pointer text-gradient bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent"
        onClick={() => scrollToSection("hero")}
      >
        DomoticAI
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="block md:hidden text-teal-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {[{ id: "hero", label: "Home" }, { id: "about", label: "About Us" }, { id: "features", label: "Features" }, { id: "contact", label: "Contact Us" }].map(
          (item, index) => (
            <li key={index} className="text-center md:text-left">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block py-2 px-3 ${
                  item.id === "get-started"
                    ? "bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                    : "text-gray-700 hover:text-blue-600 transition-transform duration-300 relative group"
                } transform group-hover:scale-105`}
              >
                {item.label}
                {item.id !== "get-started" && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                )}
              </button>
            </li>
          )
        )}
        <li className="text-center md:text-left">
          <button
            onClick={handleGetStartedClick} // Handle navigation
            className="block py-2 px-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

