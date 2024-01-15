import { useSignUpStore } from "shared/sign-up/store";
import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import Button from "design/widget/Button";
import Input from "design/widget/Input";

export default function Inputs() {
  const { email, password, passwordConfirm, setEmail, setPassword, setPasswordConfirm } =
    useSignUpStore();
  return (
    <SignUpLayout titles={["회원가입"]}>
      <div>
        <div>이메일</div>
        <Input onChange={[email, setEmail]} placeholder="이메일을 입력해주세요." />
      </div>
      <div>
        <div>비밀번호</div>
        <Input onChange={[password, setPassword]} placeholder="영문자, 숫자 포함 최소 8자" />
        <Input
          onChange={[passwordConfirm, setPasswordConfirm]}
          placeholder="비밀번호를 확인해주세요."
        />
      </div>
      <Button title="인증하기" onClick={() => {}} />
    </SignUpLayout>
  );
}
