import { Card } from "design";

export default function QnaCard({
  index,
  title,
  commentCount,
  likes,
  views,
}: {
  index: number;
  title: string;
  commentCount: number;
  likes: number;
  views: number;
}) {
  return (
    <Card>
      <div className="flex items-center gap-2 font-bold">
        <div className="w-6 h-6 rounded-md flex justify-center items-center bg-black text-white">
          {index + 1}
        </div>
        <div>{title}</div>
      </div>
      <div className="flex justify-end gap-4 text-xs text-gray-300">
        <div>답변수 {commentCount}</div>
        <div>추천수 {likes}</div>
        <div>조회수 {views}</div>
      </div>
    </Card>
  );
}
