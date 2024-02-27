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
      <div className="flex items-center h-full gap-4">
        {index && (
          <div className="w-6 h-6 rounded-md flex justify-center items-center bg-black text-white text-lg font-bold ">
            {index}
          </div>
        )}
        <div className="flex flex-col items-start">
          <div className="text-base font-bold ">{title}</div>
          <div className="flex justify-end gap-4 text-xs text-gray-300">
            <div>답변수 {commentCount}</div>
            <div>조회수 {views}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
