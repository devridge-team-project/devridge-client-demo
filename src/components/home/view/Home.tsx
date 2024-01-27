import Template from "design/Template";
import { center, col, row } from "style/display";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "shared/auth/store";
import { useSignUpStore } from "shared/sign-up/store";
import { authTest, logout } from "api/sign-in/loginService";
import { getCookie } from "util/cookies";
import { useEffect } from "react";
import Button from "../../common/button";
import Modals from "../controller/Modals";

export default function Home() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, signInType, setSignInType } = useAuthStore();
  const { nickname, profileImageUrl } = useSignUpStore();
  console.log(accessToken, signInType);

  const onAuthTestHandler = async () => {
    const status = await authTest();
    if (status === 200) {
      console.log("인증 잘됨");
    } else if (status === 403) {
      console.log("리프레쉬토큰 만료");
    }
  };

  const onLogoutHandler = async () => {
    const status = await logout();
    if (status) {
      alert("로그아웃 됐습니다.");
      setAccessToken(null);
      setSignInType("");
    }
  };
  useEffect(() => {
    onAuthTestHandler();
  }, []);
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      {getCookie("accessToken") && (
        <>
          <img src={profileImageUrl} alt="profileImage" />
          <div>{nickname}</div>
        </>
      )}
      {getCookie("accessToken") && (
        <div className={`mt-7.5 w-80 ${row(2)}`}>
          <img src="/images/mypage.png" alt="mypage" />
          <Link to="/mypage">마이페이지</Link>
        </div>
      )}
      <div className={`mt-7.5 w-80 ${row(2)}`}>
        <img src="/images/q&a.png" alt="q&a" />
        <Link to="/qna">Q&A</Link>
      </div>
      <div className={`mt-7.5 w-80 ${row(2)}`}>
        <img src="/images/study&project.png" alt="study&project" />
        <Link to="/study&projects">스터디 및 프로젝트</Link>
      </div>
      <div className={` mt-7.5 w-80 ${row(2)}`}>
        <img src="/images/notice.png" alt="notice" />
        <Link to="/notify">공지사항</Link>
      </div>
      {getCookie("accessToken") ? (
        <div className={`mt-7.5 w-80 ${row(2)}`}>
          <img src="/images/logout.png" alt="logout" />
          <Link to="/" onClick={onLogoutHandler}>
            로그아웃
          </Link>
        </div>
      ) : (
        <>
          <Button
            className="mt-12.5 block h-14 w-80  bg-black text-white"
            onClick={() => navigate("/sign-in")}
            type="button"
          >
            로그인 하러가기
          </Button>
          <Button
            className="mt-5 block h-14 w-80 border border-solid border-black bg-white text-black"
            onClick={() => navigate("/sign-up")}
            type="button"
          >
            회원가입
          </Button>
        </>
      )}
      <Modals />
    </div>
  );
}
