import { useWidgetStore } from "shared/store";
import { useMutation } from "@tanstack/react-query";
import { useSignUpStore } from "shared/sign-up/store";
import { codeVerifications } from "connection/api/emailVerifications";
import { SignUpLayout } from "design";
import { useEffect, useState } from "react";

export default function Authentication() {
  const { signUpData } = useSignUpStore();
  const { email } = signUpData;
  const [code, setCode] = useState<string>("");
  const { setView, removeView } = useWidgetStore();

  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: ["authentication"],
    mutationFn: () => codeVerifications.post(email, parseInt(code)),
  });
  useEffect(() => {
    if (isError) return;
    if (isSuccess) {
      removeView("authentication");
      return setView("skills");
    }
  }, [isSuccess, isError]);

  return (
    <SignUpLayout
      titles={{ title: ["인증하기"], subtitle: ["이메일로 전송된 인증번호를 입력해주세요."] }}
      inputs={[{ title: "인증번호", state: [code, setCode] }]}
      buttons={[["인증하기", mutate]]}
    />
  );
}
