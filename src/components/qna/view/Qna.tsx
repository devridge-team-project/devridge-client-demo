import { useQuery } from "@tanstack/react-query";
import { getQna } from "connection";
import { cn } from "util/classNames";
import { col, center } from "style/display";
export default function Qna() {
  const { data: topQnaData, isLoading, error } = useQuery({ queryKey: ["qna"], queryFn: getQna });
  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={col(8, 80)}>
        <div className="text-3xl font-bold">Q&A</div>
        <div className={col(2)}>
          <div className="text-xl font-bold">오늘의 조회수 TOP 5</div>
          {topQnaData?.map(({ id, title, commentCount, likes, views }, index) => (
            <Cell
              key={id}
              index={index}
              title={title}
              commentCount={commentCount}
              likes={likes}
              views={views}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function Cell({
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
    <div className="w-full border-2 shadow-md p-2 h-20 flex flex-col justify-between rounded-md">
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
    </div>
  );
}
