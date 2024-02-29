import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Board from "design/board/Board";
import { center, col, row } from "style/display";
import { Button } from "design";
import RadioButton from "design/input/RadioButton";
import { postProject } from "connection/api/community";

export default function ProjectPost() {
  const [project, setProject] = useState({
    title: "",
    content: "",
    role: "",
    category: "",
    onoff: "",
    images: [],
  });
  const { title, content, role, category, onoff, images } = project;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProject({ ...project, [name]: value });
  };
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postProject"],
    mutationFn: () => postProject({ title, content, role, category, onoff, images }),
  });
  if (isSuccess) {
    alert("커뮤니티 게시글 등록 성공");
    navigate("/community/project");
  }

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className="w-[390px]">
        <div className="text-2xl font-bold">제목</div>
        <input
          type="text"
          value={title}
          onChange={onChange}
          placeholder="제목을 5자 이상 입력해주세요."
        />
      </div>
      <div className="w-[390px]">
        <div className="text-2xl font-bold">프로젝트 요약</div>
        <textarea
          name="project"
          value={content}
          onChange={onChange}
          placeholder="프로젝트 요약을 입력하세요."
        />
      </div>
      <div className="w-[390px]">
        <div className="text-2xl font-bold">모집 역할</div>
        <RadioButton
          id="front"
          name="role"
          defaultValue={role}
          value="프론트엔드"
          onChange={onChange}
        />
        <RadioButton id="back" name="role" defaultValue={role} value="백엔드" onChange={onChange} />
        <RadioButton
          id="design"
          name="role"
          defaultValue={role}
          value="디자인"
          onChange={onChange}
        />
        <RadioButton id="pm" name="role" defaultValue={role} value="기획" onChange={onChange} />
      </div>
      <div className="w-[390px]">
        <div className="text-2xl font-bold">카테고리</div>
        <div className="flex">
          <RadioButton
            id="side"
            name="category"
            defaultValue={category}
            value="사이드프로젝트"
            onChange={onChange}
            className=" w-[105px] h-7.5 border-2 border-gray-200"
          />
          <RadioButton
            id="portfolio"
            name="category"
            defaultValue={category}
            value="포토폴리오프로젝트"
            onChange={onChange}
            className=" w-[130px] h-7.5 border-2 border-gray-200"
          />
          <RadioButton
            id="general"
            name="category"
            defaultValue={category}
            value="기타"
            onChange={onChange}
            className=" w-[70px] h-7.5 border-2 border-gray-200"
          />
        </div>
      </div>
      <div className="w-[390px]">
        <div className="text-2xl font-bold">참여방식</div>
        <div className="flex">
          <RadioButton
            id="online"
            name="onoff"
            defaultValue={onoff}
            value="온라인"
            onChange={onChange}
            className="w-40 h-7.5 border-2 border-gray-200"
          />
          <RadioButton
            id="offline"
            name="onoff"
            defaultValue={onoff}
            value="오프라인"
            onChange={onChange}
            className="w-40 h-7.5 border-2 border-gray-200"
          />
        </div>
      </div>
      <Button title="작성하기" onClick={mutate} />
    </div>
  );
}
