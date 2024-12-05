import React from 'react';

function ScoreMeaning({ level }) {
  // Textos basados en el nivel
  const levelTexts = {
    Basic: {
      title: 'At Basic level you can:',
      description: 'Understand and use everyday expressions and basic phrases. Introduce yourself and others, and ask and answer questions about personal details. Interact in a simple way provided the other person talks slowly and clearly.',
    },
    Intermediate: {
      title: 'At Intermediate level you can:',
      description: 'Understand the main points of clear standard input on familiar matters regularly encountered in work, school, or leisure. Produce simple connected text on topics that are familiar or of personal interest.',
    },
    Advanced: {
      title: 'At Advanced level you can:',
      description: 'Express yourself fluently and spontaneously without much obvious searching for expressions. Use language flexibly and effectively for social, academic, and professional purposes. Produce clear, well-structured, detailed text on complex subjects.',
    },
  };

  // Obtener los textos correspondientes al nivel proporcionado
  const { title, description } = levelTexts[level] || {
    title: 'Unknown Level',
    description: 'The level information provided is not recognized. Please check the test results.',
  };

  return (
    <section className="flex flex-col mt-20 max-w-full w-[800px] max-md:mt-10">
      <h2 className="text-3xl font-bold text-neutral-900 max-md:max-w-full">
        WHAT DOES MY SCORE MEAN?
      </h2>
      <div className="flex flex-col justify-between p-5 mt-9 w-full bg-gray-50 rounded-3xl border border-gray-50 border-solid shadow-sm min-h-[300px] text-neutral-900 max-md:max-w-full">
        <h3 className="text-3xl font-bold max-md:max-w-full">{title}</h3>
        <p className="mt-11 text-2xl max-md:mt-10 max-md:max-w-full">{description}</p>
      </div>
    </section>
  );
}

export default ScoreMeaning;