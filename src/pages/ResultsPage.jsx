import React from 'react';
import Header from './Header';
import ResultsCard from './ResultsCard';
import ScoreMeaning from './ScoreMeaning';
import RadarChart from './RadarChart';

function ResultsPage() {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-80 bg-white max-md:pb-24">
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