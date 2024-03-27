import { cn } from "util/classNames";
import { Button, Input } from "design";

export default function Toast() {
  const container = {
    positions: "fixed top-0 left-0 z-50",
    displays: "flex items-end",
    sizes: "w-full min-h-screen",
    styles: "bg-black/50",
  };
  const body = {
    sizes: "w-full h-80.5",
    displays: "flex flex-col gap-5",
    styles: "rounded-t-xl bg-white px-6 pt-6 ",
  };

  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="flex flex-col items-start gap-2.5">
          <div className="text-2xl font-bold">
            <div>회원이 아니시군요!</div>
            <div>로그인이 필요해요</div>
          </div>
          <div className="text-xs text-gray-400">
            데브릿지에 가입해서 현직 개발자들에게 답변을 받아보세요.
          </div>
        </div>
        <Button title="가입하러 하기" options={{ size: "full" }} onClick={() => {}} />
        <Button
          title="로그인 하러가기"
          options={{ size: "full", color: "white" }}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
