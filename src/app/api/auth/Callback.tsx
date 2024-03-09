import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "shared/auth/store";
import { useEffect } from "react";

export function Kakao() {
  return <div>TODO: Kakao</div>;
}

export function GitHub() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  useEffect(() => {
    console.log(code);
  });

  return <div>TODO: GitHub</div>;
}

export function Google() {
  return <div>TODO: Google</div>;
}

const Callback = {
  GitHub,
  Kakao,
};

export default Callback;
