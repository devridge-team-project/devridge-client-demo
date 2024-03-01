import { Dispatch, SetStateAction } from "react";
import cn from "util/classNames";

export default function TextArea<T extends string | number | undefined>({
  title,
  onChange,
  placeholder,
}: {
  title?: string;
  onChange: [T, Dispatch<T>];
  placeholder?: string;
}) {
  const [value, setValue] = onChange;
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value as T);
  };

  const sizes = "w-full min-h-80";
  const styles = "rounded-md border-2 p-4 focus:outline-blue-500";
  return (
    <div className="flex flex-col gap-2 w-full">
      <div>{title}</div>
      <textarea
        className={cn(sizes, styles)}
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder ?? ""}
      />
    </div>
  );
}
