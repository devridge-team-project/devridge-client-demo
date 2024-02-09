import { center, col, row } from "style/display";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { codeCheck } from "connection/api/loginService";
import Input from "components/common/input";
import Button from "../../common/button";

export default function EmailAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { email },
  } = location;
  const [code, setCode] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCode(value);
  };
  const onAuthCode = async () => {
    const status = await codeCheck({ email, code });
    if (status === 200) {
      alert("이메일 인증 되었습니다.");
      navigate("/");
    } else if (status === 400) {
      alert("인증번호가 틀립니다.");
    }
  };
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div>인증하기</div>
      <Input
        className="mt-2.5 block h-14 w-80 border"
        type="password"
        name="password"
        value={code}
        placeholder="인증번호를 입력해주세요"
        onChange={onChange}
      />
      <Button
        className="mt-12.5 block h-14 w-80  bg-black text-white"
        type="button"
        onClick={onAuthCode}
      >
        인증하기
      </Button>
    </div>
  );
}
