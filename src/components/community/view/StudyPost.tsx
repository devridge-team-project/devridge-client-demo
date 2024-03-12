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
      <div className="w-80">
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">제목</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 5자 이상 입력해주세요."
          />
        </div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">위치</div>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            placeholder="위치를 입력해주세요."
          />
        </div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">카테고리</div>
          <div className="flex">
            <SelectButton
              id="side"
              type="radio"
              name="category"
              checked={category === "코테 스터디"}
              value="코테 스터디"
              onChange={onChange}
              className=" w-[90px] h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="portfolio"
              type="radio"
              name="category"
              checked={category === "CS 스터디"}
              value="CS 스터디"
              onChange={onChange}
              className=" w-20 h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="interview"
              type="radio"
              name="category"
              checked={category === "면접 스터디"}
              value="면접 스터디"
              onChange={onChange}
              className=" w-20 h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="general"
              type="radio"
              name="category"
              checked={category === "기타"}
              value="기타"
              onChange={onChange}
              className=" w-10 h-7.5 border-2 border-gray-200"
            />
          </div>
        </div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">내용</div>
          <textarea
            className="w-[316px] h-[150px] resize-none"
            name="content"
            value={content}
            onChange={onChange}
            placeholder="스터디 내용을 작성해주세요."
          />
        </div>
        <div className="mb-4">
          <div className="text-xl font-bold mt-4 mb-2.5">참여방식</div>
          <div className="flex">
            <SelectButton
              id="online"
              type="radio"
              name="onoff"
              checked={onoff === "온라인"}
              value="온라인"
              onChange={onChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="offline"
              type="radio"
              name="onoff"
              checked={onoff === "오프라인"}
              value="오프라인"
              onChange={onChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
          </div>
        </div>
        <Button title="작성하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
