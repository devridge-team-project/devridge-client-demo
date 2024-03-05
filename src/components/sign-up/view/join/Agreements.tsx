import { checkboxes } from "components/sign-up/controller/checkboxes";
import { SignUpLayout } from "design";
import { AlertModal } from "design";
import { useSignUpStore } from "shared/sign-up/store";

export default function Agreements() {
  const { agreements } = useSignUpStore();
  const agreeNecessary = ["flag1", "flag2"].every((flag) => agreements[flag]);
  return (
    <SignUpLayout
      widgets={{ components: [[agreeNecessary, <AlertModal />]] }}
      titles={{ title: ["약관 동의가", "필요해요"] }}
      checkboxes={checkboxes}
      buttons={[["인증하기", () => {}]]}
    />
  );
}
