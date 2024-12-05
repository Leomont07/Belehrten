import React from 'react';
import { Radar } from 'react-chartjs-2'; // Ejemplo con `react-chartjs-2`
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

function RadarChart({ data }) {
  const chartData = {
    labels: ['Grammar', 'Reading', 'Vocabulary', 'Listening'],
    datasets: [
      {
        label: 'Skill Levels',
        data: [
          data.grammar || 0,
          data.reading || 0,
          data.vocabulary || 0,
          data.listening || 0,
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { stepSize: 20 },
        grid: { color: 'rgba(255,255,255,0.3)' },
        angleLines: { color: 'rgba(255,255,255,0.3)' },
        pointLabels: { color: '#ffffff' },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
    responsive: true,
  };

  return (
    <section className="flex flex-col p-6 mt-24 max-w-full text-xs text-white whitespace-nowrap bg-pink-900 min-h-[524px] w-[620px] max-md:mt-10 rounded-3xl shadow-sm">
      <h2 className="text-lg font-bold text-center mb-4">Skill Radar Chart</h2>
      <div className="flex justify-center items-center w-full h-full">
        <Radar data={chartData} options={options} />
      </div>
    </section>
  );
}

export default RadarChart;
