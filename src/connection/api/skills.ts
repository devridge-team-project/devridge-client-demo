import httpRequest from "../axios";
export interface Skill {
  id: number;
  skillName: string;
}

function getSkills() {
  return httpRequest.get<Skill[]>("/api/skills");
}

export const skills = {
  get: getSkills,
};
