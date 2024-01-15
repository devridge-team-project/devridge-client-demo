import { useEffect, useState } from "react";
import { useSignUpStore } from "shared/sign-up/store";

export default function usePasswordConfirm() {
  const { password, passwordConfirm, setPassword, setPasswordConfirm } = useSignUpStore();
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    if (password === passwordConfirm) return setConfirm(true);
    return setConfirm(false);
  }, [password, passwordConfirm, setPassword, setPasswordConfirm]);

  return { confirm };
}
