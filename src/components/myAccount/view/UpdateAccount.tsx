import React, { useState, useEffect } from "react";
import { center, col, row } from "style/display";
import { useSignUpStore } from "shared/sign-up/store";
import { skillInfos } from "api/myInfo/myInfoService";
import Input from "../../common/input";
import Button from "../../common/button";

export default function UpdateAccount() {
  const [skills, setSkills] = useState<string[]>([]);
  const { nickname, profileImageUrl, occupation, skillIds } = useSignUpStore();
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const getSkills = async () => {
    const { status, data } = await skillInfos();
    console.log(skillIds);
    console.log(
      skillIds.map((skillId: number) => {
        return data[skillId - 1].skillName;
      }),
    );
    if (status === 200 && skillIds) {
      setSkills([
        ...skillIds.map((skillId: number) => {
          return data[skillId - 1].skillName;
        }),
      ]);
    }
  };
  useEffect(() => {
    getSkills();
  }, []);
  console.log(skills);
  return (
    <div className={`min-h-screen ${center.colO(0)} `}>
      <div className={`w-80 text-1xl font-bold ${row(2)}`}>회원정보 수정</div>
      {/* <img
        src={profileImageUrl}
        className="mt-7.5 h-25 w-25 rounded-full bg-gray-200 "
        alt="profileImage"
      /> */}
      <div className="mt-7 text-2xl font-bold">{nickname}</div>
      <form className={`${col(2, 80)}`} onSubmit={onSubmitHandler}>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="occupation"
          value={occupation}
        />
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="search-skills"
          placeholder="스킬을 검색해보세요"
        />
        <div className="flex max-h-84 w-full flex-wrap gap-2 overflow-hidden">
          {skills.map((skill) => (
            <button className="bg-blue-500 border-blue-500 text-white font-bold flex h-10 grow items-center justify-center rounded-full border-2 px-4 duration-500">
              {skill}
            </button>
          ))}
        </div>
        <Button className="mt-5 h-14 w-80  bg-black text-white" type="submit">
          저장하기
        </Button>
      </form>
    </div>
  );
}
