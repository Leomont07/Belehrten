function NavigationButtons() {
  return (
    <div className="flex gap-2.5 items-center self-stretch my-auto">
      <div className="flex shrink-0 self-stretch my-auto bg-pink-900 rounded-full fill-pink-900 h-[17px] w-[17px]" />

      {/* Botón de flecha hacia adelante para avanzar */}
      <button className="flex overflow-hidden flex-col justify-center items-center self-stretch p-2.5 my-auto min-h-[60px] w-[60px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b86f205e9835eea6300a9e494ceec519f78649b5eb1c90c259006f03581ee83d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
          alt="Next question"
          className="object-contain w-10 aspect-square fill-pink-900"
        />
      </button>
    </div>
  );
}

export default NavigationButtons;
