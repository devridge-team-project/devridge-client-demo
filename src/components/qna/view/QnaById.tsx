import { useQuery } from "@tanstack/react-query";
import { qna } from "connection";
import BulletinBoard from "design/board/BulletinBoard";
import { useParams } from "react-router-dom";
import { center } from "style";
export default function QnaById() {
  const { id } = useParams();
  const {
    data: qnaData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["qnaById"],
    queryFn: () => qna.getById(parseInt(id ?? "0", 10)),
  });

  if (!qnaData) return <div>데이터가 없습니다.</div>;
  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return <BulletinBoard type="Q&A" {...qnaData} />;
}
