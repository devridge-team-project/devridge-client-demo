import Header from "design/template/Header";
import { Outlet } from "react-router-dom";
import SideMenu from "../design/template/SideMenu";

export default function Layout() {
  return (
    <div className="relative min-h-screen w-full font-pretendard-medium overflow-hiddenb pb-36 scrollbar-hide md:scrollbar-default">
      <Header />
      <SideMenu />
      <Outlet />
    </div>
  );
}
