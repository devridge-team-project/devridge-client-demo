import { cn } from "util/classNames";
import { Events } from "design";
import { useSignUpStore } from "shared";
import UserInformation from "./join/UserInformation";
import Credentials from "./join/Credentials";
import Authentication from "./join/Authentication";
import Agreements from "./join/Agreements";
import Skills from "./join/Skills";

export default function Join() {
  const { authToken } = useSignUpStore();
  const isToken = authToken !== "";

  const conatiner = {
    positions: "absolute top-0 ",
    displays: "flex flex-col items-center justify-center",
    sizes: "w-full min-h-screen ",
  };

  return (
    <div className={cn(conatiner)}>
      <Events.Replace
        exceptions={[
          [isToken || "personalInformation", <UserInformation />],
          ["credentials", <Credentials />],
          ["authentication", <Authentication />],
          ["skills", <Skills />],
        ]}
      >
        <Agreements />
      </Events.Replace>
    </div>
  );
}
