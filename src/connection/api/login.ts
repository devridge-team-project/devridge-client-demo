import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginRequest, PasswordRequest, EmailRequest, CodeRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post("api/login", user);

    console.log(data);
    const { accessToken } = data;

    console.log(accessToken);
    const expiration = new Date(Date.now() + 12 * 60 * 60 * 1000);
    setCookie("accessToken", accessToken, { expires: expiration });

    return { status: 200, accessToken };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, accessToken: null, member: [] };
    }
    return { status: 500, accessToken: null, member: [] };
  }
};

export const logout = async () => {
  try {
    const { status } = await axiosJsonInstance.post("api/logout");
    removeCookie("accessToken");
    return status;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return status;
    }
    return 500;
  }
};

export const deleteAccount = async (password: PasswordRequest) => {
  console.log(password);
  try {
    const { status, data } = await axiosJsonInstance.delete("api/users", { data: password });
    removeCookie("accessToken");
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