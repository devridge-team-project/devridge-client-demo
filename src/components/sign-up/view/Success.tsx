import { Link } from "react-router-dom";
import SignUpLayout from "design/template/SignUpLayout";

export default function Success() {
  return (
    <SignUpLayout>
      <div className="text-2xl flex flex-col">
        <div>회원 가입이 완료되었어요.</div>
        <div className="flex">
          <div className="text-blue-500">즐거운 경험</div>을 시작해보세요!
        </div>
      </div>
      <img src="/imgaes/sign-up/clap.png" alt="clap" />
    </SignUpLayout>
  );
}
