import { useState } from "react";
import { useParams } from "react-router-dom";
import { postProjectComments, getProjectComments, getProjectById } from "connection/api/community";
import { useQuery, useMutation } from "@tanstack/react-query";
import BulletinBoard from "design/board/BulletinBoard";

function ProjectDetail() {
  const { id } = useParams();
  const [commentContent, setCommentContent] = useState<string>("");
  const { data: projectDetail, isLoading: isLoadingViews } = useQuery({
    queryKey: ["Project", id],
    queryFn: () => getProjectById(Number(id)),
  });

  const { mutate } = useMutation({
    mutationFn: () => postProjectComments(Number(id), { content: commentContent }),
  });

  const { data: comments, isLoading: isLoadingViews1 } = useQuery({
    queryKey: [`ProjectComments${id}`],
    queryFn: () => getProjectComments(Number(id)),
  });
  console.log(projectDetail);
  console.log(comments);
  /* {
    "title": "Example Title1",
    "content": "Example Content",
    "views": 9,
    "createdAt": "2024-02-26T15:11:34",
    "updatedAt": "2024-03-29T09:53:11",
    "likes": 0,
    "dislikes": 0,
    "roles": "토이 프로젝트",
    "skills": [
      "java",
      "c++",
      "python"
    ],
    "meeting": "온라인",
    "isRecruiting": false,
    "id": 5,
    "member": {
      "id": 170,
      "nickname": "닉네임300",
      "profileImageUrl": "member/ce8267a8-5b27-449c-ad62-c67f77ceed51.png",
      "introduction": "안녕하세요! 반갑습니다."
    }
  }
  {
            "content": "테스트",
            "createdAt": "2024-04-05T21:56:53",
            "updatedAt": "2024-04-05T21:56:53",
            "likes": 0,
            "dislikes": 0,
            "id": 30,
            "member": {
                "id": 170,
                "nickname": "닉네임300",
                "profileImageUrl": "member/ce8267a8-5b27-449c-ad62-c67f77ceed51.png",
                "introduction": "안녕하세요! 반갑습니다."
            }
        },
  export interface CommunityById {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}
   */
  return (
    <div>
      <BulletinBoard
        type="project"
        {...{
          ...projectDetail,
          commentCount: comments?.content?.length,
          comments: comments?.content,
        }}
        postComment={{ submit: mutate as () => Promise<unknown>, setCommentContent }}
      />
    </div>
  );
}

export default ProjectDetail;
