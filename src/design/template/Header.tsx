import { useWidgetsStore } from "shared/store";
import cn from "util/classNames";
import useNavigation from "hook/useNavigation";

export default function Header() {
  const { setWidget, clearWidget } = useWidgetsStore();
  const navigate = useNavigation();

  const positions = "flex justify-between items-center";
  const displays = "fixed top-0 left-0 z-40";
  const sizes = "w-full h-20";
  const paddings = "px-6";
  const styles = "bg-white";
  return (
    <>
      <div className={cn(sizes, displays, styles, positions, paddings)}>
        <button onClick={() => navigate("/", clearWidget)}>
          <img src="/images/icons/devridge-logo.svg" alt="DEVRIDGE" className="w-28 h-5" />
        </button>
        <button onClick={() => setWidget("sideMenu")}>
          <img src="/images/icons/hamburger-bar.svg" alt="hamburger-bar" className="w-7 h-7" />
        </button>
      </div>
      <div className={cn(sizes)} />
    </>
  );
}
