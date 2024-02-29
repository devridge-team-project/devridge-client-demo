import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { col, center, row } from "style/display";
import { Link, useNavigate } from "react-router-dom";
import Card from "components/common/card";
import CommunityLayout from "design/template/CommunityLayout";
import { getCommunity } from "connection/api/community";
export default function Community() {
  const navigate = useNavigate();
  const { data: datas, isLoading: isLoadingViews } = useQuery({
    queryKey: ["Community"],
    queryFn: () => getCommunity(),
  });
  console.log(datas);
  return (
    <CommunityLayout tag="issue">
      <div className={col(2)}>
        {datas?.map(({ id, title, views, likeCount, comments }) => {
          return (
            <Link to={`${id}`} className="h-40 border-b-2">
              <div className="text-1xl font-bold">{title}</div>
              <div className="text-xxs">게시판 내용 api 추가해주세요.</div>
              <div className="text-[8px] text-gray-400 flex justify-end">
                <div className="mr-2.5">조회수: {views}</div>
                <div>추천: {likeCount}</div>
              </div>
            </Link>
          );
        })}
        <div className={`flex justify-end ${row(2)}`}>
          <a href="community/post">
            <img src="images/write.png" alt="write" />
          </a>
        </div>
      </div>
    </CommunityLayout>
  );
}
