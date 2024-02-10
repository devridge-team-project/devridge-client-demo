import React, { useState, useEffect } from "react";
import { col, center, row } from "style/display";
import { useNavigate } from "react-router-dom";
import Card from "components/common/card";
import { CommunityAll } from "connection/api/communityService";
export default function Community() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    const { status, data } = await CommunityAll();
    if (status === 200) {
      setData(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className="text-3xl font-bold">커뮤니티</div>
      <div className={col(8, 80)}>
        <div className={col(2)}>
          {data.map(({ id, title, views, likeCount, commentCount }) => {
            return (
              <Card
                key={id}
                onClick={() => navigate(`${id}`)}
                title={title}
                views={views}
                likeCount={likeCount}
                commentCount={commentCount}
              />
            );
          })}
          <div className={`flex justify-end ${row(2)}`}>
            <a href="communities/post">
              <img src="images/write.png" alt="write" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
