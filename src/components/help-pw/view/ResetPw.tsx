import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { center, col, row } from "style/display";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "connection/api/password";
import Loading from "design/interaction/widget/LoadingSpinner";
import { Button } from "design";
import Input from "../../common/input";

export default function ResetPw() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { email, token: tempJwt },
  } = location;
  const { mutate, isSuccess } = useMutation({
    mutationFn: () => resetPassword(password, email, tempJwt),
  });
  if (isSuccess) {
    alert("비밀번호가 재설정되었습니다.");
    navigate("/");
  }
  const [passwords, setPasswords] = useState({
    password: "",
    passwordCheck: "",
  });
  const { password, passwordCheck } = passwords;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div className="font-bold">비밀번호 재설정</div>
        <div className="mt-5 font-bold">새 비밀번호</div>
        <Input
          className="mt-1 block h-14 w-80 border"
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <Input
          className="mt-1 block h-14 w-80 border"
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          placeholder="비밀번호 확인"
          onChange={onChange}
        />
        <Button title="변경하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
