import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getCommunityById, comment } from "connection/api/community";
import BulletinBoard from "design/board/BulletinBoard";

export default function CommunityById() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [commentContent, setCommentContent] = useState<string>("");
  const { data: communityDetail, isLoading: isLoadingViews } = useQuery({
    queryKey: [`Community${id}`],
    queryFn: () => getCommunityById(Number(id)),
  });
  const { mutate, isSuccess } = useMutation({
    mutationFn: () => comment.post(Number(id), { content: commentContent }),
  });

  const { data: comments, isLoading: isLoadingViews1 } = useQuery({
    queryKey: [`Comments${id}`],
    queryFn: () => comment.get(Number(id)),
  });

  return (
    <div>
      <BulletinBoard
        type="community"
        {...{ ...communityDetail, commentCount: comments?.length, comments }}
        postComment={{ submit: mutate as () => Promise<unknown>, setCommentContent }}
      />
    </div>
  );
}
