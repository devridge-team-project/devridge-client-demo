import axios, { AxiosError } from "axios";
import { LoginResponse, LoginRequest } from "../../interface/Login";
import { axiosJsonInstance } from "../axios";

export const login = async (user: LoginRequest) => {
  try {
    const response: LoginResponse = await axiosJsonInstance.post("/login", user);
    const {
      message,
      body: { accessToken, status },
    } = response;
    console.log(response);
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return status;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status) {
      console.log(error.response?.status);
      return error.response?.status;
    }
    return null;
  }
};
