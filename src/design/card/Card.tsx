import { Size } from "interface/Size";
import { cn } from "util/classNames";

const widthSize: Record<Size, string> = {
  small: "w-40",
  medium: "w-80",
  large: "w-120",
  full: "w-full",
};

const heightSize: Record<Size, string> = {
  small: "h-20",
  medium: "h-40",
  large: "h-55",
  full: "h-full",
};

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
  const displays = "flex flex-col justify-between";
  const paddings = "p-2";
  const styles = `${onClick ? "cursor-pointer" : ""} border-2 shadow-md rounded-${round ?? "md"}`;

  return (
    <div
      onClick={onClick}
      className={cn(
        displays,
        widthSize[width ?? "medium"],
        heightSize[height ?? "small"],
        paddings,
        styles,
      )}
    >
      {children}
    </div>
  );
}
