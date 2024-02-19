import SignUpLayout from "design/template/SignUpLayout";
import { useWidgetStore } from "shared/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSignUpStore } from "shared/sign-up/store";
import { codeVerifications } from "connection/api/emailVerifications";
import { Input } from "design";
import { useState } from "react";

export default function Authentication() {
  const { email } = useSignUpStore();
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
      titles={["인증하기"]}
      subTitles={["이메일로 전송된 숫자 4자리를", "아래에 입력해주세요."]}
      buttons={[["인증하기", mutate]]}
    >
      <Input onChange={[code, setCode]} />
    </SignUpLayout>
  );
}
