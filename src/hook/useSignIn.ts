import { useEffect } from "react";
import { getCookie } from "util/cookies";

function isSignIn() {
  const accessToken = getCookie("accessToken");
  return accessToken ? true : false;
}

export default function useSignIn() {
  useEffect(() => {
    if (!isSignIn()) {
      alert("로그인이 필요합니다.");
      window.location.href = "/sign-in";
    }
  }, []);
}
