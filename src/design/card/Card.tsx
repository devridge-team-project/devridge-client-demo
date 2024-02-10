import { Size } from "interface/Size";
import { cn } from "util/classNames";

const widthSize: Record<Size, string> = {
  small: "w-50 h-12",
  medium: "w-120 h-24",
  large: "w-80 h-15",
  full: "w-full h-15",
};

export default function Card({
  onClick,
  options,
  children,
}: {
  onClick?: () => unknown | (() => Promise<unknown>);
  options?: {
    size?: Size;
  };
  children: React.ReactNode;
}) {
  const { size } = options ?? {};
  const displays = "flex flex-col justify-between";
  const paddings = "p-2";
  const styles = `${onClick ? "cursor-pointer" : ""} border-2 shadow-md rounded-lg`;

  return (
    <div onClick={onClick} className={cn(displays, widthSize[size ?? "medium"], paddings, styles)}>
      {children}
    </div>
  );
}
