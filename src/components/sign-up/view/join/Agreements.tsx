import { checkboxes } from "components/sign-up/controller/checkboxes";
import { SignUpLayout } from "design";

export default function Agreements() {
  return (
    <SignUpLayout
      titles={{ title: ["약관 동의가", "필요해요"] }}
      checkboxes={checkboxes}
      buttons={[["인증하기", () => {}]]}
    />
  );
}
