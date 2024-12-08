import React from "react";
import fbIcon from "../assets/images/fb30.png";
import igIcon from "../assets/images/ig30.png";
import twitterIcon from "../assets/images/twitter30.png";
import linkedinIcon from "../assets/images/linkedin30.png";

const Footer = () => {
  return (
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
