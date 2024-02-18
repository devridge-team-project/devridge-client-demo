import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { center, col, row } from "style/display";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "connection/api/password";
import { Button } from "design";
import Input from "../../common/input";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationFn: () => changePassword(newPassword),
  });
  if (isSuccess) {
    alert("비밀번호가 변경되었습니다.");
  }
  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    newPasswordCheck: "",
  });
  const { password, newPassword, newPasswordCheck } = passwords;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div className="font-bold">비밀번호 변경</div>
        <div className="mt-5 font-bold">기존 비밀번호</div>
        <Input
          className="mt-1 block h-14 w-80 border"
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <div className="mt-2.5 font-bold">새 비밀번호</div>
        <Input
          className="mt-1 block h-14 w-80 border"
          type="password"
          name="newPassword"
          value={newPassword}
          placeholder="숫자,영문자 포함 8자이상"
          onChange={onChange}
        />
        <Input
          className="mt-1 block h-14 w-80 border"
          type="password"
          name="newPasswordCheck"
          value={newPasswordCheck}
          placeholder="비밀번호 확인"
          onChange={onChange}
        />
        <Button title="변경하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
