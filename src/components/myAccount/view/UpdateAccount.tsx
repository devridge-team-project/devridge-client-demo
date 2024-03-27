import React, { useState, useEffect } from "react";
import { center, col, row } from "style/display";
import { skills } from "connection/api/skills";
import { useSignUpStore } from "shared/sign-up/store";
import Input from "../../common/input";
import { Button } from "design";
import { Skill } from "interface/Skill";
import { users } from "connection";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function UpdateAccount() {
  const {
    signUpData: { nickname, occupation, introduction, imageUrl, skillIds },
  } = useSignUpStore();
  const [skill, setSkill] = useState<string[]>([]);
  const [job, setJob] = useState<string>(occupation);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(imageUrl);
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

  const { mutate, data: res } = useMutation({
    mutationFn: () => users.patch(formData),
  });

  console.log(res);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const onJobHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };

  const onAddSkillHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const set = new Set(skill);
    const target = e.target as HTMLDivElement;
    console.log(target.dataset.skillName);
    set.add(target.dataset.skillName as string);
    setSkill([...set]);
  };

  useEffect(() => {
    if (skillInfo) {
      setSearchItems([
        ...skillInfo.filter(({ id, skillName }) => skillName.includes(searchWord) === true),
      ]);
    }
  }, [searchWord]);

  useEffect(() => {
    if (skillInfo && skillIds) {
      setSkill([
        ...skillIds.map((skillId: number) => {
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
      <div className="mt-7 text-2xl text-blue-grey font-bold">{nickname}</div>
      <div className={`${col(2, 80)}`}>
        <div className="font-bold text-xs">자기소개(필수)</div>
        <Input
          className="mt-1.5 block h-14 w-80 border"
          type="text"
          name="job"
          onChange={onJobHandler}
          value={job}
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
              <div onClick={onAddSkillHandler} data-skill-name={skillName}>
                {skillName}
              </div>
            ))}
          </div>
        )}

        <div className="flex  max-h-84 w-full flex-wrap gap-2 overflow-hidden">
          {skill.map((skill) => (
            <button className="bg-blue-500 border-blue-500 text-white font-bold flex h-10 grow items-center justify-center rounded-full border-2 px-4 duration-500">
              {skill}
            </button>
          ))}
        </div>
        <Button title="저장하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
