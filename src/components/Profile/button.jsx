

function Button({ text, color }) {
  const bgColor = color === 'yellow' ? 'bg-yellow-400' : 'bg-indigo-600';

  return (
    <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-[220px]">
      <button className={`gap-5 self-stretch px-2.5 py-2 w-full ${bgColor} rounded-3xl shadow-sm min-h-[40px]`}>
        {text}
      </button>
    </div>
  );
}

export default Button;