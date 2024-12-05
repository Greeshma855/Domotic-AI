import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./newpages/LandingPage";
import Custom404 from "./pages/Custom404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmartHome from "./newpages/SmartHome";
import AboutSmartHome from "./newpages/AboutSmartHome";
import Features from "./newpages/Features";
import Window from "./newpages/Window";
import FAQ from "./newpages/FAQ";
import ContactUs from "./newpages/Contactus";
import SignupPage from "./newpages/SignupPage";
import LoginPage from "./newpages/LoginPage";
import SmartHomeDashboard from "./SmartHomeDashboard";
import AnalyticsDashboard from './AnalyticsDashboard';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const [isLandingComplete, setIsLandingComplete] = useState(false);

  return (
    <Routes>
      {/* 404 Route */}
      <Route path="*" element={<Custom404 />} />

      {/* Home Route */}
      <Route
        path="/"
        element={
          <div>
            <LandingPage onComplete={() => setIsLandingComplete(true)} />
            {isLandingComplete && <Navbar />}

            {/* Main Content */}
            <main>
            <section id="smart-home">
              <SmartHome />
            </section>
            <section id="about">
              <AboutSmartHome />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="window">
              <Window />
            </section>
            <section id="faq">
              <FAQ />
            </section>
            <section id="contact">
              <ContactUs />
            </section>
          </main>

            <Footer />
          </div>
        }
      />

     <Route path="/dashboard" element={<SmartHomeDashboard />} />
     <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />


      {/* Authentication Routes */}
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;