import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { refresh } from "connection/api/login";
import { getCookie, setCookie, removeCookie } from "util/cookies";
import { jwtDecode } from "jwt-decode";

/* function isSignIn() {
  const accessToken = getCookie("accessToken");
  return accessToken ? true : false;
} */

export default function useSignIn() {
  const { exp } = jwtDecode(getCookie("accessToken") as string);
  const {
    data: accessToken,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["refresh"],
    queryFn: () => refresh(),
    enabled: (exp as number) > Date.now(),
  });
  if (isSuccess) {
    removeCookie("accessToken");
    setCookie("accessToken", accessToken);
  }
  if (isError) {
    alert("로그인이 필요합니다.");
    window.location.href = "/sign-in";
  }
}
