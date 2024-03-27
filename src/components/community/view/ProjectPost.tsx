import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Skill } from "interface/Skill";
import { skills } from "connection/api/skills";
import { center, col, row } from "style/display";
import Input from "../../common/input";
import { Button } from "design";
import SelectButton from "design/input/SelectButton";
import { postProject } from "connection/api/community";

export default function ProjectPost() {
  const [project, setProject] = useState({
    title: "",
    content: "",
    meeting: "",
  });
  const [skill, setSkill] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [checkRoles, setCheckRoles] = useState({
    frontEnd: false,
    backEnd: false,
    design: false,
    pm: false,
  });
  const [checkMeeting, setCheckMeeting] = useState({
    online: false,
    offline: false,
  });
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchItems, setSearchItems] = useState<Skill[]>([]);
  const { data: skillInfo } = useQuery({ queryKey: ["skill"], queryFn: () => skills.get() });

  const onAddSkillHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const set = new Set(skill);
    const target = e.target as HTMLDivElement;
    console.log(target.dataset.skillName);
    set.add(target.dataset.skillName as string);
    setSkill([...set]);
  };
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { title, content, meeting } = project;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setProject({ ...project, [name]: value });
  };
  const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const set = new Set(roles);
    setCheckRoles({ ...checkRoles, [id]: checked });
    if (checked) {
      set.add(id);
      setRoles([...set]);
    } else {
      set.delete(id);
      setRoles([...set]);
    }
  };
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postProject"],
    mutationFn: () =>
      postProject({
        ...project,
        roles,
        skillIds: skill.map((skillName) => {
          const matchedSkill = skillInfo?.find((skill) => skill.skillName === skillName);
          return matchedSkill?.id;
        }) as number[],
        images: ["abc"],
      }),
  });
  if (isSuccess) {
    alert("커뮤니티 게시글 등록 성공");
    navigate("/community/project");
  }
  console.log(roles);

  useEffect(() => {
    if (skillInfo) {
      setSearchItems([
        ...skillInfo.filter(({ id, skillName }) => skillName.includes(searchWord) === true),
      ]);
    }
  }, [searchWord]);

  return (
    <div className={`${center.colO(0)}`}>
      <div className="w-80">
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">제목 </div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 5자 이상 입력해주세요."
          />
        </div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">프로젝트 요약</div>
          <textarea
            className="w-[316px] h-[150px] resize-none"
            name="content"
            value={content}
            onChange={onChange}
            placeholder="프로젝트 요약을 입력하세요."
          />
        </div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">모집 역할</div>
          <div className="flex">
            <SelectButton
              id="frontEnd"
              type="checkbox"
              name="roles"
              value="프론트엔드"
              checked={checkRoles.frontEnd}
              onChange={onRoleChange}
            />
            <SelectButton
              id="backEnd"
              type="checkbox"
              name="roles"
              value="백엔드"
              checked={checkRoles.backEnd}
              onChange={onRoleChange}
            />
            <SelectButton
              id="design"
              type="checkbox"
              name="roles"
              value="디자인"
              checked={checkRoles.design}
              onChange={onRoleChange}
            />
            <SelectButton
              id="pm"
              type="checkbox"
              name="roles"
              value="기획"
              checked={checkRoles.pm}
              onChange={onRoleChange}
            />
          </div>
        </div>
        <div className=" font-bold text-xs mt-5">필요 스킬</div>
        <Input
          className="mt-1.5 block h-14 w-80 border"
          type="text"
          name="search-skills"
          placeholder="스킬을 검색해보세요"
          onChange={onSearchHandler}
          value={searchWord}
        />
        {searchWord && (
          <div className="max-h-40 ">
            {searchItems.map(({ id, skillName }) => (
              <div onClick={onAddSkillHandler} data-skill-name={skillName}>
                {skillName}
              </div>
            ))}
          </div>
        )}

        <div className="mb-4">
          <div className="text-xl font-bold mt-4 mb-2.5">참여방식</div>
          <div className="flex">
            <SelectButton
              id="online"
              type="radio"
              name="meeting"
              value="온라인"
              checked={meeting === "온라인"}
              onChange={onChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
            <SelectButton
              id="offline"
              type="radio"
              name="meeting"
              value="오프라인"
              checked={meeting === "오프라인"}
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
