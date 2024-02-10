import { useEffect } from "react";
import { removeCookie } from "util/cookies";

const SignOut = () => {
  useEffect(() => {
    (async () => {
      removeCookie("accessToken");
      alert("로그아웃 되었습니다.");
      window.location.href = "/";
    })();
  }, []);

  return null;
};

export default SignOut;
