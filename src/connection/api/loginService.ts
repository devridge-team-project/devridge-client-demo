import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginRequest, PasswordRequest, EmailRequest, CodeRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post("/api/login", user);
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
    const { status } = await axiosJsonInstance.post("/api/logout");
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
    const res = await axiosJsonInstance.get("/api/users/test");
    console.log(res);
    const { status, data } = await axiosJsonInstance.get("/api/users/test");
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

export const deleteAccount = async (password: PasswordRequest) => {
  console.log(password);
  try {
    const { status, data } = await axiosJsonInstance.delete("/api/users", { data: password });
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

export const emailAuth = async (email: EmailRequest) => {
  console.log(email);
  try {
    const { status } = await axiosJsonInstance.post("/api/email-verifications", email);
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

export const codeCheck = async ({ email, code }: CodeRequest) => {
  console.log(email, code);
  try {
    const { status } = await axiosJsonInstance.get(
      `/api/email-verifications?email=${email}&code=${code}`,
    );
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
