import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { row } from "style/display";
import { Link, useNavigate } from "react-router-dom";
import CommunityLayout from "design/template/CommunityLayout";
import { postCoffeeChat } from "connection/api/coffeeChat";
import { getCommunity } from "connection/api/community";

export default function Community() {
  const navigate = useNavigate();
  const { data: datas, isLoading: isLoadingViews } = useQuery({
    queryKey: ["Community"],
    queryFn: () => getCommunity(),
  });

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (variables: { toMemberId: number; message: string }) =>
      postCoffeeChat(variables.toMemberId, variables.message),
  });

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const message = prompt("메세지를 입력하세요:") as string;
    console.log(message, id);
    mutate({ toMemberId: Number(id), message });
    if (isSuccess) {
      alert("메세지가 잘 전달됬습니다.");
    } else if (isError) {
      alert("메세지 전송에 실패했습니다.");
    }
  };

  console.log(datas);
  return (
    <CommunityLayout tag="issue">
      <div className="h-22.5 border-y border-white-grey text-white-grey flex justify-center items-center">
        <div className="mr-20">자유롭게 의견을 공유해봐요</div>
        <Link to="post">
          <img src="/images/write-white.png" alt="write" />
        </Link>
      </div>
      {datas?.content?.map(
        ({
          id,
          title,
          content,
          viewCount,
          likeCount,
          member: { id: toMemberId, nickname, profileImageUrl, introduction },
          comments,
          scraps,
        }) => {
          return (
            <div className="border-b border-white-grey px-8.75">
              <div className="flex justify-between mt-7">
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
                <button
                  type="button"
                  id={String(toMemberId)}
                  className="w-17.5 h-7.5 rounded bg-blue-grey text-white"
                  onClick={onClickHandler}
                >
                  커피챗
                </button>
              </div>
              <Link to={`${id}`}>
                <div className="text-1xl font-bold mt-6.25">{title}</div>
                <div className="text-xm mt-3.75">{content}</div>
              </Link>

              <div className="text-xs text-gray-400 flex justify-between mt-8.75">
                <div className="flex">
                  <div className="mr-2.5">좋아요 {likeCount}</div>
                  <div>저장 {scraps}</div>
                </div>
                <div>추천: {viewCount}</div>
              </div>
            </div>
          );
        },
      )}
      <div className={`flex justify-end ${row(2)}`}>
        <Link to="post">
          <img src="/images/write.png" alt="write" />
        </Link>
      </div>
    </CommunityLayout>
  );
}
