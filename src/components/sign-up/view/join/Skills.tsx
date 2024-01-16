import techs from "asset/sign-up/test/techs";
import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import { useState } from "react";
import { useSignUpStore } from "shared/sign-up/store";
import { useWidgetStore } from "shared/store";
import { col } from "style/display";

export default function Skills() {
  const [keyword, setKeyword] = useState("");
  const { setView } = useWidgetStore();
  const { skills, setSkills } = useSignUpStore();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const findSkill = (tech: string[]) => {
    const result = techs.filter((tech) => tech.includes(keyword));
    return result;
  };

  return (
    <SignUpLayout
      titles={["보유 스킬 입력"]}
      buttons={[["확인", () => setView("personalInformation")]]}
    >
      <input
        className="w-full rounded-md border-2 p-4 focus:outline-blue-500"
        value={keyword}
        onChange={onChangeValue}
        placeholder="스킬을 검색해보세요."
      />
      <div className={col(2)}>
        <div className="font-bold">빠른 선택</div>
        <div className="flex max-h-84 w-full flex-wrap gap-2 overflow-hidden">
          {findSkill(techs).map((tech) => (
            <button
              key={tech}
              onClick={() => setSkills(tech)}
              className={
                `${
                  skills.includes(tech) ? "bg-blue-500 border-blue-500 text-white" : "bg-white"
                } ` +
                "font-bold flex h-10 grow items-center justify-center rounded-full border-2 px-4 duration-500"
              }
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </SignUpLayout>
  );
}
