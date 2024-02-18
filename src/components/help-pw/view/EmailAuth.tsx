import { center, col, row } from "style/display";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { emailVerifications } from "connection/api/emailVerifications";
import Input from "components/common/input";
import { useMutation } from "@tanstack/react-query";
import { Button } from "design";

export default function EmailAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { email },
  } = location;
  const [code, setCode] = useState<string>("");
  const { mutate, isSuccess } = useMutation({
    mutationFn: () => emailVerifications.get(email, Number(code)),
  });
  if (isSuccess) {
    alert("이메일 인증 되었습니다.");
    navigate("/help-pw/reset-pw", { state: { email } });
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCode(value);
  };

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div>인증하기</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="password"
          name="password"
          value={code}
          placeholder="인증번호를 입력해주세요"
          onChange={onChange}
        />
        <Button title="인증하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
