import SignUpLayout from "design/template/SignUpLayout";
import { useState } from "react";
import { useSignUpStore } from "shared/sign-up/store";
import { useWidgetStore } from "shared/store";
import { col } from "style/display";
import { useQuery } from "@tanstack/react-query";
import { Skill, skills } from "connection";

export default function Skills() {
  const [keyword, setKeyword] = useState("");
  const { setView } = useWidgetStore();
  const { selectedSkills, setSelectedSkills } = useSignUpStore();

  const { data: techs, isLoading } = useQuery({
    queryKey: ["techs"],
    queryFn: skills.get,
  });
  if (!techs || isLoading) return <div>Not Found</div>;

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const findSkill = (props: Skill[]) => {
    const result = props.filter(({ skillName }) => skillName.includes(keyword));
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
          {findSkill(techs).map(({ id, skillName }) => (
            <button
              key={id}
              onClick={() => setSelectedSkills(id)}
              className={
                `${
                  selectedSkills.includes(id)
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-white"
                } ` +
                "font-bold flex h-10 grow items-center justify-center rounded-full border-2 px-4 duration-500"
              }
            >
              {skillName}
            </button>
          ))}
        </div>
      </div>
    </SignUpLayout>
  );
}
