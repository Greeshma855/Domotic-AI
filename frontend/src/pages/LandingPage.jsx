import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmartHome from './SmartHome';
import AboutSmartHome from './AboutSmartHome';
import Features from './Features';
import Window from './Window';
import FAQ from './FAQ';
import ContactUs from './Contactus';
import LandingScreen from './LandingScreen';

const LandingPage = () => {
  const [isLandingComplete, setIsLandingComplete] = useState(false);

  return (
    <div>
      {/* Landing Page */}
      <LandingScreen />
      <header>
        <h1>Welcome to Our Smart Home Solution</h1>
        <button onClick={() => setIsLandingComplete(true)}>Explore More</button>
      </header>

      {/* Conditional Navbar */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
