import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import HeroSection from '../components/Nav/heroSection';
import WhyChooseUs from '../components/Nav/whyChooseUs';
import TestSection from '../components/Nav/testSection';

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <TestSection />
      <Footer />
    </div>
  );
};

export default Home;
