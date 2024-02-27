import { Skill } from "interface/Skill";
import httpRequest from "../axios";

const api = httpRequest.server;

function getSkills() {
  return api.get<Skill[]>("/api/skills");
}

export const skills = {
  get: getSkills,
};
