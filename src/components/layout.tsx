import Header from "design/template/Header";
import { useLocation, Outlet } from "react-router-dom";
import useVerifyToken from "hook/useVerifyToken";
import SideMenu from "../design/template/SideMenu";

export default function Layout() {
  const location = useLocation();
  const isAuthenticated = useVerifyToken(location.key);
  return (
    <div className="relative min-h-screen w-full font-pretendard-medium scrollbar-hide ">
      <Header />
      <SideMenu />
      <Outlet context={{ isAuthenticated }} />
    </div>
  );
}
