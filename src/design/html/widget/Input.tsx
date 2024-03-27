import { InputProps } from "interface";

export default function Input<T extends string | number | undefined>({
  state,
  placeholder,
  options,
}: InputProps<T>) {
  const { noOutline } = options ?? {};
  const [value, setValue] = state;
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  return (
    <input
      className={`${!noOutline && "border-2 p-4 focus:outline-blue-500 rounded-md"} w-full text-xl`}
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder ?? ""}
      type="text"
    />
  );
}
