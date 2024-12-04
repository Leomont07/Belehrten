import Header from '../components/Nav/header';
import ResultsCard from '../components/Test/resultsCard';
import ScoreMeaning from '../components/Test/scoreMeaning';
import RadarChart from '../components/Test/radarChart';
import { ENDPOINTS } from '../config/endpoint';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Simulación de resultados, normalmente estos vienen del estado o el backend
  const results = {
    grammar: 8, // Puntaje para gramática
    reading: 9, // Puntaje para lectura
    vocabulary: 8, // Puntaje para vocabulario
    listening: 9, // Puntaje para comprensión auditiva
    level: 'B2' // Nivel final calculado
  };

  const generateStudyPlan = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(ENDPOINTS.PLAN + '/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grammar: results.grammar,
          reading: results.reading,
          vocabulary: results.vocabulary,
          listening: results.listening,
          nivel: results.level,
          id_usuario: 23 // Cambia esto según el usuario logueado
        })
      });

      if (!response.ok) {
        throw new Error('Error en la generación del plan de estudios.');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'plan_estudios.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();

      setMessage('¡Plan de estudios generado exitosamente!');
      navigate('/')
      
    } catch (error) {
      console.error('Error generando el plan:', error);
      setMessage('Hubo un error al generar el plan de estudios.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen pb-20 bg-white overflow-hidden">
      <Header />
      <h1 className="mt-12 text-6xl font-bold text-neutral-900 max-md:mt-10 max-md:text-4xl">
        ¡Congratulations!
      </h1>
      <ResultsCard results={results} /> {/* Pasar los resultados como props */}
      <ScoreMeaning />
      <RadarChart />
      <button
        onClick={generateStudyPlan}
        className={`mt-6 px-8 py-4 text-white font-bold rounded-lg ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={loading}
      >
        {loading ? 'Generando Plan...' : 'Generar Plan de Estudios'}
      </button>
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
    </main>
  );
}

export default ResultsPage;
