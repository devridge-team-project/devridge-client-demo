import { FormEvent, useState } from "react";
import { center, col, row } from "style/display";
import { emailVerifications } from "connection/api/emailVerifications";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button } from "design";
import Loading from "design/loading/Loading";
import Input from "../../common/input";

export default function HelpPw() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationFn: () => emailVerifications.post(email),
  });
  if (isSuccess) {
    navigate("email-auth", { state: { email } });
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div className="text-2xl font-bold">비밀번호 찾기</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
        />
        <Button
          title="비밀번호 재설정 이메일 인증번호 받기"
          onClick={mutate}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
