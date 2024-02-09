import { useQuery } from "@tanstack/react-query";
import { qna } from "connection";
import { col, center } from "style/display";
import QnaCard from "./qna/QnaCard";
export default function Qna() {
  const { data: topQnaData, isLoading, error } = useQuery({ queryKey: ["qna"], queryFn: qna.get });
  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={col(8, 80)}>
        <div className="text-3xl font-bold">Q&A</div>
        <div className={col(2)}>
          <div className="text-xl font-bold">오늘의 조회수 TOP 5</div>
          {topQnaData?.map(({ id, title, commentCount, likes, views }, index) => (
            <QnaCard
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
