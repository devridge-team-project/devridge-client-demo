import { cn } from "util/classNames";

export default function Card({
  onClick,
  children,
}: {
  onClick?: () => unknown | (() => Promise<unknown>);
  children: React.ReactNode;
}) {
  const displays = "flex flex-col justify-between";
  const sizes = "w-80 h-20";
  const paddings = "p-2";
  const styles = `${onClick ? "cursor-pointer" : ""} border-2 shadow-md rounded-lg`;

  return (
    <div onClick={onClick} className={cn(displays, sizes, paddings, styles)}>
      {children}
    </div>
  );
}
