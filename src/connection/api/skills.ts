import { Skill } from "interface/Skill";
import httpRequest from "../axios";

function getSkills() {
  return httpRequest.get<Skill[]>("/api/skills");
}

export const skills = {
  get: getSkills,
};
