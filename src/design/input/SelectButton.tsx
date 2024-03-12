import React from "react";

interface Select {
  id: string;
  type: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function SelectButton({
  id,
  type,
  name,
  value,
  checked,
  onChange,
  className,
}: Select) {
  console.log(checked, name, value);
  const check = type === "radio" && checked ? " bg-gray-200" : "";
  console.log(check);
  return (
    <label htmlFor={id} className={`block text-center mr-2.5 ${className}${check}`}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`${type === "radio" ? "hidden" : ""}`}
      />
      {value}
    </label>
  );
}
