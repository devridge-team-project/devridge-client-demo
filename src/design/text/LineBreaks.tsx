import { useId } from "react";

export default function LineBreaks({
  texts,
  className,
}: {
  texts?: string[] | string;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={className}>
      {typeof texts === "string"
        ? texts
        : texts?.map((text) => (
            <div key={id} className="leading-tight">
              {text}
            </div>
          ))}
    </div>
  );
}
