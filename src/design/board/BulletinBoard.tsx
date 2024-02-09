import { QnaComments } from "interface/Qna";
import Board from "./Board";

export default function BulletinBoard({
  type,
  title,
  createdAt,
  content,
  comments,
}: {
  type: string;
  title: string;
  createdAt: string;
  content: string;
  comments: QnaComments[];
}) {
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
        <div className="text-2xl font-bold">댓글 {`(${comments.length})`}</div>
        {comments.map(({ member: { nickname, profileImageUrl, introduction }, content }) => (
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
        ))}
      </div>
    </Board>
  );
}
