import React from 'react';

function SkillBar({ name, score }) {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[450px] max-md:max-w-full">
      <h4 className="text-3xl font-bold text-black max-md:max-w-full">{name} - {score}</h4>
      <div className="flex flex-wrap gap-5 items-start py-2.5 pr-2.5 w-full max-md:max-w-full">
        <div className="flex grow shrink bg-green-500 rounded-3xl h-[30px] w-[140px]" />
        {[...Array(score - 1)].map((_, index) => (
          <div key={index} className="flex grow shrink w-10 bg-green-500 h-[30px]" />
        ))}
        {[...Array(5 - score)].map((_, index) => (
          <div key={index} className="flex grow shrink w-10 bg-zinc-300 h-[30px]" />
        ))}
      </div>
    </div>
  );
}

export default SkillBar;