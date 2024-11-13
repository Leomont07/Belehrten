import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import HeroSection from '../components/Nav/heroSection';
import WhyChooseUs from '../components/Nav/whyChooseUs';
import TestSection from '../components/Nav/testSection';


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
