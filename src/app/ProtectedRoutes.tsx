import { useEffect } from "react";
import useVerifyToken from "hook/useVerifyToken";
import { useNavigate, Outlet, useOutletContext } from "react-router-dom";

interface IsAuthenticatedProps {
  isAuthenticated: boolean;
}

export default function ProtectedRoutes() {
  const navigate = useNavigate();
  const { isAuthenticated } = useOutletContext<IsAuthenticatedProps>();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  return <Outlet />;
}
