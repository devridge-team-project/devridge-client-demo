import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginResponse, LoginRequest, PasswordRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post("/login", user);
    console.log(data);
    const { accessToken } = data;

    console.log(accessToken);
    const expiration = new Date(Date.now() + 900 * 1000);
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
    const { status } = await axiosJsonInstance.post("/logout");
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

export const authTest = async () => {
  try {
    const res = await axiosJsonInstance.get("/users/test");
    console.log(res);
    const { status, data } = await axiosJsonInstance.get("/users/test");
    console.log(status, data);
    const {
      body: { accessToken },
    } = data;
    const expiration = new Date(Date.now() + 900 * 1000);
    setCookie("accessToken", accessToken, { expires: expiration });
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

export const deleteAccount = async (password: PasswordRequest) => {
  console.log(password);
  try {
    const { status, data } = await axiosJsonInstance.delete("/users", { data: password });
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
