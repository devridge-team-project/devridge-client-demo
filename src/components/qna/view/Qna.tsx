import { useQuery } from "@tanstack/react-query";
import { qna } from "connection";
import { col, center } from "style/display";
import QuestionCard from "../../../design/card/PostCard";
import useNavigation from "hook/useNavigation";
import FloatButton from "design/button/FloatButton";
export default function Qna() {
  const { data: viewsQnaData, isLoading: isLoadingViews } = useQuery({
    queryKey: ["viewsQna"],
    queryFn: () => qna.get("views"),
  });
  const { data: latestQnaData, isLoading: isLoadingLatest } = useQuery({
    queryKey: ["latestQna"],
    queryFn: () => qna.get("latest"),
  });
  const navigate = useNavigation();
  if (isLoadingViews || isLoadingLatest) return <div>로딩중...</div>;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-12 pt-8">
        <div className="text-3xl font-bold">Q&A</div>
        <div className={col(2)}>
          <div className="text-xl font-bold">오늘의 조회수 TOP 5</div>
          {viewsQnaData?.map(({ id, title, commentCount, likes, views }, index) => (
            <QuestionCard
              key={id}
              index={index + 1}
              onClick={() => navigate(`/qna/${id}`)}
              title={title}
              commentCount={commentCount}
              likes={likes}
              views={views}
            />
          ))}
        </div>
        <div className={col(2)}>
          <div className="text-xl font-bold">최근 Q&A</div>
          {latestQnaData?.map(({ id, title, commentCount, likes, views }) => (
            <QuestionCard
              key={id}
              onClick={() => navigate(`/qna/${id}`)}
              title={title}
              commentCount={commentCount}
              likes={likes}
              views={views}
            />
          ))}
        </div>
      </div>
      <FloatButton
        icon="/images/icons/writing-white.svg"
        onClick={() => {
          navigate("/qna/post");
        }}
      />
    </div>
  );
}
