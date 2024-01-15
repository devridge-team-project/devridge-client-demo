import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import Button from "design/widget/Button";
import { useSignUpStore } from "shared/sign-up/store";

export default function Inputs() {
  const { email, password, passwordConfirm } = useSignUpStore();
  return (
    <SignUpLayout titles={["회원가입"]}>
      <div>
        <div>이메일</div>
        <Input value={email} placeholder="이메일을 입력해주세요." />
      </div>
      <div>
        <div>비밀번호</div>
        <Input value={password} placeholder="영문자, 숫자 포함 최소 8자" />
        <Input value={passwordConfirm} placeholder="비밀번호를 확인해주세요." />
      </div>
      <Button title="인증하기" onClick={() => {}} />
    </SignUpLayout>
  );
}

function Input({ value, placeholder }: { value: string; placeholder?: string }) {
  return (
    <input
      className="w-full rounded-md border-2 p-4 focus:outline-blue-500"
      value={value}
      placeholder={placeholder ?? ""}
      type="text"
    />
  );
}
