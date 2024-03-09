import { useSignUpStore } from "shared/sign-up/store";
import usePasswordConfirm from "hook/sign-up/usePasswordConfirm";
import { useWidgetStore } from "shared/store";
import { useMutation } from "@tanstack/react-query";
import { emailVerifications } from "connection";
import { SignUpLayout } from "design";

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

  return <SignUpLayout titles={{ title: "회원가입" }} />;
}
