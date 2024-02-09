import Axios, { AxiosError, AxiosRequestConfig } from "axios";

import { getCookie } from "util/cookies";

const { REACT_APP_SERVER_URL: origin } = process.env;

const axios = (ContentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: "/",
    headers: {
      "Content-type": ContentType,
    },
  };
  const instance = Axios.create(config);
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

const httpRequest = {
  get: function <Response = unknown>(url: string, config?: object) {
    return axios("application/json")
      .get<Response>(url, config)
      .then((res) => res.data);
  },
  getFormData: function <Response = unknown>(url: string, config?: object) {
    return axios("form-data")
      .get<Response>(url, config)
      .then((res) => res.data);
  },
  post: function <Request = any, Response = unknown>(url: string, data?: Request, config?: object) {
    return axios("application/json")
      .post<Response>(url, data, config)
      .then((res) => res.data);
  },
};

export const axiosJsonInstance = axios("application/json");
export const axiosFormInstance = axios("multipart/form-data");
export default httpRequest;
