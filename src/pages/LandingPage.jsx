import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
import TestSection from './TestSection';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <TestSection />
      <Footer />
    </div>
  );
};

export default LandingPage;