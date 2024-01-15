import { useWidgetStore } from "shared/store";
import Agreements from "../view/join/Agreements";
import Inputs from "../view/join/Inputs";
import Authentication from "../view/join/Authentication";
import Skills from "../view/join/Skills";
import PersonalInformation from "../view/join/PersonalInformation";

export function JoinViews() {
  const { nowView } = useWidgetStore();
  if (nowView === "inputs") return <Inputs />;
  if (nowView === "authentication") return <Authentication />;
  if (nowView === "skills") return <Skills />;
  if (nowView === "personalInformation") return <PersonalInformation />;

  return <Agreements />;
}
