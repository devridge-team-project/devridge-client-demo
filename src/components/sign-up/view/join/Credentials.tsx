import { useSignUpStore } from "shared/sign-up/store";
import SignUpLayout from "design/template/SignUpLayout";
import Input from "design/input/Input";
import usePasswordConfirm from "hook/sign-up/usePasswordConfirm";
import { useWidgetStore } from "shared/store";
import { useMutation } from "@tanstack/react-query";
import { emailVerifications } from "connection";

export default function Credentials() {
  const { signUpData, setSignUpData } = useSignUpStore();
  const { email } = signUpData;
  const { setView } = useWidgetStore();
  const { confirm } = usePasswordConfirm();

  const { mutate, isError, isSuccess } = useMutation({
    mutationKey: ["credentials"],
    mutationFn: () => emailVerifications.post(email),
  });

  if (isError) alert("이메일 전송에 실패했습니다.");
  if (isSuccess) setView("authentication");

  return (
    <SignUpLayout titles={["회원가입"]} buttons={[["인증하기", mutate]]}>
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
        <div className="text-end">{confirm ? "" : "비밀번호가 일치하지 않습니다."}</div>
      </div>
    </SignUpLayout>
  );
}
