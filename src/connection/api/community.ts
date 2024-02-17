import {
  Community,
  CommunityById,
  CommunityPost,
  Content,
  CommunityComments,
} from "interface/Community";
import httpRequest from "../axios";

export const getCommunity = () => {
  return httpRequest.get<Community[]>("api/community");
};

export const postCommunity = ({ title, content, hashtags = [] }: CommunityPost) => {
  return httpRequest.post("api/community", {
    title,
    content,
    hashtags,
  });
};

export const getCommunityById = (id: number) => {
  return httpRequest.get<CommunityById>(`api/community/${id}`);
};

export const getComments = (id: number) => {
  return httpRequest.get<CommunityComments[]>(`api/community/${id}/comments`);
};

export const postComments = (id: number, content: Content) => {
  return httpRequest.post(`api/community/${id}/comments`, content);
};

export const comment = {
  get: getComments,
  post: postComments,
};
