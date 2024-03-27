import { Dispatch } from "react";
import { cn } from "util/classNames";

export default function TextArea<T extends string | number | undefined>({
  title,
  state: [value, setValue],
  placeholder,
}: {
  title?: string;
  state: [T, Dispatch<T>];
  placeholder?: string;
}) {
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value as T);
  };
  const container = {
    sizes: "w-full min-h-80",
    styles: "focus:outline-none text-xl",
  };
  return (
    <textarea
      className={cn(container)}
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder ?? ""}
    />
  );
}
