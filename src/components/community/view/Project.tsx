import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { col, center, row } from "style/display";
import { getProject } from "connection/api/community";
import CommunityLayout from "design/template/CommunityLayout";
export default function Project() {
  const navigate = useNavigate();

  const { data: Project } = useQuery({ queryKey: ["project"], queryFn: () => getProject() });
  console.log(Project);
  return (
    <CommunityLayout tag="project">
      <div className="border-y-2">
        <div className={`h-64  ${col(0, 80)} mx-[35px]`}>
          <div className="text-xl w-63 h-12 mt-9 text-center">
            데브릿지에서 프로젝트를 함께할 팀원을 구해보세요!
          </div>
          <div className="text-xm w-54 h-9 mt-2.5 text-center text-medium-grey">
            사이드 프로젝트 멤버를 찾거나 다양한 목적의 모집글을 올릴 수 있어요!
          </div>
          <button
            className=" w-80 h-12.5 mt-12.5 bg-blue-grey text-white"
            onClick={() => navigate("post")}
          >
            모집글 작성하기
          </button>
        </div>
      </div>

      <div>
        {Project?.content?.map(({ id, title, content, isRecruiting }) => {
          return (
            <div key={id} className="h-[86px] border-b-2 pt-5">
              <Link to={`${id}`}>
                <div className="bg-white-purple border-r-2 text-center text-[6px] text-purple w-12.5 h-3">
                  사이드 프로젝트
                </div>
                <div className="flex">
                  <div
                    className={`text-1xl font-bold ${
                      isRecruiting ? "text-blue-grey" : "text-white-grey"
                    }`}
                  >
                    {isRecruiting ? "모집 중 |" : "모집 완료 |"}
                  </div>
                  <div className="text-1xl font-bold">{title}</div>
                </div>
                <div className="text-xxs">{content}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </CommunityLayout>
  );
}
