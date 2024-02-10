import { Button } from "design";

export default function Team() {
  return (
    <div className="w-full flex flex-col items-center pt-8 h-160 gap-8">
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>스터디 및 사이드 프로젝트</div>
        <div>팀원을 구하고 싶을 때</div>
      </div>
      <Button title="팀원 구하기" onClick={() => {}} />
    </div>
  );
}
