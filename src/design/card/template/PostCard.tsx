import { Card } from "design";
import { cn } from "util/classNames";

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
  const container = {
    displays: "flex items-center gap-4",
    styles: "border-b",
  };

  return (
    <Card onClick={onClick} classNames={cn(container)}>
      {index && (
        <div className="w-6 h-6 rounded-md flex justify-center items-center bg-dark-grey text-white text-lg font-bold ">
          {index}
        </div>
      )}
      <div className="flex flex-col items-start gap-1">
        <div className="text-base font-bold ">{title}</div>
        <div className="flex justify-end gap-4 text-xs text-gray-300">
          <div>답변수 {commentCount}</div>
          <div>조회수 {views}</div>
        </div>
      </div>
    </Card>
  );
}
