import Header from '../components/Nav/header';
import ResultsCard from '../components/Test/resultsCard';
import ScoreMeaning from '../components/Test/scoreMeaning';
import RadarChart from '../components/Test/radarChart';
import { ENDPOINTS } from '../config/endpoint';
import { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const results = location.state?.retro?.data; // Acceder directamente a `data` dentro de `retro`
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem('session')) || {};
    setUserId(storedProfileData.id_usuario || null);
  }, []);

  const generateStudyPlan = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(ENDPOINTS.PLAN + '/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grammar: results.grammar,
          reading: results.reading,
          vocabulary: results.vocabulary,
          listening: results.listening,
          nivel: results.level,
          id_usuario: userId, 
        }),
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
      navigate('/');
    } catch (error) {
      console.error('Error generando el plan:', error);
      setMessage('Hubo un error al generar el plan de estudios.');
    } finally {
      setLoading(false);
    }
  };

  if (!results) {
    // Si no se recibieron resultados, redirigir o mostrar un mensaje de error
    return (
      <main className="flex flex-col items-center justify-center min-h-screen pb-20 bg-white overflow-hidden">
        <Header />
        <h1 className="mt-12 text-4xl font-bold text-red-500">
          No se encontraron resultados. Por favor, realiza el test nuevamente.
        </h1>
        <button
          onClick={() => navigate('/TestPage')}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          Realizar Test
        </button>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen pb-20 bg-white overflow-hidden">
      <Header />
      <h1 className="mt-12 text-6xl font-bold text-neutral-900 max-md:mt-10 max-md:text-4xl">
        ¡Congratulations!
      </h1>
      {/* Renderizar ResultsCard con datos */}
      <ResultsCard results={results} />
      {/* Muestra información adicional sobre el significado del puntaje */}
      <ScoreMeaning results={results.level} />
      {/* Renderizar RadarChart con datos */}
      <RadarChart
        data={{
          grammar: results.grammar,
          reading: results.reading,
          vocabulary: results.vocabulary,
          listening: results.listening,
        }}
      />
      <button
        onClick={generateStudyPlan}
        className={`mt-6 px-8 py-4 text-white font-bold rounded-lg ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
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
