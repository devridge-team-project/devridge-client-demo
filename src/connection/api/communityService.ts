import axios, { AxiosError } from "axios";
import { CommunityPost, Content } from "interface/Community";
import { axiosJsonInstance } from "../axios";
import httpRequest from "../axios";

export const CommunityAll = async () => {
  try {
    const { status, data } = await axiosJsonInstance.get("api/community");
    console.log(status);
    console.log(status, data);
    return { status, data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, data: null };
    }
    return { status: 500, data: null };
  }
};

export const CommunityDetail = async (id: number) => {
  try {
    const { status, data } = await axiosJsonInstance.get(`api/community/${id}`);

    console.log(status);
    console.log(status, data);
    return { status, data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, data: null };
    }
    return { status: 500, data: null };
  }
};

export const CommunityDetailComments = async (id: number) => {
  try {
    const { status, data } = await axiosJsonInstance.get(`api/community/${id}/comments`);

    console.log(status);
    console.log(status, data);
    return { status, data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, data: null };
    }
    return { status: 500, data: null };
  }
};

export const postComments = (id: number, content: Content) => {
  return httpRequest.post(`api/community/${id}/comments`, content);
};

/* export const CommunityDetailCommentsWrite = async (id: number, content: Content) => {
  try {
    const { status, data } = await axiosJsonInstance.post(`api/community/${id}/comments`, {
      content,
    });

    console.log(status);
    console.log(status, data);
    return status;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return status;
    }
    return { status: 500, data: null };
  }
}; */

export const CommunityWrite = async ({ title, content, hashtags = [] }: CommunityPost) => {
  try {
    const { status } = await axiosJsonInstance.post("api/community", {
      title,
      content,
      hashtags,
    });

    console.log(status);
    return status;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return status;
    }
    return 500;
  }
};
