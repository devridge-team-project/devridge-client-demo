import { FormEvent, useState } from "react";
import { center, col, row } from "style/display";
import { emailAuth } from "api/sign-in/loginService";
import { useNavigate } from "react-router-dom";
import Input from "../../common/input";
import Button from "../../common/button";

export default function HelpPw() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = await emailAuth({ email });
    if (status === 200) {
      navigate("/help-pw/email-auth", { state: { email } });
    }
  };
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <form className={`${col(2, 80)}`} onSubmit={onSubmitHandler}>
        <div className="text-2xl font-bold">비밀번호 찾기</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
        />
        <Button className="mt-5 h-14 w-80  bg-black text-white" type="submit">
          비밀번호 재설정 이메일 인증번호 받기
        </Button>
      </form>
    </div>
  );
}
