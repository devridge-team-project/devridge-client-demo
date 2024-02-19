import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getCookie, setCookie } from "util/cookies";
const { REACT_APP_SERVER_URL: origin } = process.env;

const axios = (ContentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: origin,
    headers: {
      "Content-type": ContentType,
    },
  };
  const instance = Axios.create(config);
  instance.defaults.withCredentials = true;
  instance.interceptors.request.use(
    async (request) => {
      const token = getCookie("accessToken");
      if (token) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }

      return request;
    },
    (error: AxiosError) => {
      console.log(error);
    },
  );
  return instance;
};

const httpRequest = {
  get: function <Response = unknown>(url: string, data?: object) {
    return axios("application/json")
      .get<Response>(url, data)
      .then((res) => res.data);
  },
  getFormData: function <Response = unknown>(url: string, data?: object) {
    return axios("form-data")
      .get<Response>(url, data)
      .then((res) => res.data);
  },
  post: function <Request = any, Response = unknown>(url: string, data?: Request | object) {
    return axios("application/json")
      .post<Response>(url, data)
      .then((res) => res.data);
  },
  patch: function <Request = any, Response = unknown>(url: string, data?: Request) {
    return axios("application/json")
      .patch<Response>(url, data)
      .then((res) => res.data);
  },
};

export const axiosJsonInstance = axios("application/json");
export const axiosFormInstance = axios("multipart/form-data");
export default httpRequest;
