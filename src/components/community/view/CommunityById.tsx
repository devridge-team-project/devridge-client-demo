import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommunityDetail, CommunityDetailComments } from "connection/api/communityService";
import BulletinBoard from "design/board/BulletinBoard";

export default function CommunityById() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
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
  console.log(data);
  console.log(comments);
  console.log({ ...data, comments });
  return (
    <div>
      <BulletinBoard type="community" {...{ ...data, comments }} />
    </div>
  );
}
