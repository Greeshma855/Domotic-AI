import React from "react";
import fbIcon from "../assets/images/fb30.png";
import igIcon from "../assets/images/ig30.png";
import twitterIcon from "../assets/images/twitter30.png";
import linkedinIcon from "../assets/images/linkedin30.png";

const Footer = () => {
  return (
    // <footer className="bg-[#656469] text-white py-8">
    //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6">
    //     {/* Company Section */}
    //     <div>
    //       <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
    //       <ul>
    //         <li className="mb-2">
    //           <a href="#about" className="hover:text-teal-300 transition">
    //             About Us
    //           </a>
    //         </li>
    //         <li className="mb-2">
    //           <a href="#services" className="hover:text-teal-300 transition">
    //             Our Services
    //           </a>
    //         </li>
    //         <li className="mb-2">
    //           <a href="#privacy" className="hover:text-teal-300 transition">
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#affiliate" className="hover:text-teal-300 transition">
    //             Affiliate Program
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Get Help Section */}
    //     <div>
    //       <h4 className="text-lg font-semibold mb-4">GET HELP</h4>
    //       <ul>
    //         <li className="mb-2">
    //           <a href="#faq" className="hover:text-teal-300 transition">
    //             FAQ
    //           </a>
    //         </li>
    //         <li className="mb-2">
    //           <a href="#shipping" className="hover:text-teal-300 transition">
    //             Shipping
    //           </a>
    //         </li>
    //         <li className="mb-2">
    //           <a href="#returns" className="hover:text-teal-300 transition">
    //             Returns
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#order-status" className="hover:text-teal-300 transition">
    //             Order Status
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Social Media Section */}
    //     <div>
    //       <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
    //       <div className="flex justify-center md:justify-start space-x-4">
    //         <a
    //           href="https://www.facebook.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Visit our Facebook page"
    //         >
    //           <img
    //             src={fbIcon}
    //             alt="Facebook"
    //             className="w-10 h-10 border-2 border-white rounded-full hover:scale-110 transition transform"
    //           />
    //         </a>
    //         <a
    //           href="https://www.instagram.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Visit our Instagram profile"
    //         >
    //           <img
    //             src={igIcon}
    //             alt="Instagram"
    //             className="w-10 h-10 border-2 border-white rounded-full hover:scale-110 transition transform"
    //           />
    //         </a>
    //         <a
    //           href="https://www.twitter.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Visit our Twitter profile"
    //         >
    //           <img
    //             src={twitterIcon}
    //             alt="Twitter"
    //             className="w-10 h-10 border-2 border-white rounded-full hover:scale-110 transition transform"
    //           />
    //         </a>
    //         <a
    //           href="https://www.linkedin.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Visit our LinkedIn profile"
    //         >
    //           <img
    //             src={linkedinIcon}
    //             alt="LinkedIn"
    //             className="w-10 h-10 border-2 border-white rounded-full hover:scale-110 transition transform"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom Footer Text */}
    //   <div className="mt-8 text-center text-sm text-gray-400 px-6">
    //     &copy; {new Date().getFullYear()} DomoticAI. All rights reserved.
    //   </div>
    // </footer>
    <footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-4 text-center">
  <div className="mb-6">
    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
      DomoticAI
    </h3>
    <p className="text-gray-400 mt-2">
      Transforming Homes with Smart Technology
    </p>
  </div>
  <div className="flex justify-center space-x-6 mb-8">
    {["Home", "Services", "About", "Contact"].map((item) => (
      <a
        key={item}
        href="#"
        className="text-gray-300 hover:text-white transition-colors"
      >
        {item}
      </a>
    ))}
    
  </div>
  <div className="text-gray-500">
    © 2024 DomoticAI. All Rights Reserved.
  </div>
</div>
</footer>

  );
};


export default Footer;





