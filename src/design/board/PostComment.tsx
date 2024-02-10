import { Dispatch } from "react";
import { Button } from "design/button";

export default function PostComment({
  submit,
  setCommentContent,
}: {
  submit: () => Promise<unknown>;
  setCommentContent: Dispatch<string>;
}) {
  const submitComment = async () => {
    await submit();
    setCommentContent("");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-bold">댓글 작성하기</div>
      <div className="rounded-xl border-2 flex flex-col min-h-80 overflow-hidden">
        <div className="h-14 border-b flex text-xl gap-4 justify-center">
          <button>B</button>
          <button>I</button>
          <button>L</button>
          <button>Q</button>
          <button>C</button>
          <button>M</button>
        </div>

        <textarea
          onChange={(e) => setCommentContent(e.target.value)}
          className="h-64 focus:outline-none p-4"
        />
      </div>
      <Button title="SUBMIT" onClick={submitComment} options={{ size: "full" }} />
    </div>
  );
}
