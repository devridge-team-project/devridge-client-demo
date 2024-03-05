import { cn } from "util/classNames";
export default function Modal({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  const container = {
    positions: "fixed top-0 left-0 z-50",
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen ",
    styles: "bg-black/10 backdrop-blur-sm",
  };
  const body = {
    sizes: "w-80 h-62.5",
    styles: "rounded-2xl bg-white shadow-md shadow-black/50",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className={classNames}>{children}</div>
      </div>
    </div>
  );
}
