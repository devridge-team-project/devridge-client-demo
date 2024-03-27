import { getCookie, setCookie, removeCookie } from "util/cookies";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useSignUpStore } from "shared";
import { refresh } from "connection/api/login";
import { useQuery } from "@tanstack/react-query";

export default function useVerifyToken(key: string) {
  const token = getCookie("accessToken") as string;
  const [isValidToken, setIsValidToken] = useState<boolean>(false);
  const { setAuthToken } = useSignUpStore();
  const { data, isSuccess, isError } = useQuery({
    queryKey: ["refresh"],
    queryFn: () => refresh(),
  });

  console.log(token);
  useEffect(() => {
    if (token) {
      const { exp } = jwtDecode(token);
      const timeOutFlag = (exp as number) <= Math.floor(Date.now() / 1000);
      if (timeOutFlag) {
        if (isSuccess) {
          const expiration = new Date(Date.now() + 20 * 60 * 1000);
          removeCookie("accessToken");
          setCookie("accessToken", data?.accessToken, { expires: expiration });
          setAuthToken(data?.accessToken);
          setIsValidToken(true);
        }
        if (isError) {
          console.log(isError);
          setIsValidToken(false);
        }
      }
      setIsValidToken(true);
    } else {
      setIsValidToken(false);
    }
  }, [token, key, setAuthToken]);

  return isValidToken;
}
