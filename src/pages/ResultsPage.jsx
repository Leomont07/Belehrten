import Header from '../components/Nav/header';
import ResultsCard from '../components/Test/resultsCard';
import ScoreMeaning from '../components/Test/scoreMeaning';
import RadarChart from '../components/Test/radarChart';

function ResultsPage() {
  return (
    <main 
      className="flex flex-col items-center justify-center min-h-screen pb-20 bg-white overflow-hidden"
    >
      <Header />
      <h1 className="mt-12 text-6xl font-bold text-neutral-900 max-md:mt-10 max-md:text-4xl">
        ¡Congratulations!
      </h1>
      <ResultsCard />
      <ScoreMeaning />
      <RadarChart />
    </main>
  );
}

export default ResultsPage;