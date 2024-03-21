import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { center } from "style/display";
export default function CoffeeChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${center.colO(0)}`}>
      <div className="w-[390px] ">
        <nav className="h-[63px] flex items-center justify-end border-y border-gray-200">
          <NavLink to="/coffeechat" className="mr-5">
            메세지
          </NavLink>
          <NavLink to="/coffeechat/res" className="mr-5">
            받은 요청
          </NavLink>
          <NavLink to="/coffeechat/req" className="mr-[33px]">
            보낸 요청
          </NavLink>
        </nav>
        {children}
      </div>
    </div>
  );
}
