import { Button, TeammateCard } from "design";

export default function Team() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center pt-8 h-188 gap-8">
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>스터디 및 사이드 프로젝트</div>
        <div>팀원을 구하고 싶을 때</div>
      </div>
      <Button title="팀원 구하기" onClick={() => {}} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {teammates.map((teammate) => (
            <TeammateCard key={teammate.occupation + teammate.skills} {...teammate} />
          ))}
        </div>
        <div className="flex gap-4">
          {teammates.map((teammate) => (
            <TeammateCard key={teammate.occupation + teammate.skills} {...teammate} />
          ))}
        </div>
      </div>
    </div>
  );
}

const teammates: {
  occupation: string;
  skills: [string, string][];
}[] = [
  {
    occupation: "풀스텍 개발자",
    skills: [
      ["React", "Node.js"],
      ["Javascript", "Java"],
    ],
  },
  {
    occupation: "프론트엔드 개발자",
    skills: [
      ["React", "Typescript"],
      ["Javascript", "HTML/CSS"],
    ],
  },
  {
    occupation: "백엔드 개발자",
    skills: [
      ["Node.js", "Express"],
      ["Javascript", "MongoDB"],
    ],
  },
  {
    occupation: "데이터 엔지니어",
    skills: [
      ["Python", "SQL"],
      ["빅데이터", "머신러닝"],
    ],
  },
  {
    occupation: "QA 엔지니어",
    skills: [
      ["테스트 자동화", "Jest"],
      ["Cypress", "Selenium"],
    ],
  },
  {
    occupation: "디자이너",
    skills: [
      ["Figma", "Adobe XD"],
      ["UI/UX", "프로토타이핑"],
    ],
  },
];
