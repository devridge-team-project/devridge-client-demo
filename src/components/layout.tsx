import Header from "design/template/Header";
import { Outlet } from "react-router-dom";
import SideMenu from "./home/view/SideMenu";

export default function Layout() {
  return (
    <div className="relative min-h-screen w-full font-pretendard-medium overflow-hidden">
      <Header />
      <SideMenu />
      <Outlet />
    </div>
  );
}
