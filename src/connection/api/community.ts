import {
  Community,
  CommunityById,
  CommunityPost,
  Content,
  CommunityComments,
  Project,
  ProjectPost,
  Study,
  StudyPost,
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
  return api.get<CommunityComments[]>(`api/community/${id}/comments`);
};

export const postComments = (id: number, content: Content) => {
  return api.post(`api/community/${id}/comments`, content);
};

export const getProject = () => {
  return api.get<Project>("api/community/projects");
};

export const postProject = ({
  title,
  content,
  role,
  category,
  onoff,
  images = [],
}: ProjectPost) => {
  return api.post("api/community/projects", {
    title,
    content,
    role,
    category,
    onoff,
    images,
  });
};

export const getStudy = () => {
  return api.get<Study[]>("api/community/studies");
};

export const postStudy = ({
  title,
  content,
  category,
  images = [],
  location,
  totalPeople,
  currentPeople,
}: StudyPost) => {
  return api.post("api/community/projects", {
    title,
    content,
    category,
    images,
    location,
    totalPeople,
    currentPeople,
  });
};
export const comment = {
  get: getComments,
  post: postComments,
};
