import { Dispatch } from "react";

export default function Input<T extends string | number>({
  onChange,
  placeholder,
}: {
  onChange: [T, Dispatch<T>];
  placeholder?: string;
}) {
  const [value, setValue] = onChange;
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  return (
    <input
      className="w-full rounded-md border-2 p-4 focus:outline-blue-500"
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder ?? ""}
      type="text"
    />
  );
}
