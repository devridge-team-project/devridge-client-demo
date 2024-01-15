import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import { useWidgetStore } from "shared/store";

export default function Skills() {
  const { setView } = useWidgetStore();
  return (
    <SignUpLayout
      titles={["보유 스킬 입력"]}
      buttons={[["확인", () => setView("personalInformation")]]}
    >
      <div>스킬 입력</div>
    </SignUpLayout>
  );
}
