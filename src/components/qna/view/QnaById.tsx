import { useQuery } from "@tanstack/react-query";
import BulletinBoard from "design/board/BulletinBoard";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { comment, qna } from "connection";
import { useState } from "react";

export default function QnaById() {
  const { id } = useParams();
  const [flag, setFlag] = useState<boolean>(false);

  const {
    data: qnaData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["qnaById", flag],
    queryFn: () => qna.getById(parseInt(id ?? "0", 10)),
  });

  if (!qnaData) return <div>데이터가 없습니다.</div>;
  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <BulletinBoard
      id={parseInt(id ?? "0", 10)}
      refresh={() => setFlag(!flag)}
      type="Q&A"
      {...qnaData}
    />
  );
}
