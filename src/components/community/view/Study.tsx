import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { col, center, row } from "style/display";
import { getStudy } from "connection/api/community";
import CommunityLayout from "design/template/CommunityLayout";
export default function Study() {
  const navigate = useNavigate();

  const { data: study } = useQuery({ queryKey: ["study"], queryFn: () => getStudy() });
  console.log(study);

  return (
    <CommunityLayout tag="study">
      <div className={`${col(0, 80)} mx-[35px]`}>
        <div className="mt-[15px] flex flex-wrap">
          {study?.content?.map(
            ({ studyId, category, title, content, location, totalPeople, currentPeople }, idx) => {
              return (
                <div
                  className={`h-40 w-[155px] border-[1px] border-gray-200 mt-2.5 pt-2.5 pl-3 pr-3.5 ${
                    idx % 2 === 0 ? "mr-2.5" : ""
                  } `}
                >
                  <Link to={`${studyId}`}>
                    <div className="bg-white-purple border-r-2 text-center text-[6px] text-purple w-12.5 h-3  text-center">
                      {category}L
                    </div>
                    <div className="text-bold text-xxs mt-[11px]">{title}</div>
                    <div className="text-[7px] mt-[9px]">{content}</div>
                    <div className="mt-[13.5px] flex">
                      <div className="text-[9px] mr-[7px] text-blue-grey">위치</div>
                      <div className="text-[9px]">{location}</div>
                    </div>
                    <div className="mt-[5px] flex ">
                      <div className="text-[9px] mr-[7px] text-blue-grey">현재인원</div>
                      <div className="text-[9px]">
                        {currentPeople}/{totalPeople}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            },
          )}
        </div>
      </div>

      <div className={`flex justify-end ${row(2)}`}>
        <Link to="post">
          <img src="/images/write.png" alt="studyPost" />
        </Link>
      </div>
    </CommunityLayout>
  );
}
