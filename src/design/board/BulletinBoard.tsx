import { QnaComment } from "interface/Qna";
import { CommunityComments } from "interface/Community";
import Board from "./Board";
import { Dispatch } from "react";
import PostComment from "./PostComment";
import Comment from "./Comment";
import { EventsProps } from "interface";

export default function BulletinBoard({
  type,
  title,
  createdAt,
  content,
  comments,
  commentCount,
  postComment,
  events,
}: {
  type: string;
  title?: string;
  createdAt?: string;
  content?: string;
  commentCount?: number;
  comments?: QnaComment[] | CommunityComments[];
  postComment?: {
    submit: () => Promise<unknown>;
    setCommentContent: Dispatch<string>;
  };
  events?: EventsProps;
}) {
  return (
    <Board events={events}>
      <div>
        <div className="bg-gray-200 rounded-xl text-black w-16 h-8 flex justify-center items-center">
          {type}
        </div>
        <div className="text-3xl">{title}</div>
        <div className="text-sm text-gray-200">{createdAt}</div>
      </div>
      <div className="text-xl">{content}</div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">댓글 {`(${commentCount})`}</div>
        {comments?.map(
          ({ member: { id, nickname, profileImageUrl, introduction }, createdAt, content }) => (
            <Comment
              key={id + createdAt + content}
              nickname={nickname}
              profileImageUrl={profileImageUrl}
              introduction={introduction}
              content={content}
            />
          ),
        )}
      </div>
      {postComment && <PostComment {...postComment} />}
    </Board>
  );
}
