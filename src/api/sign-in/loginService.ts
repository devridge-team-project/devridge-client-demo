import axios, { AxiosError } from "axios";

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

    // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
    const { status } = await axiosJsonInstance.get("/logout");
    return status;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      const { status } = error.response;
      return status;
    }
    return 500;
  }
};
