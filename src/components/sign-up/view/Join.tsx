import { cn } from "util/classNames";
import { useSearchParams } from "react-router-dom";
import { Events } from "design";
import { useWidgetStore, useSignUpStore } from "shared";
import UserInformation from "./join/UserInformation";
import Credentials from "./join/Credentials";
import Authentication from "./join/Authentication";
import Agreements from "./join/Agreements";
import { useEffect } from "react";

export default function Join() {
  const { authToken } = useSignUpStore();
  const isToken = authToken !== null;

  const conatiner = {
    positions: "absolute top-0 ",
    displays: "flex flex-col items-center justify-center",
    sizes: "w-full min-h-screen ",
  };

  useEffect(() => {
    console.log(authToken);
  }, []);

  return (
    <div className={cn(conatiner)}>
      <Events.Replace
        exceptions={[
          [isToken || "personalInformation", <UserInformation />],
          ["credentials", <Credentials />],
          ["authentication", <Authentication />],
        ]}
      >
        <Agreements />
      </Events.Replace>
    </div>
  );
}
