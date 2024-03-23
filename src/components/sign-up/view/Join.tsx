import { cn } from "util/classNames";
import { Events } from "design";
import { useSignUpStore, useWidgetStore } from "shared";
import UserInformation from "./join/UserInformation";
import Credentials from "./join/Credentials";
import Authentication from "./join/Authentication";
import Agreements from "./join/Agreements";
import Skills from "./join/Skills";
import { useEffect } from "react";

export default function Join() {
  const { authToken } = useSignUpStore();
  const { setView } = useWidgetStore();
  const isToken = authToken !== "";
  useEffect(() => {
    if (isToken) return setView("skills");
  }, []);
  const conatiner = {
    positions: "absolute top-0 ",
    displays: "flex flex-col items-center justify-center",
    sizes: "w-full min-h-screen ",
  };

  return (
    <div className={cn(conatiner)}>
      <Events.Replace
        exceptions={[
          ["skills", <Skills />],
          ["credentials", <Credentials />],
          ["authentication", <Authentication />],
          ["personalInformation", <UserInformation />],
        ]}
      >
        <Agreements />
      </Events.Replace>
    </div>
  );
}
