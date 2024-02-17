import { center, col, row } from "style/display";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "shared/auth/store";
import { useSignUpStore } from "shared/sign-up/store";
import { getCookie } from "util/cookies";
import { useEffect } from "react";
import Modals from "../controller/Modals";
import Header from "design/template/Header";
import Footer from "design/template/Footer";
import Widgets from "../controller/Widgets";
import Qna from "./home/Qna";
import Promotions from "./home/Promotions";
import Team from "./home/Team";

export default function Home() {
  const navigate = useNavigate();

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
      <Promotions />
      <Qna />
      <Team />
      <Footer />
    </Widgets>
  );
}
