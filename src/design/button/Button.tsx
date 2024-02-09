import { Size } from "interface/Size";
import { center } from "style/display";
import { cn } from "util/classNames";

const widthSize: Record<Size, string> = {
  small: "w-50 h-12 rounded-full",
  medium: "w-72 h-12 rounded-full",
  large: "w-80 h-15 rounded-md",
  full: "w-full h-15 rounded-md",
};

const colorSet: Record<string, string> = {
  black: "bg-black border-2 border-black text-white",
  white: "bg-white border-2 border-black text-black",
};

export default function Button({
  title,
  onClick,
  options,
  freeze,
}: {
  title: string;
  onClick: () => unknown | (() => Promise<unknown>);
  options?: { size?: Size; color?: string };
  freeze?: boolean;
}) {
  const { size, color } = options ?? {};
  const positions = center.colO(0);
  const sizes = widthSize[size ?? "small"];

  const styles = [
    colorSet[color ?? "black"],
    freeze ? "cursor-default" : "",
    "font-bold text-xl",
  ].join(" ");

  return (
    <button onClick={onClick} className={cn(positions, sizes, styles)}>
      {title}
    </button>
  );
}
