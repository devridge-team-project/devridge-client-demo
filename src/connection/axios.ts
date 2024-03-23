import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getCookie, setCookie } from "util/cookies";

const apiConfig = {
  server: process.env.REACT_APP_SERVER_URL,
  auth: {
    naver: process.env.REACT_APP_AUTH_NAVER_AUTH_ORIGIN,
    kakao: process.env.REACT_APP_AUTH_KAKAO_AUTH_ORIGIN,
    gitHub: process.env.REACT_APP_AUTH_GITHUB_ORIGIN,
    google: process.env.REACT_APP_AUTH_GOOGLE_AUTH_ORIGIN,
  },
};

export const axios = (ContentType: string, baseURL: string) => {
  const config: AxiosRequestConfig = {
    baseURL: baseURL || "/api",
    headers: {
      "Content-type": ContentType,
    },
    // withCredentials: true,
  };

  const instance = Axios.create(config);
  return instance;
};

const http = (baseURL?: string) => {
  const axiosJson = axios("application/json", baseURL ?? "/api");
  const axiosForm = axios("form-data", baseURL ?? "/api");
  const axiosMultipart = axios("multipart/form-data", baseURL ?? "/api");
  return {
    get: function <Response = unknown>(url: string, data?: object) {
      return axiosJson.get<Response>(url, data).then((res) => res.data);
    },
    post: function <Request = any, Response = unknown>(url: string, data?: Request | object) {
      return axiosJson.post<Response>(url, data).then((res) => res.data);
    },
    postMultipart: function <Request = any, Response = unknown>(
      url: string,
      data?: Request | object,
    ) {
      return axiosMultipart.post<Response>(url, data).then((res) => res.data);
    },
    put: function <Request = any, Response = unknown>(url: string, data?: Request) {
      return axiosJson.put<Response>(url, data).then((res) => res.data);
    },
    patch: function <Request = any, Response = unknown>(url: string, data?: Request) {
      return axiosJson.patch<Response>(url, data).then((res) => res.data);
    },
    delete: function <Response = unknown>(url: string, data?: object) {
      return axiosJson.delete<Response>(url, data).then((res) => res.data);
    },
  };
};

const httpRequest = {
  server: http(apiConfig.server),
  gitHub: http(apiConfig.auth.gitHub),
  naver: http(apiConfig.auth.naver),
  kakao: http("https://kauth.kakao.com"),
};

export const axiosJsonInstance = axios("application/json", apiConfig.server ?? "/api");
export const axiosFormInstance = axios("multipart/form-data", apiConfig.server ?? "/api");
export default httpRequest;
