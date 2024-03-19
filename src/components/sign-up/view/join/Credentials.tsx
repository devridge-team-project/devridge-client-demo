import { useMutation } from "@tanstack/react-query";
import { useWidgetStore, useSignUpStore } from "shared";
import { emailVerifications } from "connection";
import { SignUpLayout } from "design";
import usePasswordConfirm from "hook/sign-up/usePasswordConfirm";
import { useEffect } from "react";

export default function Credentials() {
  const { signUpData, setSignUpData } = useSignUpStore();
  const { email, password } = signUpData;
  const { setView } = useWidgetStore();
  const { confirm } = usePasswordConfirm();

  const { mutate, isError, isSuccess } = useMutation({
    mutationKey: ["credentials"],
    mutationFn: () => emailVerifications.post(email),
  });

  useEffect(() => {
    console.log("email: " + email);
  });

  if (isError) alert("이메일 전송에 실패했습니다.");
  if (isSuccess) setView("authentication");

  return (
    <>
      <SignUpLayout
        titles={{ title: "회원가입" }}
        inputs={[{ title: "이메일", state: [email, () => setSignUpData({ email })] }]}
      />
    </>
  );
}
