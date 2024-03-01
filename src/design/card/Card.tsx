import { Size } from "interface";
import cn from "util/classNames";

const widthSize = {
  sm: "w-40",
  md: "w-80",
  lg: "w-120",
  full: "w-full",
} as Record<Size, string>;

const heightSize = {
  sm: "h-20",
  md: "h-40",
  lg: "h-55",
  full: "h-full",
} as Record<Size, string>;

export default function Card({
  onClick,
  options,
  children,
}: {
  onClick?: () => unknown | (() => Promise<unknown>);
  options?: {
    round?: "md" | "lg" | "xl";
    width?: Size;
    height?: Size;
  };
  children: React.ReactNode;
}) {
  const { width, height, round } = options ?? {};

  const container = {
    sizes: `${widthSize[width ?? "md"]} ${heightSize[height ?? "sm"]}`,
    displays: "flex flex-col justify-between",
    paddings: "p-2",
    styles: `border-2 shadow-md rounded-${round ?? "md"}`,
    clickEvents: onClick ? "cursor-pointer" : "",
  };

  return (
    <div onClick={onClick} className={cn(container)}>
      {children}
    </div>
  );
}
