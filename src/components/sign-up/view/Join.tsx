import { center } from "style/display";
import { JoinViews } from "../controller/Views";
import Modals from "../controller/Modals";

export default function Join() {
  return (
    <>
      <div className={`${center.colO()} min-h-screen `}>
        <JoinViews />
      </div>
      <Modals />
    </>
  );
}
