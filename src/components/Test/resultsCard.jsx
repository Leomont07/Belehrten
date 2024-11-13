import React from 'react';
import SkillBar from './SkillBar';

function ResultsCard() {
  const skills = [
    { name: "Grammar", score: 8 },
    { name: "Reading", score: 9 },
    { name: "Vocabulary", score: 8 },
    { name: "Listening", score: 9 }
  ];

  return (
    <section className="flex flex-col py-6 pl-5 mt-12 w-full bg-indigo-600 rounded-3xl shadow-sm max-w-[1000px] min-h-[522px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-0 items-center self-start p-2.5 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[800px] max-md:max-w-full">
          <h2 className="text-4xl font-bold text-white max-md:max-w-full">English test</h2>
          <div className="flex flex-col w-full max-md:max-w-full">
            <h3 className="text-4xl font-bold text-black max-md:max-w-full">C1 - Avanzado</h3>
            <div className="flex flex-wrap gap-5 items-start py-2.5 pr-2.5 w-full max-md:max-w-full">
              <div className="flex shrink-0 h-10 bg-green-500 rounded-3xl w-[200px]" />
              <div className="flex shrink-0 h-10 bg-green-500 w-[100px]" />
              <div className="flex shrink-0 h-10 bg-green-500 w-[100px]" />
              <div className="flex shrink-0 h-10 bg-green-500 w-[100px]" />
              <div className="flex shrink-0 h-10 rounded-none bg-zinc-300 w-[100px]" />
            </div>
          </div>
        </div>
        <div className="self-stretch px-9 pt-9 pb-3.5 my-auto text-6xl font-bold text-white whitespace-nowrap border border-white border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[150px] max-md:px-5 max-md:text-4xl">
          523
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center p-2.5 mt-2.5 w-full">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} score={skill.score} />
        ))}
      </div>
    </section>
  );
}

export default ResultsCard;