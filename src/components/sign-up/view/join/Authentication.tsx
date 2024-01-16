import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import { useWidgetStore } from "shared/store";

export default function Authentication() {
  const { setView } = useWidgetStore();
  return (
    <SignUpLayout
      titles={["인증하기"]}
      subTitles={["이메일로 전송된 숫자 4자리를", "아래에 입력해주세요."]}
      buttons={[["인증하기", () => setView("skills")]]}
    >
      <div>ㅎㅇㅎㅇ</div>
    </SignUpLayout>
  );
}
