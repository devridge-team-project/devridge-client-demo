import SignUpLayout from "design/layout/sign-up/SignUpLayout";

export default function PersonalInformation() {
  return (
    <SignUpLayout titles={["개인정보 입력"]} buttons={[["다음", () => {}]]}>
      <div />
    </SignUpLayout>
  );
}
