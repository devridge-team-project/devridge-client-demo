import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginRequest, PasswordRequest, EmailRequest, CodeRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const CommunityAll = async () => {
  try {
    const { status, data } = await axiosJsonInstance.get("community");
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
