import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { refresh } from "connection/api/login";
import { getCookie, setCookie } from "util/cookies";

/* function isSignIn() {
  const accessToken = getCookie("accessToken");
  return accessToken ? true : false;
} */

export default function useSignIn() {
  const {
    data: accessToken,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["refresh"],
    queryFn: () => refresh(),
    enabled: !getCookie("accessToken"),
  });
  if (isSuccess) {
    const expiration = new Date(Date.now() + 15 * 60 * 1000);
    setCookie("accessToken", accessToken, { expires: expiration });
  }
  if (isError) {
    alert("로그인이 필요합니다.");
    window.location.href = "/sign-in";
  }
}
