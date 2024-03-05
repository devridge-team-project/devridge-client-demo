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
  /*
  export interface Issue {
    id: number;
    title: string;
    views: number;
    likeCount: number;
    comments: number;
    member: Member;
    createdAt: string;
    updatedAt: string;
    hashtags: Hashtag[];
    scraps: number;
  }
  export interface Member {
    id: number;
    nickname: string;
    profileImageUrl: string | null;
    introduction: string;
  } */
  console.log(datas);
  return (
    <CommunityLayout tag="issue">
      <div className={`${col(0, 80)} mx-[35px]`}>
        {datas?.content?.map(
          ({
            id,
            title,
            views,
            likeCount,
            member: { nickname, profileImageUrl, introduction },
            comments,
          }) => {
            return (
              <Link to={`${id}`} className="h-40">
                <div className="flex">
                  <img
                    src={profileImageUrl}
                    className="h-12.5 w-12.5 rounded-full bg-gray-200 "
                    alt="profileImage"
                  />
                  <div className="ml-3.5">
                    <div className="text-1xl font-bold text-blue-grey">{nickname}</div>
                    <div className="text-1xl">{introduction}</div>
                  </div>
                </div>
                <div className="text-1xl font-bold">{title}</div>
                <div className="text-xxs">게시판 내용 api 추가해주세요.</div>
                <div className="text-[8px] text-gray-400 flex justify-end">
                  <div className="mr-2.5">조회수: {views}</div>
                  <div>추천: {likeCount}</div>
                </div>
              </Link>
            );
          },
        )}
        <div className={`flex justify-end ${row(2)}`}>
          <a href="community/post">
            <img src="/images/write.png" alt="write" />
          </a>
        </div>
      </div>
    </CommunityLayout>
  );
}
