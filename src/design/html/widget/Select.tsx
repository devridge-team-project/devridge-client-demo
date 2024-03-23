import { SelectProps } from "interface";

export default function Select({ state, selectOptions, placeholder }: SelectProps<number>) {
  const [value, setValue] = state;
  return (
    <select
      className={
        value === 0
          ? "text-gray-500 "
          : "" + "w-full rounded-md border-2 p-4 focus:outline-blue-500"
      }
      onChange={(e) => setValue(e.target.value as unknown as number)}
    >
      <option value={0} disabled selected hidden>
        {placeholder}
      </option>
      {selectOptions.map(({ value, title }) => (
        <option key={value} value={value} className="text-black">
          {title}
        </option>
      ))}
    </select>
  );
}
