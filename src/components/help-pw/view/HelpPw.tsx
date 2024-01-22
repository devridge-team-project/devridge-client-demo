import { useState } from "react";
import { center, col, row } from "style/display";

import Input from "../../common/input";
import Button from "../../common/button";

export default function HelpPw() {
  const [email, setEmail] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };
  const onSubmitHandler = () => {};
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <form className={`${col(2)} w-80`} onSubmit={onSubmitHandler}>
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
          비밀번호 재설정 이메일 받기
        </Button>
      </form>
    </div>
  );
}
