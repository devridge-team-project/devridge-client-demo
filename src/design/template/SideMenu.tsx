import { useQuery } from "@tanstack/react-query";
import { navigations } from "asset/navigation";
import { profiles } from "asset/test/profiles";
import { users } from "connection";
import { Button } from "design";
import useNavigation from "hook/useNavigation";
import { useWidgetStore } from "shared/store";
import { col } from "style";
import { cn } from "util/classNames";
import { getCookie } from "util/cookies";
import randomItem from "util/randomItem";

export default function SideMenu() {
  const { events, removeView, clearView } = useWidgetStore();
  const isOpen = events.some(({ event }) => event === "sideMenu");
  const navigate = useNavigation();
  const { data: userDetails } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => users.getDetails(),
    enabled: !!getCookie("accessToken"),
  });
  const { nickname, occupation } = userDetails ?? {};

  const positions = "fixed top-0 right-0";
  const animations = "duration-500";
  const moves = () => {
    if (isOpen) return "w-full opacity-100  z-50";
    return "w-0 opacity-0 ";
  };

  const navigationStyles = [
    isOpen ? "cursor-pointer" : "cursor-default",
    "flex items-center gap-4",
  ].join(" ");
  console.log(userDetails);

  return (
    <div className={cn(positions, animations, moves())}>
      <div className="min-h-screen bg-white relative flex items-center justify-center">
        <img
          onClick={() => removeView("sideMenu")}
          src="/images/icons/close.svg"
          alt="close"
          className="absolute top-7 right-6 w-7 h-7 cursor-pointer"
        />
        <div className="flex flex-col gap-12">
          {userDetails && (
            <div className="w-80 h-70 border-2 border-blue-500 rounded-xl flex flex-col items-center justify-center gap-2">
              <img
                src={`/images/test/${randomItem(profiles)}.png`}
                alt="profile"
                className="w-25 h-25 rounded-full border overflow-hidden object-cover"
              />
              <div className="text-2xl font-bold pt-4">{nickname}</div>
              <div className="font-bold px-4 h-8 flex text-sm justify-center items-center rounded-md bg-blue-500/30 text-blue-500">
                {occupation}
              </div>
            </div>
          )}
          <div className={col(7)}>
            {navigations
              .filter((navigation) => !navigation.isSignIn || (navigation.isSignIn && userDetails))
              .map(({ name, href, icon }) => (
                <div
                  key={href}
                  onClick={() => isOpen && navigate(href, clearView)}
                  className={navigationStyles}
                >
                  <img src={`/images/icons/${icon}`} alt={icon} className="w-6 h-6" />
                  <div className="text-2xl">{name}</div>
                </div>
              ))}
          </div>
          {!userDetails ? (
            <div className={col(4)}>
              <Button
                title="로그인 하러가기"
                onClick={() => isOpen && navigate("/sign-in", clearView)}
                options={{ size: "lg" }}
                freeze={!isOpen}
              />
              <div className="flex justify-center items-center gap-4 text-sm font-bold">
                <div>아직 계정이 없으신가요?</div>
                <button
                  onClick={() => navigate("sign-up", clearView)}
                  className={!isOpen ? "cursor-default" : "" + " text-blue-500"}
                >
                  가입하러 가기{">"}
                </button>
              </div>
            </div>
          ) : (
            <div className="font-bold flex justify-center mt-20">
              © 2024 DEVRIDGE, All rights reserved.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
