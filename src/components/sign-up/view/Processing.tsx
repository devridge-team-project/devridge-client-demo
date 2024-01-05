import { center, col } from "style/display";
import Agreements from "./processing/Agreements";

export default function Processing() {
  return (
    <div className={`${center.colO()} min-h-screen`}>
      <div className={`${col(5)} w-80 `}>
        <div className="text-3xl font-bold">
          <div className="leading-tight">약관 동의가</div>
          <div>필요해요</div>
        </div>
        <Agreements />
      </div>
      <div />
    </div>
  );
}
