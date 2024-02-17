import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { col, center, row } from "style/display";
import { useNavigate } from "react-router-dom";
import Card from "components/common/card";
import { getCommunity } from "connection/api/community";
export default function Community() {
  const navigate = useNavigate();
  const { data: datas, isLoading: isLoadingViews } = useQuery({
    queryKey: ["Community"],
    queryFn: () => getCommunity(),
  });

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className="text-3xl font-bold">커뮤니티</div>
      <div className={col(8, 80)}>
        <div className={col(2)}>
          {datas?.map(({ id, title, views, likeCount, commentCount }) => {
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
            <a href="community/post">
              <img src="images/write.png" alt="write" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
