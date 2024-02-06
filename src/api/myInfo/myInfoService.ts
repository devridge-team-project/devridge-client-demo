import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginResponse, LoginRequest, PasswordRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const changePassword = async (password: PasswordRequest) => {
  console.log(password);
  try {
    const { status, data } = await axiosJsonInstance.patch("/users/password", password);
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

export const userInfo = async () => {
  try {
    const { status, data } = await axiosJsonInstance.get("/users/details");
    console.log(data);
    return { status, data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, data: null };
    }
    return { status: 500, data: null };
  }
};

export const skillInfos = async () => {
  try {
    const { status, data } = await axiosJsonInstance.get("/skills");
    console.log(data);
    return { status, data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, data: null };
    }
    return { status: 500, data: null };
  }
};
