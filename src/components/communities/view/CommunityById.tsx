import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommunityDetail } from "connection/api/communityService";
import BulletinBoard from "design/board/BulletinBoard";

export default function CommunityById() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    const { status, data } = await CommunityDetail(Number(id));
    if (status === 200) {
      setData(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <BulletinBoard id={Number(id)} type="community" {...data} />
    </div>
  );
}
