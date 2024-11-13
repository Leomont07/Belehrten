import React from 'react';

function RadarChart() {
  return (
    <section className="flex flex-col p-2 mt-24 max-w-full text-xs text-white whitespace-nowrap bg-pink-900 min-h-[524px] w-[620px] max-md:mt-10">
      <div className="flex flex-col flex-1 px-7 py-2.5 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-center text-center">Grammar</div>
        <div className="flex flex-wrap gap-2 items-center">
          <div className="self-stretch my-auto text-right">Listening</div>
          <div className="flex flex-col self-stretch text-center max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22aa416d1367011c6d7fcb4ec95566105dbd1e2be82d5b730e8a2b8afc7651b4?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Radar Chart" className="object-contain w-full aspect-square max-md:max-w-full" />
            <div className="z-10 self-center">Vocabulary</div>
          </div>
          <div className="self-stretch my-auto">Reading</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap justify-center items-start mt-2 w-full max-md:max-w-full">
        <div className="flex overflow-hidden gap-1 items-center p-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91168b00a072d82ffd4fc94586d7d0b7ab20b8a76a9a70ae43aaf309600af1c7?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          <div className="self-stretch my-auto">2022</div>
        </div>
      </div>
    </section>
  );
}

export default RadarChart;