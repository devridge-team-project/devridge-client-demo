import { center, col, row } from "style/display";
import { useSignUpStore } from "shared/sign-up/store";
import { useState } from "react";
import { deleteAccount } from "connection/api/loginService";
import { useNavigate } from "react-router-dom";
import Input from "components/common/input";

export default function DeleteAccount() {
  const { nickname } = useSignUpStore();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };
  const onDeleteAccount = async () => {
    const status = await deleteAccount({ password });
    if (status === 200) {
      alert("회원 탈퇴 되었습니다.");
      navigate("/");
    } else if (status === 400) {
      alert("비밀번호가 틀렸습니다.");
    }
  };
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div>회원탈퇴</div>
      <div>{nickname}님 정말 탈퇴하시겠습니까?</div>
      <Input
        className="mt-2.5 block h-14 w-80 border"
        type="password"
        name="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      <button
        className="mt-12.5 block h-14 w-80  bg-black text-white"
        type="button"
        onClick={onDeleteAccount}
      >
        탈퇴하기
      </button>
    </div>
  );
}
