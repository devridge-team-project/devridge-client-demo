import { useState } from "react";
import { useParams } from "react-router-dom";
import { postStudyComments, getStudyComments, getStudyById } from "connection/api/community";
import { useQuery, useMutation } from "@tanstack/react-query";
import BulletinBoard from "design/board/BulletinBoard";

function StudyDetail() {
  const { id } = useParams();
  const [commentContent, setCommentContent] = useState<string>("");
  const { data: StudyDetail, isLoading: isLoadingViews } = useQuery({
    queryKey: ["Study", id],
    queryFn: () => getStudyById(Number(id)),
  });

  const { mutate } = useMutation({
    mutationFn: () => postStudyComments(Number(id), { content: commentContent }),
  });

  const { data: comments, isLoading: isLoadingViews1 } = useQuery({
    queryKey: [`ProjectComments${id}`],
    queryFn: () => getStudyComments(Number(id)),
  });
  console.log(StudyDetail);
  console.log(comments);

  return (
    <div>
      <BulletinBoard
        type="project"
        {...{
          ...StudyDetail,
          commentCount: comments?.content?.length,
          comments: comments?.content,
        }}
        postComment={{ submit: mutate as () => Promise<unknown>, setCommentContent }}
      />
    </div>
  );
}

export default StudyDetail;
