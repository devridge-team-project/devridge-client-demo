import { Button } from "design";
import useNavigation from "hook/useNavigation";

export default function QnaSuccess() {
  const navigator = useNavigation();
  return (
    <div className="absolute top-0 w-full min-h-screen flex flex-col gap-44 justify-center items-center">
      <div className="flex flex-col items-center gap-4 text-3xl font-bold">
        <div>게시글이 작성되었어요.</div>
        <div>답변을 기다려주세요.</div>
        <img src="/images/qna/ok.png" alt="ok" className="w-48 h-48" />
      </div>
      <Button
        title="게시판으로 가기"
        onClick={() => {
          navigator("/questions");
        }}
        options={{ size: "lg" }}
      />
    </div>
  );
}
