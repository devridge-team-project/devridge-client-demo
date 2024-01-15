import { center } from "style/display";
import { JoinViews } from "../controller/Views";

export default function Join() {
  return (
    <div className={`${center.colO()} min-h-screen `}>
      <JoinViews />
    </div>
  );
}
