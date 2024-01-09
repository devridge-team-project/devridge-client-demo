import { useWidgetStore } from "shared/store";
import Agreements from "../view/processing/Agreements";
import Join from "../view/processing/Join";
import Authentication from "../view/processing/Authentication";
import Skills from "../view/processing/Skills";
import PersonalInformation from "../view/processing/PersonalInformation";

export function ProcessingViews() {
  const { nowView } = useWidgetStore();
  if (nowView === "join") return <Join />;
  if (nowView === "authentication") return <Authentication />;
  if (nowView === "skills") return <Skills />;
  if (nowView === "personalInformation") return <PersonalInformation />;

  return <Agreements />;
}
