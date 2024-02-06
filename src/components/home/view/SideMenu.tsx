import { Link } from "react-router-dom";
import { useWidgetsStore } from "shared/store";
import { cn } from "util/classNames";

export default function SideMenu() {
  const { widgets, removeWidget } = useWidgetsStore();

  const positions = "absolute top-0";
  const animations = "duration-1000";
  const moves = () => {
    if (widgets.includes("sideMenu")) return "left-0";
    return "left-800";
  };
  const styles = "min-h-screen w-full bg-white";

  return (
    <div className={cn(positions, animations, styles, moves())}>
      <div className="w-full h-full relative">
        <img
          onClick={() => removeWidget("sideMenu")}
          src="/images/icons/close.svg"
          alt="close"
          className="absolute top-4 right-4 size-7"
        />
        {menus.map(({ name, href, icon }) => (
          <Link key={href} to={href}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const menus = [
  {
    name: "Q&A",
    href: "/qna",
    icon: "circle-and-square.svg",
  },
  {
    name: "스터디 및 프로젝트",
    href: "/study",
    icon: "writing.svg",
  },
  {
    name: "공지사항",
    href: "notice",
    icon: "notice.svg",
  },
];
