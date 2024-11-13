import React from 'react';
import Header from './Nav/Header';
import HeroSection from './Nav/HeroSection';
import WhyChooseUs from './Nav/WhyChooseUs';
import TestSection from './Nav/TestSection';
import Footer from './Nav/Footer';

const Home = () => {
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

export default Home;
