import { center } from "style/display";
import Agreements from "./join/Agreements";
import { useSearchParams } from "react-router-dom";
import { Events } from "design";

export default function Join() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  return (
    <div className={`absolute top-0 w-full min-h-screen ${center.colO(0)}`}>
      <Events.Replace exceptions={[[code, <div>gd</div>]]}>
        <Agreements />
      </Events.Replace>
    </div>
  );
}
