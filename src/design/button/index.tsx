import { center } from "style/display";
import { cn } from "util/classNames";
type Size = "small" | "medium" | "large";

const widthSize: Record<Size, string> = {
  small: "w-50 h-12 rounded-full",
  medium: "w-72 h-12 rounded-full",
  large: "w-80 h-15 rounded-ms",
};
export default function Button({
  title,
  onClick,
  options,
}: {
  title: string;
  onClick: () => unknown | (() => Promise<unknown>);
  options?: { size?: Size };
}) {
  const { size } = options ?? {};
  const positions = center.colO(0);
  const sizes = widthSize[size ?? "small"];
  const styles = "bg-black text-white";
  return (
    <button onClick={onClick} className={cn(positions, sizes, styles)}>
      {title}
    </button>
  );
}
