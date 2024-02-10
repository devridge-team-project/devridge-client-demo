import { useQuery } from "@tanstack/react-query";
import BulletinBoard from "design/board/BulletinBoard";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { comment, qna } from "connection";
import { useState } from "react";

export default function QnaById() {
  const { id } = useParams();
  const [commentContent, setCommentContent] = useState<string>("");

  const { mutate, isSuccess: isPost } = useMutation({
    mutationKey: [],
    mutationFn: () => comment.post(parseInt(id ?? "0", 10), { content: commentContent }),
  });

  const {
    data: qnaData,
    isLoading: loading,
    isError,
  } = useQuery({
    queryKey: [mutate, isPost],
    queryFn: () => qna.getById(parseInt(id ?? "0", 10)),
  });

  if (!qnaData) return <div>데이터가 없습니다.</div>;
  if (loading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <BulletinBoard
      type="Q&A"
      postComment={{
        submit: mutate as () => Promise<unknown>,
        setCommentContent: setCommentContent,
      }}
      {...qnaData}
    />
  );
}
