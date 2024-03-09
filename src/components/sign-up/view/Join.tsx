import { cn } from "util/classNames";
import { useSearchParams } from "react-router-dom";
import { Events } from "design";
import { useWidgetStore } from "shared";
import PersonalInformation from "./join/PersonalInformation";
import Credentials from "./join/Credentials";
import Authentication from "./join/Authentication";
import Agreements from "./join/Agreements";

export default function Join() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  const conatiner = {
    positions: "absolute top-0 ",
    displays: "flex flex-col items-center justify-center",
    sizes: "w-full min-h-screen ",
  };

  return (
    <div className={cn(conatiner)}>
      <Events.Replace
        exceptions={[
          [code || "personalInformation", <PersonalInformation />],
          ["credentials", <Credentials />],
          ["authentication", <Authentication />],
        ]}
      >
        <Agreements />
      </Events.Replace>
    </div>
  );
}
