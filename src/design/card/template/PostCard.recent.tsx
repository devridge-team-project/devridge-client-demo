// TODO: 가능하면 이거 추상화를 통해서 PostCard와 합치면 좋을 것 같다!

import { useQuery } from "@tanstack/react-query";
import { qna } from "connection";
import { Card, Events } from "design";
import { cn } from "util/classNames";

export default function PostCardRecent({
  id,
  onClick,
  nickname,
  title,
  content,
  index,
  commentCount,
  likes,
  views,
  createdAt,
}: {
  id: number;
  onClick: () => void;
  nickname: string;
  title: string;
  content: string;
  index?: number;
  commentCount: number;
  likes: number;
  views: number;
  createdAt: string;
}) {
  const container = {
    displays: "flex items-center gap-4",
    styles: "border-b",
  };

  const date = new Date(createdAt);
  const dateStr = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

  return (
    <Card onClick={onClick} classNames={cn(container)} options={{ height: "md" }}>
      <div className="flex flex-col items-start gap-2 w-full">
        <div>
          <div className="text-xxs text-gray-300">
            {dateStr} · {nickname}님의 질문
          </div>
          <div className="text-base font-bold ">{title}</div>
          <div className="text-xs truncate w-64">{content}</div>
        </div>
        <div className="w-full">
          <div className="flex justify-center bg-blue-grey/25 text-blue-grey h-3 w-10 text-xxxs rounded-sm">
            #NoTag
          </div>
          <div className="flex justify-between  text-xxs text-gray-300 w-full">
            <div className="flex gap-4">
              <div>답변수 {commentCount}</div>
              <div>조회수 {views}</div>
            </div>
            <div>추천 {likes}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
