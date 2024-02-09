import { useWidgetsStore } from "shared/store";
import { cn } from "util/classNames";

export default function Header() {
  const { setWidget } = useWidgetsStore();
  const positions = "flex justify-end items-center";
  const displays = "fixed top-0 left-0 z-50";
  const sizes = "w-full h-20";
  const paddings = "pr-6";
  const styles = "bg-white";
  return (
    <>
      <div className={cn(sizes, displays, styles, positions, paddings)}>
        <button onClick={() => setWidget("sideMenu")}>
          <img src="/images/icons/hamburger-bar.svg" alt="hamburger-bar" className="size-7" />
        </button>
      </div>
      <div className={cn(sizes)} />
    </>
  );
}
