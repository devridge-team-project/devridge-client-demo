import {
  Community,
  CommunityById,
  CommunityPost,
  Content,
  CommunityComments,
  Project,
  ProjectPost,
  ProjectById,
  ProjectComments,
  Study,
  StudyPost,
  StudyById,
  StudyComments,
} from "interface/Community";
import httpRequest from "../axios";

const api = httpRequest.server;

export const getCommunity = () => {
  return api.get<Community>("api/community");
};

export const postCommunity = ({ title, content, hashtags = [] }: CommunityPost) => {
  return api.post("api/community", {
    title,
    content,
    hashtags,
  });
};

export const getCommunityById = (id: number) => {
  return api.get<CommunityById>(`api/community/${id}`);
};

export const getComments = (id: number) => {
  return api.get<CommunityComments>(`api/community/${id}/comments`);
};

export const postComments = (id: number, content: Content) => {
  return api.post(`api/community/${id}/comments`, content);
};

export const getProject = () => {
  return api.get<Project>("api/community/projects");
};

export const postProject = ({ title, content, skillIds, roles, meeting }: ProjectPost) => {
  return api.post("api/community/projects", {
    title,
    content,
    skillIds,
    roles,
    meeting,
  });
};

export const getProjectById = (id: number) => {
  return api.get<ProjectById>(`api/community/projects/${id}`);
};

export const getProjectComments = (id: number) => {
  return api.get<ProjectComments>(`api/community/projects/${id}/comments`);
};

export const postProjectComments = (id: number, content: Content) => {
  return api.post(`api/community/projects/${id}/comments`, content);
};

export const getStudy = () => {
  return api.get<Study>("api/community/studies");
};

export const postStudy = ({
  title,
  content,
  category,
  location,
  totalPeople,
  currentPeople,
}: StudyPost) => {
  return api.post("api/community/studies", {
    title,
    content,
    category,
    location,
    totalPeople,
    currentPeople,
  });
};

export const getStudyById = (id: number) => {
  return api.get<StudyById>(`api/community/studies/${id}`);
};

export const getStudyComments = (id: number) => {
  return api.get<StudyComments>(`api/community/studies/${id}/comments`);
};

export const postStudyComments = (id: number, content: Content) => {
  return api.post(`api/community/studies/${id}/comments`, content);
};
export const comment = {
  get: getComments,
  post: postComments,
};
