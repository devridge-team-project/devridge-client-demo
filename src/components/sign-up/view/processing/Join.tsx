import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import Button from "design/widget/Button";

export default function Join() {
  return (
    <SignUpLayout titles={["회원가입"]}>
      <div>
        <div>이메일</div>
        <Input placeholder="이메일을 입력해주세요." />
      </div>
      <div>
        <div>비밀번호</div>
        <Input placeholder="영문자, 숫자 포함 최소 8자" />
        <Input placeholder="비밀번호를 확인해주세요." />
      </div>
      <Button title="인증하기" onClick={() => {}} />
    </SignUpLayout>
  );
}

function Input({ placeholder }: { placeholder?: string }) {
  return (
    <input
      className="w-full rounded-md border-2 p-4 focus:outline-blue-500"
      placeholder={placeholder ?? ""}
    />
  );
}
