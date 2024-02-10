import { QnaComments } from "interface/Qna";
import Board from "./Board";
import { Dispatch, useState } from "react";
import { Button } from "design/button";
import PostComment from "./PostComment";
import { MutationFunction } from "@tanstack/react-query";
import Comment from "./Comment";

export default function BulletinBoard({
  type,
  title,
  createdAt,
  content,
  comments,
  postComment,
}: {
  type: string;
  title?: string;
  createdAt?: string;
  content?: string;
  comments?: QnaComments[];
  postComment?: {
    submit: () => Promise<unknown>;
    setCommentContent: Dispatch<string>;
  };
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
        <div className="text-2xl font-bold">댓글 {`(${comments?.length})`}</div>
        {comments?.map(({ member: { id, nickname, profileImageUrl, introduction }, content }) => (
          <Comment
            key={id}
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            introduction={introduction}
            content={content}
          />
        ))}
      </div>
      {postComment && <PostComment {...postComment} />}
    </Board>
  );
}
