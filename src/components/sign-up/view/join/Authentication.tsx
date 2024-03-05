import { useWidgetStore } from "shared/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSignUpStore } from "shared/sign-up/store";
import { codeVerifications } from "connection/api/emailVerifications";
import { Input, SignUpLayout } from "design";
import { useState } from "react";

export default function Authentication() {
  const { signUpData } = useSignUpStore();
  const { email } = signUpData;
  const [code, setCode] = useState<number | undefined>();
  const { setView } = useWidgetStore();

  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: ["authentication"],
    mutationFn: () => codeVerifications.post(email, code),
  });
  if (isError) alert("인증에 실패했습니다.");
  if (isSuccess) setView("skills");

  return (
    <SignUpLayout
      titles={{ title: ["인증하기"], subtitle: ["이메일로 전송된 인증번호를 입력해주세요."] }}
      buttons={[["인증하기", mutate]]}
    />
  );
}
