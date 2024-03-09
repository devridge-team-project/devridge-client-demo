import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { center, col, row } from "style/display";
import { Button } from "design";
import SelectButton from "design/input/SelectButton";
import { postStudy } from "connection/api/community";

export default function StudyPost() {
  const [project, setProject] = useState({
    title: "",
    location: "",
    category: "",
    onoff: "",
    content: "",
    images: [],
  });
  const { title, location, category, onoff, content, images } = project;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProject({ ...project, [name]: value });
  };
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postStudy"],
    mutationFn: () =>
      postStudy({
        title,
        content,
        category,
        images: ["abc"],
        location,
        totalPeople: 1,
        currentPeople: 1,
      }),
  });
  if (isSuccess) {
    alert("스터디 게시글 등록 성공");
    navigate("/community/study");
  }

  return (
    <div className={`${center.colO(0)}`}>
      <div className="w-[390px]">
        <div>
          <div className="text-2xl font-bold">제목</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 5자 이상 입력해주세요."
          />
        </div>
        <div>
          <div className="text-2xl font-bold">위치</div>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            placeholder="위치를 입력해주세요."
          />
        </div>
        <div>
          <div className="text-2xl font-bold">카테고리</div>
          <div className="flex">
            <SelectButton
              id="side"
              type="radio"
              name="category"
              defaultValue={category}
              value="CODING_TEST_STUDY"
              onChange={onChange}
              className=" w-[105px] h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="portfolio"
              type="radio"
              name="category"
              defaultValue={category}
              value="CS_STUDY"
              onChange={onChange}
              className=" w-[130px] h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="general"
              type="radio"
              name="category"
              defaultValue={category}
              value="INTERVIEW_STUDY"
              onChange={onChange}
              className=" w-[70px] h-7.5 border-2 border-gray-200"
            />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">내용</div>
          <textarea
            name="content"
            value={content}
            onChange={onChange}
            placeholder="스터디 내용을 작성해주세요."
          />
        </div>
        <div>
          <div className="text-2xl font-bold">참여방식</div>
          <div className="flex">
            <SelectButton
              id="online"
              type="radio"
              name="onoff"
              defaultValue={onoff}
              value="온라인"
              onChange={onChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="offline"
              type="radio"
              name="onoff"
              defaultValue={onoff}
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
