import React from "react";

interface Radio {
  id: string;
  name: string;
  defaultValue: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

export default function RadioButton({ id, name, defaultValue, value, onChange, className }: Radio) {
  return (
    <label htmlFor={id} className={`block text-center mr-2.5 ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={defaultValue === value}
        onChange={onChange}
        className="hidden"
      />
      {value}
    </label>
  );
}
