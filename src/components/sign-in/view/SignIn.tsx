import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { center, col, row } from "style/display";
import { contents } from "../static/platform";
import { useMutation } from "@tanstack/react-query";
import { login } from "connection/api/login";
import { setCookie } from "util/cookies";
import { useSignUpStore } from "shared/sign-up/store";
import Input from "../../common/input";
import { Button } from "design";

export default function SignIn() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // const { authToken, setAuthToken } = useSignUpStore();
  const { email, password } = info;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const { data, mutate, isSuccess, isError } = useMutation({
    mutationFn: () => login({ email, password }),
  });
  if (isSuccess && data) {
    console.log(data);
    const expiration = new Date(Date.now() + 20 * 60 * 1000);
    // setAuthToken(data.accessToken);
    setCookie("accessToken", data.accessToken, { expires: expiration });
    alert("로그인 되었습니다.");
    navigate("/");
  } else if (isError) {
    alert("이메일 또는 비밀번호가 틀렸습니다.");
  }
  // console.log(authToken);

  return (
    <div className={`absolute top-0 w-full min-h-screen ${center.colO(0)}`}>
      <div className={`${col(2, 80)} `}>
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
        <Button title="로그인" onClick={mutate} options={{ size: "full" }} />

        <div className="mt-2 flex justify-end ">
          <Link to="/help-pw" className=" block  text-xs text-gray-500 ">
            비밀번호 찾기
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 text-sm text-gray-500 font-bold">
        <div>다른 계정으로 로그인하기</div>
        <div className={`mx-8 mt-2 ${row(5)}`}>
          {contents.map(({ href, image, title, bgColor, textColor }) => (
            <Link to={href} className={`bg-${bgColor} ${textColor}`} key={title}>
              <img src={`/images/icons/${image}.png`} alt="sign-in" className="h-12 w-12" />
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>아직 계정이 없으신가요?</div>
          <Link to="/sign-up" className="text-blue-500">
            가입하러 가기{">"}
          </Link>
        </div>
      </div>
    </div>
  );
}
