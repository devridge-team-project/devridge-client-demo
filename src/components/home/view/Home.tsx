import { center, col, row } from "style/display";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "shared/auth/store";
import { useSignUpStore } from "shared/sign-up/store";
import { authTest, logout } from "api/sign-in/loginService";
import { userInfo } from "api/myInfo/myInfoService";
import { getCookie } from "util/cookies";
import { useEffect } from "react";
import Modals from "../controller/Modals";
import Header from "design/layout/Header";
import Footer from "design/layout/Footer";
import Widgets from "../controller/Widgets";
import LandingQna from "./home/LandingQna";

export default function Home() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, signInType, setSignInType } = useAuthStore();

  // const getUserInfo = async () => {
  //   const { status, data } = await userInfo();
  //   if (status === 200) {
  //     const { id, nickname, imageUrl, introduction, skillIds, occupation } = data;
  //     setNickname(nickname);
  //     setProfileImageUrl(imageUrl);
  //     setOccupation(occupation);
  //     setSkillIds(skillIds);
  //   }
  // };

  // const onAuthTestHandler = async () => {
  //   const status = await authTest();
  //   if (status === 200) {
  //     console.log("인증 잘됨");
  //   } else if (status === 403) {
  //     console.log("리프레쉬토큰 만료");
  //   }
  // };

  // const onLogoutHandler = async () => {
  //   const status = await logout();
  //   if (status) {
  //     alert("로그아웃 됐습니다.");
  //     setAccessToken(null);
  //     setSignInType("");
  //   }
  // };
  // useEffect(() => {
  //   onAuthTestHandler();
  //   getUserInfo();
  // }, []);
  return (
    <div className="pt-20">
      <Widgets>
        <div className="w-full h-96 bg-image-bubble bg-cover text-black">
          <div className="pt-14 pl-6 flex flex-col gap-3">
            <div className="text-2xl font-bold">
              <div>개발 고민?</div>
              <div className="flex">
                <div className="text-blue-500">플로우</div>에서 물어봐!
              </div>
            </div>
            <div>개발 관련 질문부터 팀빌딩까지</div>
          </div>
        </div>
        {/* <LandingQna /> */}
        {/* <Footer /> */}
      </Widgets>
    </div>
  );
}
