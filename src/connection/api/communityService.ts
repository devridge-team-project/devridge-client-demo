import axios, { AxiosError } from "axios";

import { axiosJsonInstance } from "../axios";

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
