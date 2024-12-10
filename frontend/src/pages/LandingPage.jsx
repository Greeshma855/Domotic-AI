import React, { useState } from 'react';
import Footer from '../components/Footer';
import SmartHome from './SmartHome';
import Features from './Features';
import FAQ from './FAQ';
import ContactUs from './Contactus';
import LandingScreen from './LandingScreen';

const LandingPage = () => {
  const [isLandingComplete, setIsLandingComplete] = useState(false);

  return (
    <div className='bg-gray-900 min-h-screen justify-center items-center'>
      {!isLandingComplete ? (
        <LandingScreen onComplete={() => setIsLandingComplete(true)} />
      ) : (
        <>
          <main>
            <section id="smart-home">
              <SmartHome />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="faq">
              <FAQ />
            </section>
            <section id="contact">
              <ContactUs />
            </section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LandingPage;
