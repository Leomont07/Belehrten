import React, { useState } from 'react';

function Question({ questionNumber, text, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
        onAnswer(selectedOption); 
    } else {
      alert("Please select an answer!");
    }
  };

  return (
    <article className="flex flex-col items-start max-w-full text-center text-black p-5">
      <h2 className="text-2xl font-bold mb-4">
        Question {questionNumber}: {text}
      </h2>

      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              onChange={handleOptionChange}
              checked={selectedOption === option}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option}
            </label>
          </div>
        ))}
      </div>

      {/* Botón de flecha hacia adelante para la siguiente pregunta */}
      <button
        onClick={handleNextQuestion}
        className="mt-6 px-4 py-2 text-white rounded-lg hover:text-white transition"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b86f205e9835eea6300a9e494ceec519f78649b5eb1c90c259006f03581ee83d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
          alt="Next question"
          className="object-contain w-10 aspect-square fill-pink-900"
        />
      </button>
    </article>
  );
}

export default Question;
