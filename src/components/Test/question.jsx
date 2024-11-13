import React from 'react';

function Question({ text, options }) {
  return (
    <article className="flex flex-col items-start max-w-full text-3xl text-center text-black w-[656px]">
      <h2 className="gap-2.5 self-stretch p-2.5 mt-5 w-full text-3xl font-bold max-md:max-w-full">
        {text}
      </h2>
      {options.map((option, index) => (
        <div key={index} className="flex gap-5 items-center mt-5 max-md:max-w-full">
          <img 
            loading="lazy" 
            src={`http://b.io/ext_${index === 3 ? '4' : '3'}-`} 
            alt="" 
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" 
          />
          <p className="self-stretch my-auto">{option}</p>
        </div>
      ))}
    </article>
  );
}

export default Question;