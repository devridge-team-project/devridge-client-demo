import { Size } from "interface";
import { cn } from "util/classNames";

const widthSize = {
  sm: "w-40",
  md: "w-80",
  lg: "w-120",
  full: "w-full",
} as Record<Size, string>;

const heightSize = {
  sm: "h-20",
  md: "h-32",
  lg: "h-55",
  full: "h-full",
} as Record<Size, string>;

export default function Card({
  onClick,
  classNames,
  options,
  children,
}: {
  onClick?: () => unknown | (() => Promise<unknown>);
  classNames?: string;
  options?: {
    round?: "md" | "lg" | "xl";
    width?: Size;
    height?: Size;
    isBorder?: boolean;
  };
  children: React.ReactNode;
}) {
  const { width, height, round, isBorder } = options ?? {};

  const container = {
    sizes: `${widthSize[width ?? "md"]} ${heightSize[height ?? "sm"]}`,
    clickEvents: onClick ? "cursor-pointer" : "",
    border: isBorder && "border-b ",
    classNames,
  };

  return (
    <div onClick={onClick} className={cn(container)}>
      {children}
    </div>
  );
}
