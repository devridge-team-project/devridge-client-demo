import { center } from "style/display";
import Agreements from "./join/Agreements";

export default function Join() {
  return (
    <div className={`absolute top-0 w-full min-h-screen ${center.colO(0)}`}>
      {/* <JoinViews /> */}
      <Agreements />
    </div>
  );
}
