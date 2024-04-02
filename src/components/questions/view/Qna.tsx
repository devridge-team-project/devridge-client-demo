import { useQueries } from "@tanstack/react-query";
import { questionApi } from "connection";
import { col } from "style/display";
import PostCard from "../../../design/card/template/PostCard";
import useNavigation from "hook/useNavigation";
import FloatButton from "design/button/FloatButton";
import PostCardRecent from "design/card/template/PostCard.recent";
import { Events } from "design";
import { Toast } from "design/toast";
export default function Qna() {
  const [
    { data: viewsQnaData, isLoading: isLoadingViews },
    { data: latestQnaData, isLoading: isLoadingLatest },
  ] = useQueries({
    queries: [
      { queryKey: ["viewsQna"], queryFn: () => questionApi.getAll("views") },
      { queryKey: ["latestQna"], queryFn: () => questionApi.getAll("latest") },
    ],
  });

  const navigate = useNavigation();
  if (isLoadingViews || isLoadingLatest) return <div>로딩중...</div>;

  return (
    <Events.Show components={[["toast", <Toast />]]}>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-12 pt-8">
          <div className="text-3xl font-bold">Q&A</div>
          <div className={col(2)}>
            <div className="flex items-center gap-2 ">
              <div className="text-xl font-bold">오늘의 조회수 TOP 5</div>
              <img src="/images/icons/fire.svg" alt="fire" className="w-5 h-5" />
            </div>
            {viewsQnaData?.map(({ id, title, commentCount, likes, views }, index) => (
              <PostCard
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
            {latestQnaData?.map(
              ({ id, nickname, title, content, commentCount, likes, views, createdAt }) => (
                <PostCardRecent
                  id={id}
                  key={id}
                  onClick={() => navigate(`/qna/${id}`)}
                  nickname={nickname}
                  title={title}
                  content={content}
                  commentCount={commentCount}
                  likes={likes}
                  views={views}
                  createdAt={createdAt}
                />
              ),
            )}
          </div>
        </div>
        <FloatButton
          icon="/images/icons/writing-white.svg"
          onClick={() => {
            navigate("/qna/post");
          }}
        />
      </div>
    </Events.Show>
  );
}
