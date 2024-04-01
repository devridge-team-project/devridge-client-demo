import React, { useState, useEffect } from "react";
import { center, col, row } from "style/display";
import { skills } from "connection/api/skills";
import Input from "../../common/input";
import { Button } from "design";
import { Skill } from "interface/Skill";
import { users } from "connection";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function UpdateAccount() {
  const { data: userDetails } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => users.getDetails(),
  });

  const [skill, setSkill] = useState<string[]>([]);
  const [introduction, setIntroduction] = useState<string>("");
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchItems, setSearchItems] = useState<Skill[]>([]);
  const { data: skillInfo } = useQuery({ queryKey: ["skill"], queryFn: () => skills.get() });

  const data = {
    skillIds: skill.map((skillName) => {
      const matchedSkill = skillInfo?.find((skill) => skill.skillName === skillName);
      return matchedSkill?.id;
    }),
    introduction: introduction,
  };
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const file = new File([""], "/images/test/default.png");
  formData.append("image", file);
  formData.append("info", blob);

  const { mutate } = useMutation({
    mutationFn: () => users.patch(formData),
    onSuccess: () => {
      alert("유저 정보 변경 성공");
    },
  });

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const onIntroductHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduction(e.target.value);
  };

  const onAddSkillHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const set = new Set(skill);
    const target = e.target as HTMLDivElement;
    console.log(target.dataset.skillName);
    set.add(target.dataset.skillName as string);
    setSkill([...set]);
    setSearchWord("");
  };

  const onRemoveSkillHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const set = new Set(skill);
    const target = e.target as HTMLButtonElement;
    console.log(target);
    set.delete(target.dataset.skill as string);
    setSkill([...set]);
  };

  useEffect(() => {
    if (userDetails) {
      const { nickname, imageUrl, introduction } = userDetails;
      setIntroduction(introduction);
      setProfileImageUrl(imageUrl);
    }
  }, [userDetails]);

  useEffect(() => {
    if (skillInfo) {
      setSearchItems([
        ...skillInfo.filter(({ id, skillName }) => skillName.includes(searchWord) === true),
      ]);
    }
  }, [searchWord]);

  useEffect(() => {
    if (skillInfo && userDetails) {
      setSkill([
        ...userDetails.skillIds.map((skillId: number) => {
          return skillInfo[skillId - 1].skillName;
        }),
      ]);
    }
  }, [skillInfo]);

  return (
    <div className={`min-h-screen ${center.colO(0)} `}>
      <div className={`w-80 text-1xl text-blue-grey font-bold ${row(2)}`}>회원정보 수정</div>
      <img
        src={profileImageUrl as string}
        className="mt-7.5 h-25 w-25 rounded-full bg-gray-200 "
        alt="profileImage"
      />
      <div className="mt-7 text-2xl text-blue-grey font-bold">{userDetails?.nickname}</div>
      <div className={`${col(2, 80)}`}>
        <div className="font-bold text-xs">자기소개(필수)</div>
        <Input
          className="mt-1.5 block h-14 w-80 border"
          type="text"
          name="job"
          onChange={onIntroductHandler}
          value={introduction}
        />
        <div className=" font-bold text-xs mt-5">보유 스킬</div>
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
              <div
                key={id}
                onClick={onAddSkillHandler}
                data-skill-name={skillName}
                className="hover:bg-gray-100"
              >
                {skillName}
              </div>
            ))}
          </div>
        )}

        <div className="flex mb-12.5 max-h-84 w-full flex-wrap gap-2 overflow-hidden">
          {skill.map((skill) => (
            <button
              key={skill}
              onClick={onRemoveSkillHandler}
              data-skill={skill}
              className="bg-blue-500 border-blue-500 text-white font-bold flex h-10 grow items-center justify-center rounded-full border-2 px-4 duration-500"
            >
              {`${skill} x`}
            </button>
          ))}
        </div>
        <Button title="저장하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
