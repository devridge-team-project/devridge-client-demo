import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getCookie } from "util/cookies";

const getAxiosInstance = (ContentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: "/api",
    headers: {
      "Content-type": ContentType,
    },
  };
  const instance = axios.create(config);
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie("accessToken");
      if (token) request.headers["Authorization"] = `Bearer ${token}`;
      return request;
    },
    (error: AxiosError) => {
      console.log(error);
    },
  );
  return instance;
};

export const axiosJsonInstance = getAxiosInstance("application/json");
export const axiosFormInstance = getAxiosInstance("multipart/form-data");
