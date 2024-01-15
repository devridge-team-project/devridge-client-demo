import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import { useWidgetStore } from "shared/store";

export default function Authentication() {
  const { setView } = useWidgetStore();
  return (
    <SignUpLayout titles={["인증하기"]} buttons={[["인증하기", () => setView("skills")]]}>
      <div>ㅎㅇㅎㅇ</div>
    </SignUpLayout>
  );
}
