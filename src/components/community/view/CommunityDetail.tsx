import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCommunityById, comment } from "connection/api/community";
import BulletinBoard from "design/board/BulletinBoard";

export default function CommunityDetail() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [commentContent, setCommentContent] = useState<string>("");
  const { data: communityDetail, isLoading: isLoadingViews } = useQuery({
    queryKey: ["Community", id],
    queryFn: () => getCommunityById(Number(id)),
  });

  const { data: comments, isLoading: isLoadingViews1 } = useQuery({
    queryKey: ["Comments", `${id}`],
    queryFn: () => comment.get(Number(id)),
  });

  console.log(comments?.content);

  const { mutate, isSuccess } = useMutation({
    mutationFn: () => comment.post(Number(id), { content: commentContent }),
    /* onMutate:()=>{
      queryClient.invalidateQueries(["Comments",`${id}`]);
      const curcomments=queryClient.getQueriesData(["Comments",`${id}`]);
      queryClient.setQueryData(["Comments",`${id}`],(prev)=>[...prev,{content:commentContent,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),likeCount:0,dislikeCount:0 id:, member:}])
    } */
  });

  return (
    <div>
      <BulletinBoard
        type="community"
        {...{
          ...communityDetail,
          commentCount: comments?.content?.length,
          comments: comments?.content,
        }}
        postComment={{ submit: mutate as () => Promise<unknown>, setCommentContent }}
      />
    </div>
  );
}
