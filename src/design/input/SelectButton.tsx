import React from "react";

interface Radio {
  id: string;
  type: string;
  name: string;
  defaultValue?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

export default function SelectButton({
  id,
  type,
  name,
  defaultValue,
  value,
  onChange,
  className,
}: Radio) {
  return (
    <label htmlFor={id} className={`block text-center mr-2.5 ${className}`}>
      <input
        type={type}
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
