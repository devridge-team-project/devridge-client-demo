import { useEffect, useState } from "react";
import { useSignUpStore } from "shared/sign-up/store";

export default function usePasswordConfirm() {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    if (password === passwordConfirm) return setConfirm(true);
    return setConfirm(false);
  }, [password, passwordConfirm, setPassword, setPasswordConfirm]);

  return { confirm };
}
