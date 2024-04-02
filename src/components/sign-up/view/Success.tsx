import { Button } from "design";
import useNavigation from "hook/useNavigation";
export default function Success() {
  const navigate = useNavigation();
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="h-152 w-80 flex flex-col gap-5">
        <div className="text-2xl flex flex-col font-bold">
          <div>회원 가입이 완료되었어요.</div>
          <div className="flex">
            <div className="text-blue-500">즐거운 경험</div>을 시작해보세요!
          </div>
        </div>
        <img src="/images/sign-up/clap.png" alt="clap" />
        <Button title="홈으로" onClick={() => navigate("/")} options={{ size: "full" }} />
      </div>
    </div>
  );
}
