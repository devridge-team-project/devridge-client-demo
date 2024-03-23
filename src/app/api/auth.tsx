import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { signUp } from "connection";
import { useSignUpStore } from "shared";
import { useEffect } from "react";

function Auth({ provider }: { provider: string }) {
  const { authToken, setAuthToken } = useSignUpStore();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();
  const { data, isSuccess } = useQuery({
    queryKey: ["auth", code],
    queryFn: () => signUp.auth.token.post(provider, code ?? ""),
  });

  useEffect(() => {
    setAuthToken(data?.tempJwt ?? "");
    console.log(authToken);
    if (isSuccess) {
      navigate("/sign-up/join");
    }
  }, [isSuccess]);
  if (!isSuccess) return <div>loading...</div>;

  return <div>{code ?? "No code"}</div>;
}

function GitHub() {
  return <Auth provider="github" />;
}

function Naver() {
  return <Auth provider="naver" />;
}

function Kakao() {
  return <Auth provider="kakao" />;
}

function Google() {
  return <Auth provider="google" />;
}

const auth = {
  GitHub,
  Naver,
  Kakao,
  Google,
};

export default auth;
