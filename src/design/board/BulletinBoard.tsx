import { QnaComments } from "interface/Qna";
import Board from "./Board";
import { Dispatch, useState } from "react";
import { Button } from "design/button";
import { useMutation } from "@tanstack/react-query";
import { comment, qna } from "connection";

export default function BulletinBoard({
  id,
  type,
  title,
  createdAt,
  content,
  comments,
  refresh,
}: {
  id: number;
  type: string;
  title?: string;
  createdAt?: string;
  content?: string;
  comments?: QnaComments[];
  refresh?: () => void;
}) {
  const [commentContent, setCommentContent] = useState<string>("");

  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postComment"],
    mutationFn: () => comment.post(id, { content: commentContent }),
  });

  if (isSuccess) refresh?.();

  return (
    <Board>
      <div>
        <div className="bg-gray-200 rounded-xl text-black w-16 h-8 flex justify-center items-center">
          {type}
        </div>
        <div className="text-3xl">{title}</div>
        <div className="text-sm text-gray-200">{createdAt}</div>
      </div>
      <div className="text-xl">{content}</div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">댓글 {`(${comments?.length})`}</div>
        {comments?.map(({ member: { nickname, profileImageUrl, introduction }, content }) => (
          <Comment
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            introduction={introduction}
            content={content}
          />
        ))}
      </div>
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
          {/* <div className="h-23 border-b px-4 pr-3">
            <div>링크삽입</div>
            <div className="flex items-center">
              <input type="text" className="" />
              <button className="bg-black h-11 w-">추가</button>
            </div>
          </div> */}
          <textarea
            onChange={(e) => setCommentContent(e.target.value)}
            className="h-64 focus:outline-none p-4"
          />
        </div>
        <Button title="SUBMIT" onClick={mutate} options={{ size: "full" }} />
      </div>
    </Board>
  );
}

function Comment({
  nickname,
  profileImageUrl,
  introduction,
  content,
}: {
  nickname: string;
  profileImageUrl: string | null;
  introduction: string | null;
  content: string;
}) {
  return (
    <div className="rounded-xl border-2 p-4 flex flex-col gap-4 min-h-80">
      <div className="flex items-center border-b pb-8 gap-4">
        {profileImageUrl ? (
          <img src={profileImageUrl} alt="profile" className="rounded-full size-16 " />
        ) : (
          <div className="rounded-full bg-black size-16" />
        )}
        <div>
          <div className="text-lg font-bold">{nickname}</div>
          <div className="text-sm text-gray-300">{introduction ?? "지나가는 개발자"}</div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}
