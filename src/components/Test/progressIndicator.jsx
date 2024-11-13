import React from 'react';

function ProgressIndicator({ totalQuestions, currentQuestion }) {
  return (
    <div className="flex flex-wrap gap-5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
      {[...Array(totalQuestions)].map((_, index) => (
        <div 
          key={index}
          className={`flex shrink-0 self-stretch my-auto w-10 h-10 rounded-full ${
            index + 1 === currentQuestion ? 'bg-pink-900 fill-pink-900' : 'bg-zinc-300'
          }`}
        />
      ))}
    </div>
  );
}

export default ProgressIndicator;