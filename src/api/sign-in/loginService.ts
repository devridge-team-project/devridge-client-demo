import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginResponse, LoginRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const login = async (user: LoginRequest) => {
  try {
    const { data, status } = await axiosJsonInstance.post("/login", user);
    const {
      body: { accessToken },
    } = data;
    console.log(data);
    console.log(accessToken);
    const expiration = new Date(Date.now() + 900 * 1000);
    setCookie("accessToken", accessToken, { expires: expiration });
    return { status, accessToken };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return { status, accessToken: null };
    }
    return { status: 500, accessToken: null };
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
