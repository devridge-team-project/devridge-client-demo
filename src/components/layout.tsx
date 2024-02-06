import Header from "design/layout/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative min-h-screen w-full font-pretendard-medium">
      <Header />
      <Outlet />
    </div>
  );
}
