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
import { Button } from "design";

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
    <Widgets>
      <div className="w-full bg-image-bubble h-96 bg-cover">
        개발 고민? 플로우에서 물어봐! 개발 관련 질문부터 팀빌딩까지
      </div>
      <div>모든 개발자를 위한 지식 공유 플랫폼 플로우!</div>
      <div>
        <div>스터디 및 사이드 프로젝트 팀원을 구하고 싶을 때</div>
      </div>
      <Button title="ㅎㅇ" onClick={() => {}} />
      <Footer />
    </Widgets>
  );
}
