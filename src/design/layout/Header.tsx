import { cn } from "util/classNames";

export default function Header() {
  const positions = "flex justify-end items-center";
  const sizes = "w-full h-24";
  const paddings = "pr-6";
  const styles = "bg-white";
  return (
    <div className={cn(sizes, styles, positions, paddings)}>
      <img src="/images/icons/hamburger-bar.svg" alt="hamburger-bar" className="size-7" />
    </div>
  );
}
