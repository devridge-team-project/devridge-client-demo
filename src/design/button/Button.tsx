import { center } from "style/display";
import { cn } from "util/classNames";
type Size = "small" | "medium" | "large";

const widthSize: Record<Size, string> = {
  small: "w-50 h-12 rounded-full",
  medium: "w-72 h-12 rounded-full",
  large: "w-80 h-15 rounded-md",
};

const colorSet: Record<string, string> = {
  black: "bg-black border-2 border-black text-white",
  white: "bg-white border-2 border-black text-black",
};

export default function Button({
  title,
  onClick,
  options,
}: {
  title: string;
  onClick: () => unknown | (() => Promise<unknown>);
  options?: { size?: Size; color?: string };
}) {
  const { size, color } = options ?? {};
  const positions = center.colO(0);
  const sizes = widthSize[size ?? "small"];
  const styles = `${colorSet[color ?? "black"]} font-bold text-xl`;
  return (
    <button onClick={onClick} className={cn(positions, sizes, styles)}>
      {title}
    </button>
  );
}
