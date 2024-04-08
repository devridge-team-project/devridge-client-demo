import { useEffect } from "react";
import { useSignUpStore } from "shared/sign-up/store";
import { removeCookie } from "util/cookies";

const SignOut = () => {
  const { setAuthToken } = useSignUpStore();

  useEffect(() => {
    (async () => {
      removeCookie("accessToken");
      setAuthToken("");
      alert("로그아웃 되었습니다.");
      window.location.href = "/";
    })();
  }, []);

  return null;
};

export default SignOut;
