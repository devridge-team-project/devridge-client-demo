import { checkboxes } from "components/sign-up/static/agreements";
import { SignUpLayout, AlertModal } from "design";
import { useSignUpStore, useWidgetStore } from "shared";
import { modal } from "../../static/modal";

export default function Agreements() {
  const { agreements } = useSignUpStore();
  const { setView, setModal } = useWidgetStore();
  const necessary = ["flag1", "flag2"].every((flag) => agreements[flag]);
  return (
    <SignUpLayout
      widgets={{ components: [["necessary", <AlertModal script={modal.necessary} />]] }}
      titles={{ title: ["약관 동의가", "필요해요"] }}
      checkboxes={checkboxes}
      buttons={[
        [
          "인증하기",
          () => {
            if (!necessary) return setModal("necessary");
            return setView("credentials");
          },
        ],
      ]}
    />
  );
}
