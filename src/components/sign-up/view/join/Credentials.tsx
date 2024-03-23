import { useMutation } from "@tanstack/react-query";
import { useWidgetStore, useSignUpStore } from "shared";
import { emailVerifications } from "connection";
import { AlertModal, SignUpLayout } from "design";
import usePasswordConfirm from "hook/sign-up/usePasswordConfirm";
import { useEffect, useState } from "react";
import LoadingText from "design/interaction/widget/LoadingText";

export default function Credentials() {
  const { setSignUpData } = useSignUpStore();
  const { setView, removeView, setModal } = useWidgetStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["credentials"],
    mutationFn: () => emailVerifications.post(email),
  });

  useEffect(() => {
    setSignUpData({ email, password });
  }, [email]);
  useEffect(() => {
    if (isError) return setModal("failed");
    if (isSuccess) {
      removeView("credentials");
      return setView("authentication");
    }
  }, [isSuccess, isError]);

  const necessary = email !== "" && password !== "" && passwordConfirm !== "";

  const handleButtonClick = () => {
    if (necessary) return mutate();
    return setModal("notNecessary");
  };

  return (
    <SignUpLayout
      widgets={{
        components: [
          ["notNecessary", <AlertModal script="그러지 말아다오" />],
          ["failed", <AlertModal script="유효하지 않은 이메일입니다." />],
          [isPending, <LoadingText />],
        ],
      }}
      titles={{ title: "회원가입" }}
      inputs={[
        { title: "이메일", state: [email, setEmail] },
        { title: "비밀번호", state: [password, setPassword] },
        { title: null, state: [passwordConfirm, setPasswordConfirm] },
      ]}
      buttons={[["확인", handleButtonClick]]}
    />
  );
}
