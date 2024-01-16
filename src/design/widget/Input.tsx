import { Dispatch } from "react";

export default function Input<T extends string | number>({
  title,
  onChange,
  placeholder,
}: {
  title?: string;
  onChange: [T, Dispatch<T>];
  placeholder?: string;
}) {
  const [value, setValue] = onChange;
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div>{title}</div>
      <input
        className="w-full rounded-md border-2 p-4 focus:outline-blue-500"
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder ?? ""}
        type="text"
      />
    </div>
  );
}
