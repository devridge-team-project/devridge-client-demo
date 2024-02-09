import { Button } from "design";
import useNavigation from "hook/useNavigation";
import { Link } from "react-router-dom";
import { useWidgetsStore } from "shared/store";
import { col } from "style";
import { cn } from "util/classNames";

export default function SideMenu() {
  const { widgets, removeWidget, clearWidget } = useWidgetsStore();

  const positions = "fixed top-0 right-0 z-50";
  const animations = "duration-500";
  const moves = () => {
    if (widgets.includes("sideMenu")) return "w-full opacity-100";
    return "w-0 opacity-0";
  };
  const navigate = useNavigation();
  return (
    <div className={cn(positions, animations, moves())}>
      <div className="min-h-screen bg-white relative flex items-center justify-center">
        <img
          onClick={() => removeWidget("sideMenu")}
          src="/images/icons/close.svg"
          alt="close"
          className="absolute top-4 right-4 size-7 cursor-pointer"
        />
        <div className="flex flex-col gap-12">
          <div className={col(7)}>
            {menus.map(({ name, href, icon }) => (
              <button
                key={href}
                onClick={() => navigate(href, clearWidget)}
                className="flex items-center gap-4"
              >
                <img src={`/images/icons/${icon}`} alt={icon} className="size-6" />
                <div className="text-2xl">{name}</div>
              </button>
            ))}
          </div>
          <div className={col(2)}>
            <Button
              title="로그인 하러가기"
              onClick={() => {
                navigate("/sign-in", clearWidget);
              }}
              options={{ size: "large" }}
            />
            <Button
              title="회원가입"
              onClick={() => {
                navigate("/sign-up", clearWidget);
              }}
              options={{ size: "large", color: "white" }}
            />
          </div>
        </div>
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
    href: "/notice",
    icon: "notice.svg",
  },
];
