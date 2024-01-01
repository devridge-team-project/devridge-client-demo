import { useNavigate } from "react-router-dom";
import { useAuthStore } from "shared/auth/store";
import { useEffect } from "react";

export function Kakao() {
  return <div>TODO: Kakao</div>;
}

export function GitHub() {
  const { accessToken, setAccessToken, signInType, setSignInType } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");
      if (code) {
        (async () => {
          const response = await fetch("/auth/callback/github", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          });
          // const accessTokenResponse= await response.json();
        })();
      }
    } catch (error) {
      console.error("Error occurred in GitHub Component", error);
    }
  });

  return <div>TODO: GitHub</div>;
}

export function Google() {
  return <div>TODO: Google</div>;
}
