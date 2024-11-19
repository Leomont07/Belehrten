import React, { useEffect, useState } from 'react';
import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import { Link, useNavigate } from 'react-router-dom';
//import Logouta from '../components/General/Logouta';
//import Profilea from '../components/General/Profilea';

function TestStartPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('session');
    setIsLoggedIn(!!session);
  }, []);

  const goTest = async () => {
    try {
      const session = localStorage.getItem('session');
      
      if (!session) {
        alert('Inicia sesión o registrate para iniciar el test');
        navigate('/login');
      } else {
        navigate('/test');
      }

    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un problema al cerrar la sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <main className="flex overflow-hidden flex-col pb-20 bg-white" style={{ padding: '0px 0px 0px' }}>
      <Header />
      <button onClick={goTest} className='object-contain self-center mt-32 max-w-full aspect-[1.48] w-[561px] max-md:mt-10'>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28956f29a141ce32a6e4c38d989feee136bf5f515848fc6a0a92649e82e8b1f6?placeholderIfabsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
        alt="Dashboard illustration"
        className="object-contain self-center mt-32 max-w-full aspect-[1.48] w-[561px] max-md:mt-10"
      />
      </button>
      <Footer />
    </main>
  );
}

export default TestStartPage;