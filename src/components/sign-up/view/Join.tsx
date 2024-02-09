import { center } from "style/display";
import { JoinViews } from "../controller/Views";
import Modals from "../controller/Modals";

export default function Join() {
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <JoinViews />
      <Modals />
    </div>
  );
}
