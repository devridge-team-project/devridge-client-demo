import axios, { AxiosRequestConfig } from "axios";

const getAxiosInstance = (ContentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: "http://localhost:3000",
    headers: {
      "Content-type": ContentType,
    },
  };

  const instance = axios.create(config);
  return instance;
};

export const axiosJsonInstance = getAxiosInstance("application/json");
export const axiosFormInstance = getAxiosInstance("multipart/form-data");
