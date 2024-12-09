// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import Custom404 from "./pages/Custom404";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SmartHome from "./pages/SmartHome";
// import AboutSmartHome from "./pages/AboutSmartHome";
// import Features from "./pages/Features";
// import Window from "./pages/Window";
// import FAQ from "./pages/FAQ";
// import ContactUs from "./pages/Contactus";
// import SignupPage from "./pages/SignupPage";
// import LoginPage from "./pages/LoginPage";
// import SmartHomeDashboard from "./SmartHomeDashboard";
// import AnalyticsDashboard from './AnalyticsDashboard';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const [isLandingComplete, setIsLandingComplete] = useState(false);

//   return (
//     <Routes>
//       {/* 404 Route */}
//       <Route path="*" element={<Custom404 />} />

//       {/* Home Route */}
//       <Route
//         path="/"
//         element={
//           <div>
//             <LandingPage onComplete={() => setIsLandingComplete(true)} />
//             {isLandingComplete && <Navbar />}

//             {/* Main Content */}
//             <main>
//             <section id="smart-home">
//               <SmartHome />
//             </section>
//             <section id="about">
//               <AboutSmartHome />
//             </section>
//             <section id="features">
//               <Features />
//             </section>
//             <section id="window">
//               <Window />
//             </section>
//             <section id="faq">
//               <FAQ />
//             </section>
//             <section id="contact">
//               <ContactUs />
//             </section>
//           </main>

//             <Footer />
//           </div>
//         }
//       />

//      <Route path="/dashboard" element={<SmartHomeDashboard />} />
//      <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />


//       {/* Authentication Routes */}
//       <Route path="/register" element={<SignupPage />} />
//       <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//     </Routes>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SmartHomeDashboard from "./pages/SmartHomeDashboard";
import Custom404 from "./pages/Custom404";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const [isLandingComplete, setIsLandingComplete] = useState(false);

  return (
    <Routes>
    <Route path="*" element={<Custom404/>}/>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<SmartHomeDashboard />} />
    {/* <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} /> */}
    <Route path="/register" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;