import { center } from "style/display";
import { ProcessingViews } from "../controller/Views";

export default function Processing() {
  return (
    <div className={`${center.colO()} min-h-screen `}>
      <ProcessingViews />
    </div>
  );
}
