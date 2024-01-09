import { center } from "style/display";
import Agreements from "./processing/Agreements";

export default function Processing() {
  return (
    <div className={`${center.colO()} min-h-screen `}>
      <Agreements />
    </div>
  );
}
