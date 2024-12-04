import Header from '../components/Nav/header';
import ResultsCard from '../components/Test/resultsCard';
import ScoreMeaning from '../components/Test/scoreMeaning';
import RadarChart from '../components/Test/radarChart';

function ResultsPage() {
  // Simulación de resultados, normalmente estos vienen del estado o el backend
  const results = {
    grammar: 8, // Puntaje para gramática
    reading: 9, // Puntaje para lectura
    vocabulary: 8, // Puntaje para vocabulario
    listening: 9, // Puntaje para comprensión auditiva
    level: 'C1 - Avanzado' // Nivel final calculado
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
    </main>
  );
}

export default ResultsPage;
