import { cn } from "util/classNames";
import { useSearchParams } from "react-router-dom";
import { Events } from "design";
import { useWidgetStore } from "shared";
import UserInformation from "./join/UserInformation";
import Credentials from "./join/Credentials";
import Authentication from "./join/Authentication";
import Agreements from "./join/Agreements";

export default function Join() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const isCode = code !== null;

  const conatiner = {
    positions: "absolute top-0 ",
    displays: "flex flex-col items-center justify-center",
    sizes: "w-full min-h-screen ",
  };

  return (
    <div className={cn(conatiner)}>
      <Events.Replace
        exceptions={[
          [isCode || "personalInformation", <UserInformation />],
          ["credentials", <Credentials />],
          ["authentication", <Authentication />],
        ]}
      >
        <Agreements />
      </Events.Replace>
    </div>
  );
}
