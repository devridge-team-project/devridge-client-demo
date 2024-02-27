import { useQuery } from "@tanstack/react-query";
import BulletinBoard from "design/board/BulletinBoard";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { qna } from "connection";
import { useEffect, useState } from "react";
import useSignIn from "hook/useSignIn";

export default function QnaById() {
  useSignIn();
  const { id } = useParams();
  const [commentContent, setCommentContent] = useState<string>("");

  const { mutate, isSuccess: isPost } = useMutation({
    mutationKey: [],
    mutationFn: () => qna.comments.post(parseInt(id ?? "0", 10), { content: commentContent }),
  });

  const {
    data: post,
    isLoading: loading,
    isError,
  } = useQuery({
    queryKey: ["post", mutate, isPost],
    queryFn: () => qna.getById(parseInt(id ?? "0", 10)),
  });

  const { data: comments } = useQuery({
    queryKey: [],
    queryFn: () => qna.comments.get(parseInt(id ?? "0", 10)),
  });

  if (!post || !comments) return <div>데이터가 없습니다.</div>;
  if (loading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <BulletinBoard
      type="Q&A"
      comments={comments}
      postComment={{
        submit: mutate as () => Promise<unknown>,
        setCommentContent: setCommentContent,
      }}
      {...post}
    />
  );
}
