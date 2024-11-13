import React from 'react';

function InputField({ label, type, iconSrc }) {
  return (
    <div className="flex gap-10 justify-between items-center px-5 py-2 mt-8 w-full text-base bg-gray-50 rounded-3xl shadow-sm min-h-[40px]">
      <label className="sr-only" htmlFor={`input-${label}`}>{label}</label>
      <input 
        type={type} 
        id={`input-${label}`} 
        placeholder={label} 
        className="self-stretch my-auto w-[171px] bg-transparent"
        aria-label={label}
      />
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </div>
  );
}

export default InputField;