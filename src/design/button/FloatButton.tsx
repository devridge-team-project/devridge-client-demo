import { cn } from "util/classNames";

export default function FloatButton({
  icon,
  onClick,
}: {
  icon: string;
  onClick: () => unknown | (() => Promise<unknown>);
}) {
  const container = {
    positions: "fixed bottom-8 right-8 z-40",
    displays: "flex justify-center items-center",
    sizes: "w-24 h-24",
    styles: "bg-black text-white rounded-full cursor-pointer",
  };
  return (
    <div className={cn(container)} onClick={onClick}>
      <img src={icon} alt="float button" />
    </div>
  );
}
