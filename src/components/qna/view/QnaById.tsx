import { useQuery } from "@tanstack/react-query";
import { BulletinBoard, LoadingSpinner } from "design";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { qna } from "connection";
import { useEffect, useState } from "react";
import useSignIn from "hook/useSignIn";
import { getCookie } from "util/cookies";
import checkSignIn from "util/checkSignIn";

export default function QnaById() {
  const { id } = useParams();
  const [commentContent, setCommentContent] = useState<string>("");

  const { mutate, isSuccess: isPost } = useMutation({
    mutationKey: [],
    mutationFn: () => qna.comments.post(parseInt(id ?? "0", 10), { content: commentContent }),
  });

  const { data: posts, isLoading: isLoadingPost } = useQuery({
    queryKey: ["post", mutate, isPost],
    queryFn: () => qna.getById(parseInt(id ?? "0", 10)),
  });

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: [],
    queryFn: () => qna.comments.get(parseInt(id ?? "0", 10)),
  });

  const isLoading = isLoadingPost || isLoadingComments;
  const data = posts && comments;

  return (
    <BulletinBoard
      events={{
        exceptions: [
          [!checkSignIn(), <div>로그인이 필요합니다.</div>],
          [isLoading, <LoadingSpinner />],
          [!data && !isLoading, <div>데이터가 존재하지 않습니다.</div>],
        ],
      }}
      type="Q&A"
      comments={comments}
      postComment={{
        submit: mutate as () => Promise<unknown>,
        setCommentContent: setCommentContent,
      }}
      {...posts}
    />
  );
}
