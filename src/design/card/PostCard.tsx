import { Card } from "design";

export default function PostCard({
  onClick,
  title,
  index,
  commentCount,
  likes,
  views,
}: {
  onClick: () => void;
  title: string;
  index?: number;
  commentCount: number;
  likes: number;
  views: number;
}) {
  return (
    <Card onClick={onClick}>
      <div className="flex items-center font-bold text-xl">
        {index && (
          <div className="w-7 h-7 rounded-md flex justify-center items-center bg-black text-white ">
            {index + 1}
          </div>
        )}
        <div className="pl-2">{title}</div>
      </div>
      <div className="flex justify-end gap-4 text-xs text-gray-300">
        <div>답변수 {commentCount}</div>
        <div>추천수 {likes}</div>
        <div>조회수 {views}</div>
      </div>
    </Card>
  );
}
