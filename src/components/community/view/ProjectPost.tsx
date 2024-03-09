import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Board from "design/board/Board";
import { center, col, row } from "style/display";
import { Button } from "design";
import SelectButton from "design/input/SelectButton";
import { postProject } from "connection/api/community";

export default function ProjectPost() {
  const [project, setProject] = useState({
    title: "",
    content: "",
    category: "",
    meeting: "",
  });
  const [skillIds, setSkillIds] = useState([]);
  const { title, content, category, meeting } = project;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProject({ ...project, [name]: value });
  };
  const onSelectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;
    console.log(id, name, value);
  };
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postProject"],
    mutationFn: () => postProject({ ...project, images: ["abc"], skillIds: [1, 2, 3] }),
  });
  if (isSuccess) {
    alert("커뮤니티 게시글 등록 성공");
    navigate("/community/project");
  }

  return (
    <div className={`${center.colO(0)}`}>
      <div className="w-[390px]">
        <div>
          <div className="text-2xl font-bold">제목 </div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 5자 이상 입력해주세요."
          />
        </div>
        <div>
          <div className="text-2xl font-bold">프로젝트 요약</div>
          <textarea
            name="content"
            value={content}
            onChange={onChange}
            placeholder="프로젝트 요약을 입력하세요."
          />
        </div>
        <div>
          <div className="text-2xl font-bold">모집 역할</div>
          <div className="flex">
            <SelectButton
              id="front"
              type="checkbox"
              name="skillId"
              value="프론트엔드"
              onChange={onSelectChange}
            />
            <SelectButton
              id="back"
              type="checkbox"
              name="skillId"
              value="백엔드"
              onChange={onSelectChange}
            />
            <SelectButton
              id="design"
              type="checkbox"
              name="skillId"
              value="디자인"
              onChange={onSelectChange}
            />
            <SelectButton
              id="pm"
              type="checkbox"
              name="skillId"
              value="기획"
              onChange={onSelectChange}
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">카테고리</div>
          <div className="flex">
            <SelectButton
              id="side"
              type="radio"
              name="category"
              defaultValue={category}
              value="TOY_PROJECT"
              onChange={onChange}
              className=" w-[105px] h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="portfolio"
              type="radio"
              name="category"
              defaultValue={category}
              value="PORTFOLIO_PROJECT"
              onChange={onChange}
              className=" w-[130px] h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="general"
              type="radio"
              name="category"
              defaultValue={category}
              value="ETC"
              onChange={onChange}
              className=" w-[70px] h-7.5 border-2 border-gray-200"
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">참여방식</div>
          <div className="flex">
            <SelectButton
              id="online"
              type="radio"
              name="meeting"
              defaultValue={meeting}
              value="온라인"
              onChange={onChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="offline"
              type="radio"
              name="meeting"
              defaultValue={meeting}
              value="오프라인"
              onChange={onChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
          </div>
        </div>
      </div>

      <Button title="작성하기" onClick={mutate} />
    </div>
  );
}
