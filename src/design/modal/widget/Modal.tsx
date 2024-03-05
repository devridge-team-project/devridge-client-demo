import { cn } from "util/classNames";
export default function Modal({ children }: { children: React.ReactNode }) {
  const container = {
    positions: "fixed top-0 left-0 z-50",
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen ",
    styles: "bg-black/10 backdrop-blur-sm",
  };
  return <div className={cn(container)}>{children}</div>;
}
