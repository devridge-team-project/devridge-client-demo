import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  CommunityDetail,
  CommunityDetailComments,
  postComments,
} from "connection/api/communityService";
import BulletinBoard from "design/board/BulletinBoard";

export default function CommunityById() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState<string>("");

  const { mutate, isSuccess } = useMutation({
    mutationFn: () => postComments(Number(id), { content: commentContent }),
  });
  // console.log(mutate);
  const getData = async () => {
    const { status, data } = await CommunityDetail(Number(id));
    if (status === 200) {
      setData(data);
    }
  };
  const getComments = async () => {
    const { status, data } = await CommunityDetailComments(Number(id));
    if (status === 200) {
      setComments(data);
    }
  };
  useEffect(() => {
    getData();
    getComments();
  }, []);
  // console.log(data);
  // console.log(comments);
  // console.log({ ...data, comments });
  return (
    <div>
      <BulletinBoard
        type="community"
        {...{ ...data, commentCount: comments.length, comments }}
        postComment={{ submit: mutate as () => Promise<unknown>, setCommentContent }}
      />
    </div>
  );
}
