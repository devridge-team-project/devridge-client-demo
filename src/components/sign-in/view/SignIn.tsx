import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { center, col, row } from "style/display";
import { contents } from "asset/sign-up/platform";
import { login } from "connection/api/loginService";
import { useAuthStore } from "shared/auth/store";

import Input from "../../common/input";
import Button from "../../common/button";

export default function SignIn() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setAccessToken, setSignInType } = useAuthStore();
  const { email, password } = info;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status, accessToken } = await login({ email, password });
    console.log(status);
    console.log(accessToken);

    if (status === 200) {
      setAccessToken(accessToken);
      setSignInType("GeneralLogin");

      alert("로그인 되었습니다.");
      navigate("/");
    } else if (status === 400) {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    } else if (status === 401) {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
    setInfo({ email: "", password: "" });
  };
  return (
    <div className={`absolute top-0 w-full min-h-screen ${center.colO(0)}`}>
      <form className={`${col(2, 80)} `} onSubmit={onSubmitHandler}>
        <div className="text-2xl font-bold text-blue-600">로그인</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
        />
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <Button className="mt-5 h-14 w-80  bg-black text-white" type="submit">
          로그인
        </Button>
        <div className="mt-2 flex justify-end ">
          <Link to="/help-pw" className=" block  text-xs text-gray-500 ">
            비밀번호 찾기
          </Link>
        </div>
      </form>

      <div className={`mt-10 ${center.colO(0)}`}>다른 계정으로 로그인하기</div>
      <div className={`mx-8 mt-2 ${row(5)}`}>
        {contents.map(({ href, image, title, bgColor, textColor }) => (
          <Link to={href} className={`bg-${bgColor} ${textColor}`} key={title}>
            <img src={`/images/icons/${image}.png`} alt="sign-in" className="h-12 w-12" />
          </Link>
        ))}
      </div>
      <div className={`mx-8 mt-5 ${row(2)}`}>
        <div>아직 계정이 없으신가요?</div>
        <a href="./sign-up" className="text-blue-600">
          가입하러 가기
        </a>
      </div>
    </div>
  );
}
