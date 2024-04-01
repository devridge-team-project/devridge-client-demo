import { setCookie } from "util/cookies";
import { useState, useLayoutEffect, useRef } from "react";
import { jwtDecode } from "jwt-decode";
import { useSignUpStore } from "shared";
import { refresh } from "connection/api/login";
import { useQuery } from "@tanstack/react-query";

export default function useVerifyToken(key: string) {
  const isValidRef = useRef<boolean>(false);
  const { authToken, setAuthToken } = useSignUpStore();

  const timeOutFlag = !!(
    authToken && (jwtDecode(authToken).exp as number) <= Math.floor(Date.now() / 1000)
  );
  const { data, isSuccess, isError } = useQuery({
    queryKey: ["refresh"],
    queryFn: () => refresh(),
    enabled: !!authToken,
  });
  console.log(data, timeOutFlag);

  if (authToken) {
    if (timeOutFlag) {
      if (isSuccess) {
        const expiration = new Date(Date.now() + 12 * 60 * 60 * 1000);
        setCookie("accessToken", data?.accessToken, { expires: expiration });
        setAuthToken(data?.accessToken);
        isValidRef.current = true;
      } else if (isError) {
        console.log(isError);
      }
    } else {
      console.log("타임아웃이 안됬어요");
      isValidRef.current = true;
    }
  }

  console.log(isValidRef);

  return isValidRef.current;
}
